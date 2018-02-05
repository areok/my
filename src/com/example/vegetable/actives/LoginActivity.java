package com.example.vegetable.actives;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.Window;
import android.widget.Button;
import android.widget.EditText;
import com.example.vegetable.R;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

/**
 * Created by 马宇驰 on 2018/1/2.
 */
public class LoginActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_login);

        EditText userNameEdit = (EditText)findViewById(R.id.username_edit);
        EditText passwordEdit = (EditText)findViewById(R.id.password_edit);

        Button login = (Button)findViewById(R.id.signin_button);
        Button register = (Button)findViewById(R.id.register_link);

        login.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                String userName = userNameEdit.getText().toString();
                String password = passwordEdit.getText().toString();
                String result = null;
                String url = "http://172.20.1.189:9090/user/login?userName="+userName+"&passWord="+password;
                HttpClient httpClient = new DefaultHttpClient();
                HttpResponse response;
                HttpGet httpGet = new HttpGet(url);
                try {
                    response = httpClient.execute(httpGet);
                    HttpEntity httpEntity = response.getEntity();
                    result = EntityUtils.toString(httpEntity);
                    System.out.println(result);

                } catch (IOException e) {
                    e.printStackTrace();
                }
                if(!result.equals("false")){
                    save(result);
                    Log.d("登录","loginOk");
                    //TODO跳转
                    Intent intent = new Intent();
                    intent.setClass(LoginActivity.this,MyActivity.class);
                    startActivity(intent);
                }else if(result.equals("false")){
                    //TODO提示登录失败
                }
            }
        });

        register.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                String userName = userNameEdit.getText().toString();
                String password = passwordEdit.getText().toString();
                Log.d(userName,password);
            }
        });

    }
    private void save(String inputText){
        FileOutputStream out = null;
        BufferedWriter writer = null;
        try {
            out = openFileOutput("data", Context.MODE_PRIVATE);
            writer = new BufferedWriter(new OutputStreamWriter(out));
            writer.write(inputText);
        }catch (IOException e){
            e.printStackTrace();
        }finally {
            try {
                if(writer!=null){
                    writer.close();
                }
            }catch (IOException e){
                e.printStackTrace();
            }
        }
    }
}