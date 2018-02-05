package com.example.vegetable.actives;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import com.example.vegetable.R;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public class AddressAddActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.address_add);

        Button button = findViewById(R.id.add_address_button);
        EditText userNameEdit = findViewById(R.id.user_name_edit);
        EditText userPhoneEdit = findViewById(R.id.user_phone_edit);
        EditText userAddressEdit = findViewById(R.id.user_address_edit);

        button.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                String url = "http://172.20.1.189:9090/address/addAddress";
                HttpClient httpClient = new DefaultHttpClient();
                HttpResponse response;
                HttpPost httpPost = new HttpPost(url);

                String result;
                String userName = userNameEdit.getText().toString();
                String userPhone = userPhoneEdit.getText().toString();
                String userAddress = userAddressEdit.getText().toString();
                try {
                    Log.d("userName---",userName);
                    Log.d("userPhone---",userPhone);
                    Log.d("userAddress--",userAddress);

                    JSONObject params = new JSONObject();
                    params.put("userName",userName);
                    params.put("userPhone",userPhone);
                    params.put("userAddress",userAddress);
                    params.put("userId",1);


                    StringEntity s = new StringEntity(params.toString());
                    s.setContentEncoding("UTF-8");
                    //发送json数据需要设置contentType
                    s.setContentType("application/json");
                    Log.d("param",s.toString());
                    httpPost.setEntity(s);
                    response = httpClient.execute(httpPost);
                    Log.d("code",response.getStatusLine().getStatusCode()+"");
                    HttpEntity httpEntity = response.getEntity();
                    result = EntityUtils.toString(httpEntity);
                    System.out.println(result);
                    if(result.equals("true")){
                        Log.d("----","新增成功");
                        Intent intent = new Intent();
                        intent.setClass(AddressAddActivity.this,MyAddressActivity.class);
                        startActivity(intent);
                    }

                } catch (IOException e) {
                    e.printStackTrace();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}