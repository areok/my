package com.example.zkLock;

import java.util.concurrent.TimeUnit;

/**
 * Created by 马宇驰 on 2018/4/23.
 */
public interface DistributedLock {

    /**
     * 获取锁，如果没有得到就等待
     */

    void acquire() throws Exception;

    /**
     * 获取锁，直到超时
     *
     * @param time
     * @param unit time参数的单位
     * @throws Exception
     * @return是否获取到锁
     */

    boolean acquire(long time, TimeUnit unit) throws Exception;

    /**
     * 释放锁
     *
     * @throws Exception
     */

    void release() throws Exception;

}