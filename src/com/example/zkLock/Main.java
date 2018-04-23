package com.example.zkLock;

import org.I0Itec.zkclient.ZkClient;

import java.util.concurrent.TimeUnit;

/**
 * Created by 马宇驰 on 2018/4/23.
 */
public class Main {
    public static void main(String[] args) throws Exception {
        ZkClient zkClient = new ZkClient("127.0.0.1:2181",30000);

        DistributedLock simpleDistributedLockMutex = new SimpleDistributedLockMutex(zkClient,"/locker");
        boolean s = simpleDistributedLockMutex.acquire(500L, TimeUnit.SECONDS);
        System.out.println(s);
        //simpleDistributedLockMutex.release();
        s = simpleDistributedLockMutex.acquire(500L,TimeUnit.SECONDS);
        System.out.println(s);
    }
}
