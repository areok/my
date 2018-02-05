package com.example.vegetable.actives;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import com.example.entity.Business;
import com.example.vegetable.R;
import com.example.vegetable.adapters.ProductListAdapter;
import com.example.vegetable.utils.ShopItem;
import com.example.vegetable.utils.ShoppingCar;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/25.
 */
public class TodayCommendation extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.todaycommendation);

        String url = "http://172.20.1.189:9090/business/getProducts?type=1";
        HttpClient httpClient = new DefaultHttpClient();
        HttpResponse response;
        HttpGet httpGet = new HttpGet(url);
        try {
            response = httpClient.execute(httpGet);
            HttpEntity httpEntity = response.getEntity();
            String result = EntityUtils.toString(httpEntity);
            System.out.println(result);
            Gson gson = new Gson();

            List<Business> businesses = gson.fromJson(result, new TypeToken<List<Business>>() {
            }.getType());
            Log.d("R.layout.product_item",R.layout.product_item+"");
            ProductListAdapter productListAdapter = new ProductListAdapter(TodayCommendation.this,R.layout.product_item,businesses);
            ListView listView = (ListView) findViewById(R.id.list_product);
            listView.setAdapter(productListAdapter);
            listView.setOnItemClickListener(new AdapterView.OnItemClickListener(){
                @Override
                public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                    Business business = (Business) businesses.get(i);
                    //设置对话框标题
                    new AlertDialog.Builder(TodayCommendation.this).setTitle("系统提示")
                            .setMessage("是否加入购物车")
                            .setPositiveButton("确定",new DialogInterface.OnClickListener() {
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {

                                    Log.d("商品名称",business.getbName());
                                    //TODO 此处发起请求，加该商品加入购物车
                                    BigDecimal count = null;
                                    ShoppingCar shoppingCar = null;
                                    List<ShopItem> list = null;
                                     new ShoppingCar();
                                    ShopItem shopItem = new ShopItem();

                                    shoppingCar = load();

                                    if(shoppingCar==null){
                                        shoppingCar = new ShoppingCar();
                                        list = new ArrayList();
                                        shoppingCar.setShops(list);
                                        count = new BigDecimal(0);
                                    }else{
                                        list = shoppingCar.getShops();
                                        count = shoppingCar.getShopCount();
                                        Log.d("-----",shoppingCar.toString());
                                    }

                                    for(ShopItem si:list){
                                        if(si.getShopId().equals(business.getbId())){
                                            si.setShopNumber(si.getShopNumber()+1);
                                            si.setShopCount(si.getShopCount().add(si.getShopPrice()));
                                            count = count.add(si.getShopPrice());
                                            shoppingCar.setShopCount(count);
                                            save(shoppingCar);
                                            return;
                                        }
                                    }
                                    list.add(shopItem);
                                    shopItem.setShopId(business.getbId());
                                    shopItem.setShopName(business.getbName());
                                    shopItem.setShopUrl(business.getbUrl());
                                    shopItem.setShopPrice(business.getbPrice());
                                    shopItem.setShopNumber(1.0);
                                    shopItem.setShopCount(business.getbPrice().multiply(new BigDecimal(shopItem.getShopNumber().toString())));

                                    count = count.add(shopItem.getShopCount());
                                    shoppingCar.setShopCount(count);
                                    save(shoppingCar);
                                }
                            })
                            .setNegativeButton("返回",new DialogInterface.OnClickListener(){
                                @Override
                                public void onClick(DialogInterface dialogInterface, int i) {

                                }
                            }).show();
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
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

    private ShoppingCar load(){
        Object shoppingCar = null;
        FileInputStream in = null;
        ObjectInputStream objIn = null;
        File file = new File("/data/data/com.example.vegetable/files/shoppingcar");
        if(!file.exists()){
            Log.d("购物车为空","----");
            return null;
        }
        try {
            in = openFileInput("shoppingcar");
            objIn = new ObjectInputStream(in);
            shoppingCar = objIn.readObject();
        }catch (IOException e){
            e.printStackTrace();
            Log.e("加载购物车","IOException");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            Log.e("加载购物车","ClassNotFoundException");
        } finally {
            if(objIn!=null){
                try{
                    objIn.close();
                }catch (IOException e){
                    e.printStackTrace();
                }
            }
        }
        if(shoppingCar!=null){
            return (ShoppingCar)shoppingCar;
        }
        return null;
    }
}