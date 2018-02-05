package com.example.vegetable.adapters;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;
import com.example.entity.Order;
import com.example.vegetable.R;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/5.
 */
public class OrderAdapter extends ArrayAdapter<Order> {

    private Context context;

    private int resourceId;

    public OrderAdapter(Context context, int resource, List<Order> orders) {
        super(context, resource, orders);
        this.context = context;
        this.resourceId = resource;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View view = null;
        Order order = getItem(position);
        if(convertView ==null){
            view = LayoutInflater.from(context).inflate(resourceId,parent,false);
        }else {
            view = convertView;
        }

        TextView orderNum = view.findViewById(R.id.order_num);
        TextView orderState = view.findViewById(R.id.order_state);
        TextView orderTotal = view.findViewById(R.id.order_total);
        TextView orderCreateTime = view.findViewById(R.id.order_create_time);

        orderNum.setText(order.getOrderNum());
        orderState.setText(order.getOrderState());
        orderTotal.setText(order.getOrderTotal()+"元");
        orderCreateTime.setText(order.getOrderCreateTime().toString());
        return view;
    }
}
