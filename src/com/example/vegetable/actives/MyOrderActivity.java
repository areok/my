package com.example.vegetable.actives;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ListView;
import com.example.entity.Order;
import com.example.vegetable.R;
import com.example.vegetable.adapters.OrderAdapter;
import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.lang.reflect.Type;
import java.util.Date;
import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/5.
 */
public class MyOrderActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.order_activity);
        String url = "http://172.20.1.189:9090/order/getOrders?userId=1";
        HttpClient httpClient = new DefaultHttpClient();
        HttpResponse response;
        HttpGet httpGet = new HttpGet(url);
        List<Order> orderList = null;
        try {
            response = httpClient.execute(httpGet);
            HttpEntity httpEntity = response.getEntity();
            String result = EntityUtils.toString(httpEntity);
            System.out.println(result);

            GsonBuilder builder = new GsonBuilder();

            // Register an adapter to manage the date types as long values
            builder.registerTypeAdapter(Date.class, new JsonDeserializer<Date>() {
                public Date deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
                    return new Date(json.getAsJsonPrimitive().getAsLong());
                }
            });

            Gson gson = builder.create();
            orderList = gson.fromJson(result, new TypeToken<List<Order>>(){}.getType());

        }catch (Exception e){
            e.printStackTrace();
        }
        ListView listView = findViewById(R.id.order_list);
        OrderAdapter orderAdapter = new OrderAdapter(MyOrderActivity.this,R.layout.order_item_activity,orderList);
        listView.setAdapter(orderAdapter);
    }
}