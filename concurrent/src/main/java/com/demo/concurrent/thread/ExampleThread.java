package com.demo.concurrent.thread;

import java.util.concurrent.CountDownLatch;

/**
 * Created by 马宇驰 on 2017/12/1.
 */
public class ExampleThread implements Runnable {

    private String msg;

    private final CountDownLatch countDownLatch;

    public ExampleThread(String msg,CountDownLatch countDownLatch) {
        this.msg = msg;
        this.countDownLatch = countDownLatch;
    }

    @Override
    public void run() {
        int i = 0;
        do{
           // System.out.println(i+"->"+msg);
            System.out.printf("%d-----------------%s%n",i,msg);
            i++;
        }while (i<100);
        countDownLatch.countDown();
    }
}
