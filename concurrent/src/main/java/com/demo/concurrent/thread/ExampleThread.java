package com.demo.concurrent.thread;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;

/**
 * Created by 马宇驰 on 2017/12/1.
 */
public class ExampleThread implements Runnable {

    private String msg;

    private final CountDownLatch countDownLatch;

    private Map<String,String> map;

    public ExampleThread(String msg,CountDownLatch countDownLatch,Map<String,String> map) {
        this.msg = msg;
        this.countDownLatch = countDownLatch;
        this.map = map;
    }

    @Override
    public void run() {
        int i = 0;
        do{
           // System.out.println(i+"->"+msg);
            System.out.printf("%d-----------------%s%n",i,msg);
            i++;
            map.put(UUID.randomUUID().toString(),i+"");
        }while (i<10000);
        countDownLatch.countDown();
    }
}
