package com.demo.concurrent.thread;

import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by 马宇驰 on 2017/12/1.
 */
public class ExampleThread implements Runnable {

    private String msg;

    private final CountDownLatch countDownLatch;

    private ConcurrentHashMap<String,String> map;

    public ExampleThread(String msg,CountDownLatch countDownLatch,ConcurrentHashMap<String,String> map) {
        this.msg = msg;
        this.countDownLatch = countDownLatch;
        this.map = map;
    }

    @Override
    public void run() {
            AtomicInteger atomicInteger = new AtomicInteger(0);
        int i = 0;
            do{
                // System.out.println(i+"->"+msg);
//                System.out.printf("%d-----------------%s%n",atomicInteger.get(),msg);
                //atomicInteger.getAndIncrement();
                i++;
                map.put(UUID.randomUUID().toString(),i+"");
            }
            //while (atomicInteger.get()<10000);
        while (i<10000);
            countDownLatch.countDown();
    }
}
