package com.example.vegetable.adapters;

import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;
import com.example.entity.Address;
import com.example.vegetable.R;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public class AddressAdapter extends ArrayAdapter<Address> {
    private int resourceId;

    private Context context;

    public AddressAdapter(Context context, int resource, List<Address> objects) {
        super(context, resource, objects);
        this.resourceId = resource;
        this.context = context;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        View view = null;
        Address address = getItem(position);
        if(convertView ==null){
            view = LayoutInflater.from(context).inflate(resourceId,parent,false);
        }else {
            view = convertView;
        }
        TextView userName = (TextView)view.findViewById(R.id.user_name);
        TextView addressPhone = (TextView)view.findViewById(R.id.address_phone);
        TextView addresss = (TextView)view.findViewById(R.id.address);

        userName.setText("收货人姓名: "+address.getUserName());
        addressPhone.setText("收货人电话号码: "+address.getUserPhone());
        addresss.setText("收货地址: "+address.getUserAddress());
        if(address.getStatus().equals("01")){
            view.setBackgroundColor(Color.GRAY);
        }
        return view;
    }
}
