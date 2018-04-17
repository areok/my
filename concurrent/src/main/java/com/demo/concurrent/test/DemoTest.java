package com.demo.concurrent.test;

import com.demo.concurrent.thread.ExampleThread;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by 马宇驰 on 2017/12/1.
 */
public class DemoTest {
    public static void main(String[] args) {
        ConcurrentHashMap<String, String> stringStringHashMap = new ConcurrentHashMap<String, String>();
       //HashMap<String, String> stringStringHashMap = new HashMap<String, String>();
        try {
            ExecutorService executorService = Executors.newCachedThreadPool();
            final CountDownLatch countDownLatch  = new CountDownLatch(4);

            for(int i=0;i<10;i++){
                StringBuilder test = new StringBuilder("test");
                StringBuilder append = test.append(i + "");
                executorService.execute(new ExampleThread(append.toString(),countDownLatch,stringStringHashMap));
            }
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        stringStringHashMap.forEach((k,v)->{
            System.out.println(k+"-"+v);
        });
        System.out.println(stringStringHashMap.size());
    }
}
