package com.demo.concurrent.test;

import com.demo.concurrent.thread.ExampleThread;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Created by 马宇驰 on 2017/12/1.
 */
public class DemoTest {
    public static void main(String[] args) {

        try {
            ExecutorService executorService = Executors.newCachedThreadPool();
            final CountDownLatch countDownLatch  = new CountDownLatch(4);
            for(int i=0;i<4;i++){
                StringBuilder test = new StringBuilder("test");
                StringBuilder append = test.append(i + "");
                executorService.execute(new ExampleThread(append.toString(),countDownLatch));
            }
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("##############################end#####################################");
    }
}
