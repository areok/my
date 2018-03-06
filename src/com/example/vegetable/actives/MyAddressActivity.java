package com.example.vegetable.actives;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ListView;
import android.widget.TextView;
import com.example.entity.Address;
import com.example.vegetable.R;
import com.example.vegetable.adapters.AddressAdapter;
import com.example.vegetable.constant.UrlConstant;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public class MyAddressActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.address_activity);
        // TODO 用户id
        String url = UrlConstant.url+"/address/getAddress?userId=1";
        HttpClient httpClient = new DefaultHttpClient();
        HttpResponse response;
        HttpGet httpGet = new HttpGet(url);
        List<Address> addresses = null;
        try {
            response = httpClient.execute(httpGet);
            HttpEntity httpEntity = response.getEntity();
            String result = EntityUtils.toString(httpEntity);
            System.out.println(result);
            Gson gson = new Gson();

            addresses = gson.fromJson(result, new TypeToken<List<Address>>() {}.getType());
        }catch (Exception e){
            e.printStackTrace();
        }
        if(addresses.size()==0){
            Log.d("---------","暂无收货地址");
        }else {
            ListView listView = findViewById(R.id.list_address);
            TextView addAddress = findViewById(R.id.addAddress);
            AddressAdapter adressAdapter = new AddressAdapter(MyAddressActivity.this,R.layout.address_item,addresses);
            listView.setAdapter(adressAdapter);
            addAddress.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view) {
                    Intent intent = new Intent();
                    intent.setClass(MyAddressActivity.this,AddressAddActivity.class);
                    startActivity(intent);
                }
            });
        }
    }
}