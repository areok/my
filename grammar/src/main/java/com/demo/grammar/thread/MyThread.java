package com.demo.grammar.thread;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Created by 马宇驰 on 2018/1/12.
 */
public class MyThread {

    static AtomicInteger i = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {

        Long start = System.nanoTime();

        final CountDownLatch countDownLatch = new CountDownLatch(30000000);

        Runnable runnable1 = new Runnable() {

            private Integer j = 0;

            @Override
            public void run() {
                do {
                    MyThread.i.getAndIncrement();
                    countDownLatch.countDown();
                    j++;
                } while (j < 10000000);
            }
        };
        Runnable runnable2 = new Runnable() {
            private Integer j = 0;

            @Override
            public void run() {
                do {
                    MyThread.i.getAndIncrement();
                    countDownLatch.countDown();
                    j++;
                } while (j < 10000000);
            }
        };
        Runnable runnable3 = new Runnable() {
            private Integer j = 0;

            @Override
            public void run() {
                do {
                    MyThread.i.getAndIncrement();
                    countDownLatch.countDown();
                    j++;
                } while (j < 10000000);
            }
        };

        Thread thread1 = new Thread(runnable1);
        Thread thread2 = new Thread(runnable2);
        Thread thread3 = new Thread(runnable3);

        thread1.start();
        thread2.start();
        thread3.start();

        countDownLatch.await();

        System.out.println(MyThread.i.get());

        Long end = System.nanoTime();

        System.out.println(end-start);
    }

}
