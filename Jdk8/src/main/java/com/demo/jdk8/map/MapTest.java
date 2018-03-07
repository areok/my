package com.demo.jdk8.map;

import org.junit.Test;

import java.util.Collection;
import java.util.HashMap;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by 马宇驰 on 2018/1/10.
 */
public class MapTest {
    @Test
    public void test1(){
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap<String,Long>();
        Object a = concurrentHashMap.putIfAbsent("a",System.currentTimeMillis());

        Object c = concurrentHashMap.putIfAbsent("c",System.currentTimeMillis());

        Object b = concurrentHashMap.putIfAbsent("a",System.currentTimeMillis());
        System.out.println(a+"-"+b+"-"+c);

    }
    @Test
    public void test2(){
        HashMap hashMap = new HashMap();
        hashMap.put("1","1");
        hashMap.put("2","1");
        Collection values = hashMap.keySet();
        System.out.println(hashMap.containsValue("2"));
        System.out.println(hashMap.containsValue("1"));
        System.out.println(values);
    }
}
