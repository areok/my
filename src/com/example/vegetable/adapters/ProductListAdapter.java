package com.example.vegetable.adapters;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import com.example.entity.Business;
import com.example.vegetable.R;
import com.example.vegetable.utils.ImageUtil;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
public class ProductListAdapter extends ArrayAdapter<Business> {

    private int resourceId;

    public ProductListAdapter(Context context, int resource, List<Business> objects) {
        super(context, resource, objects);
        this.resourceId = resource;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        Log.d("resourceId",resourceId+"");
        View view = null;
        Business business = getItem(position);
        if(convertView ==null){
            view = LayoutInflater.from(getContext()).inflate(resourceId,parent,false);
        }else {
            view = convertView;
        }
        ImageView imageView = (ImageView)view.findViewById(R.id.product_image);
        TextView productName = (TextView)view.findViewById(R.id.product_name);
        TextView productPrice = (TextView)view.findViewById(R.id.product_price);
        TextView productNumber = (TextView)view.findViewById(R.id.product_number);
        imageView.setImageBitmap(ImageUtil.returnBitMap(business.getbUrl()));
        productName.setText("商品名称: "+business.getbName());
        productPrice.setText("单价: "+business.getbPrice()+"元/kg");
        productNumber.setText("库存: "+business.getbRemark());
        return view;
    }
}
