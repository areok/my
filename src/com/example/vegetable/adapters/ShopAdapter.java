package com.example.vegetable.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.vegetable.R;
import com.example.vegetable.utils.ImageUtil;
import com.example.vegetable.utils.ShopItem;
import com.example.vegetable.utils.ShoppingCar;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public class ShopAdapter extends BaseAdapter {

    //商品实体类数据
    private ShoppingCar shoppingCar;
    //上下文
    private Context context;

    //第一步，设置接口
    private View.OnClickListener onAddNum;
    private View.OnClickListener onSubNum;

    //第二步，设置接口方法
    public void setOnAddNum(View.OnClickListener onAddNum){
        this.onAddNum = onAddNum;
    }
    public void setOnSubNum(View.OnClickListener onSubNum){
        this.onSubNum = onSubNum;
    }

    public ShopAdapter(ShoppingCar shoppingCar, Context context) {
        this.shoppingCar = shoppingCar;
        this.context = context;
    }
    @Override
    public int getCount() {
        int ret = 0;
        if(shoppingCar!=null){
            ret = shoppingCar.getShops().size();
        }
        return ret;
    }

    @Override
    public Object getItem(int i) {
        return shoppingCar.getShops().get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        List<ShopItem> shopItemList = shoppingCar.getShops();
        View v = null;
        if (view != null){
            v = view;
        }else{
            v = LayoutInflater.from(context).inflate(R.layout.shopcar_item,viewGroup,false);
        }
        ViewHolder holder = (ViewHolder) v.getTag();
        if (holder == null) {
             holder = new ViewHolder();
             holder.item_product_url = (ImageView)v.findViewById(R.id.item_product_url);
             holder.item_product_name = (TextView) v.findViewById(R.id.item_product_name);
             holder.item_product_num = (TextView) v.findViewById(R.id.item_product_num);
             holder.item_product_price = (TextView) v.findViewById(R.id.item_product_price);
             holder.item_product_count = (TextView) v.findViewById(R.id.item_product_count);

           //第三步,设置接口回调，注意参数不是上下文，它需要ListView所在的Activity或者Fragment处理接口回调方法
             holder.item_btn_add = (ImageButton) v.findViewById(R.id.item_btn_add);
             holder.item_btn_add.setOnClickListener(onAddNum);

             holder.item_btn_sub = (ImageButton) v.findViewById(R.id.item_btn_sub);
             holder.item_btn_sub.setOnClickListener(onSubNum);
        }
        holder.item_product_url.setImageBitmap(ImageUtil.returnBitMap(shopItemList.get(i).getShopUrl()));
        holder.item_product_name.setText(shopItemList.get(i).getShopName());
        holder.item_product_num.setText(shopItemList.get(i).getShopNumber()+"");
        holder.item_product_price.setText(shopItemList.get(i).getShopPrice() + "");
        holder.item_product_count.setText(shopItemList.get(i).getShopCount() + "");

        //第四步，设置Tag，用于判断用户当前点击的哪一个列表项的按钮
        holder.item_btn_add.setTag(i);
        holder.item_btn_sub.setTag(i);
        v.setTag(holder);
        return v;
    }
    private static class ViewHolder{
         //商品名称，数量，总价
         private ImageView item_product_url;
         private TextView item_product_name;
         private TextView item_product_num;
         private TextView item_product_price;
        private TextView item_product_count;
         //增减商品数量按钮
         private ImageButton item_btn_add;
         private ImageButton item_btn_sub;
    }
}
