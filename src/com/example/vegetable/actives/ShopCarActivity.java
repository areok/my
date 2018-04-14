package com.example.vegetable.actives;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.database.DataSetObserver;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import com.example.entity.User;
import com.example.vegetable.R;
import com.example.vegetable.adapters.ShopAdapter;
import com.example.vegetable.constant.UrlConstant;
import com.example.vegetable.utils.ShopItem;
import com.example.vegetable.utils.ShoppingCar;
import com.google.gson.Gson;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;

import java.io.*;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public class ShopCarActivity extends Activity implements View.OnClickListener, AdapterView.OnItemClickListener {

    //数据源
    private ShoppingCar shoppingCar;
    //自定义适配器
    private ShopAdapter adapter;
    //ListView控件
    private ListView listView;
    //总价
    private TextView text;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.shopcar_activity);
        shoppingCar = load();
        Log.d("购物车", shoppingCar.toString());

        listView = (ListView) findViewById(R.id.shopcarlist);

        //提交订单按钮
        TextView submitOrder = (TextView) findViewById(R.id.submitOrder);

        List<ShopItem> shopItemList = shoppingCar.getShops();

        adapter = new ShopAdapter(shoppingCar, this);

        listView.setAdapter(adapter);

        //以上就是我们常用的自定义适配器ListView展示数据的方法了

        //解决问题：在哪里处理按钮的点击响应事件，是适配器 还是 Activity或者Fragment，这里是在Activity本身处理接口
        //执行添加商品数量，减少商品数量的按钮点击事件接口回调
        adapter.setOnAddNum(this);
        adapter.setOnSubNum(this);
        listView.setOnItemClickListener(this);
        submitOrder.setOnClickListener(this);

        //注册观察者
        adapter.registerDataSetObserver(sumObServer);
        text = (TextView) findViewById(R.id.text);
        adapter.notifyDataSetChanged();
    }

    @Override
    public void onClick(View view) {
        Object tag = view.getTag();
        switch (view.getId()) {
            case R.id.item_btn_add: //点击添加数量按钮，执行相应的处理
                // 获取 Adapter 中设置的 Tag
                if (tag != null && tag instanceof Integer) { //解决问题：如何知道你点击的按钮是哪一个列表项中的，通过Tag的position
                    int position = (Integer) tag;
                    //更改集合的数据
                    Double num = shoppingCar.getShops().get(position).getShopNumber();
                    num++;
                    shoppingCar.getShops().get(position).setShopNumber(num); //修改集合中商品数量
                    shoppingCar.getShops().get(position).setShopCount(shoppingCar.getShops().get(position).getShopPrice().multiply(new BigDecimal(shoppingCar.getShops().get(position).getShopNumber()))); //修改集合中该商品总价 数量*单价
                    //解决问题：点击某个按钮的时候，如果列表项所需的数据改变了，如何更新UI
                    adapter.notifyDataSetChanged();
                }
                break;
            case R.id.item_btn_sub: //点击减少数量按钮 ，执行相应的处理
                // 获取 Adapter 中设置的 Tag
                if (tag != null && tag instanceof Integer) {
                    int position = (Integer) tag;
                    //更改集合的数据
                    Double num = shoppingCar.getShops().get(position).getShopNumber();
                    if (num > 0) {
                        num--;
                        shoppingCar.getShops().get(position).setShopNumber(num); //修改集合中商品数量
                        shoppingCar.getShops().get(position).setShopCount(shoppingCar.getShops().get(position).getShopPrice().multiply(new BigDecimal(shoppingCar.getShops().get(position).getShopNumber()))); //修改集合中该商品总价 数量*单价
                        adapter.notifyDataSetChanged();
                    }
                }
                break;
            case R.id.submitOrder:
                Log.d("------------","提交订单");
                save(shoppingCar);
                User user = loadUser();
                submit(user.getuId(),shoppingCar.getShopCount());
                //TODO 清理我的订单
                clearCar();
                //TODO 跳转到订单也
                Intent intent = new Intent();
                intent.setClass(ShopCarActivity.this,MyOrderActivity.class);
                startActivity(intent);
                finish();
                break;
        }
    }

    @Override
    public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
        Toast.makeText(ShopCarActivity.this, "点击了第" + i + "个列表项", Toast.LENGTH_SHORT).show();
    }


    private void save(ShoppingCar shoppingCar){
        FileOutputStream out = null;
        ObjectOutputStream objOut= null;
        try {
            out = openFileOutput("shoppingcar", Context.MODE_PRIVATE);
            objOut=new ObjectOutputStream(out);
            objOut.writeObject(shoppingCar);
        }catch (IOException e){
            e.printStackTrace();
        }finally {
            try {
                if(objOut!=null){
                    objOut.flush();
                    objOut.close();
                }
            }catch (IOException e){
                e.printStackTrace();
            }
        }

    }

    private ShoppingCar load() {
        Object shoppingCar = null;
        FileInputStream in = null;
        ObjectInputStream objIn = null;
        File file = new File("/data/data/com.example.vegetable/files/shoppingcar");
        if (!file.exists()) {
            Log.d("购物车为空", "----");
            return null;
        }
        try {
            in = openFileInput("shoppingcar");
            objIn = new ObjectInputStream(in);
            shoppingCar = objIn.readObject();
        } catch (IOException e) {
            e.printStackTrace();
            Log.e("加载购物车", "IOException");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            Log.e("加载购物车", "ClassNotFoundException");
        } finally {
            if (objIn != null) {
                try {
                    objIn.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        if (shoppingCar != null) {
            return (ShoppingCar) shoppingCar;
        }
        return null;
    }

    public void clearCar(){
        File file = new File("/data/data/com.example.vegetable/files/shoppingcar");
        if (file.exists()) {
            Log.d("清空购物车", "----");
            file.delete();
        }
    }

    private DataSetObserver sumObServer = new DataSetObserver() {
        /**
         * 当Adapter的notifyDataSetChanged方法执行时被调用
         */
        @Override
        public void onChanged() {
            super.onChanged();
            Log.d("统计总金额","--");
            //执行相应的操作
            BigDecimal sum = new BigDecimal(0);
            List<ShopItem> shopItemList = shoppingCar.getShops();
            for(ShopItem shopItem:shopItemList){
                Log.d("统计总金额",shopItem.getShopCount().toString());
                sum = sum.add(shopItem.getShopCount());
            }
            shoppingCar.setShopCount(sum);
            text.setText("总金额:" + sum.toString());
        }

        /**
         * 当Adapter 调用 notifyDataSetInvalidate方法执行时被调用
         */
        @Override
        public void onInvalidated() {
            super.onInvalidated();
            //执行相应的操作
        }
    };
    private String submit(Integer userId,BigDecimal orderTotal){
        String result;
        String url = UrlConstant.url+"/order/addOrder";
        HttpClient httpClient = new DefaultHttpClient();
        HttpResponse response;
        HttpPost httpPost = new HttpPost(url);
        try{
            JSONObject params = new JSONObject();
            //用户id
            params.put("userId",userId);
            //订单价值
            params.put("orderTotal",orderTotal);

            StringEntity s = new StringEntity(params.toString());
            s.setContentEncoding("UTF-8");
            //发送json数据需要设置contentType
            s.setContentType("application/json");
            httpPost.setEntity(s);
            response = httpClient.execute(httpPost);
            Log.d("code",response.getStatusLine().getStatusCode()+"");
            HttpEntity httpEntity = response.getEntity();
            result = EntityUtils.toString(httpEntity);
            System.out.println(result);
            if(result.equals("true")){
                Log.d("----","提交订单成功");
                return "true";
            }
            return "false";

        }catch (Exception e){
            e.printStackTrace();
            return "false";
        }
    }
    private User loadUser(){
        FileInputStream in = null;
        BufferedReader reader = null;
        StringBuilder stringBuilder = new StringBuilder();
        try {
            in = openFileInput("data");
            reader = new BufferedReader(new InputStreamReader(in));
            String line = null;
            while ((line = reader.readLine())!=null){
                stringBuilder.append(line);
            }
        }catch (IOException e){
            e.printStackTrace();
        }finally {
            if(reader!=null){
                try{
                    reader.close();
                }catch (IOException e){
                    e.printStackTrace();
                }
            }
        }
        Gson gson = new Gson();
        User user = gson.fromJson(stringBuilder.toString(), User.class);
        return user;
    }
}