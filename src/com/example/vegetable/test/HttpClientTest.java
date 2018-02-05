package com.example.vegetable.test;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import java.io.IOException;

/**
 * Created by 马宇驰 on 2017/12/25.
 */
public class HttpClientTest {
    public static void main(String[] args) {
        String url = "http://172.20.1.189:9999/";
        HttpClient httpClient = new DefaultHttpClient();
        HttpResponse response;
        HttpGet httpGet = new HttpGet(url);

        try {
            response = httpClient.execute(httpGet);
            System.out.println(response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
