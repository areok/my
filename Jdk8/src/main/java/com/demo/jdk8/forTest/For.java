package com.demo.jdk8.forTest;

import org.junit.Test;

import java.util.*;

/**
 * Created by 马宇驰 on 2017/11/27.
 */
public class For {
    @Test
    public void test1(){
        List<Integer> testInteger = new ArrayList<Integer>(){{
            add(1);
            add(2);
            add(3);
        }};
        testInteger.forEach(integer -> {
            System.out.println(integer+"/"+integer.getClass());
        });
        List<String> testString = new ArrayList<String>(){{
            add("1");
            add("2");
            add("3");
        }};
        testString.forEach(string -> {
            System.out.println(string+"/"+string.getClass());
        });
    }

    @Test
    public void test2(){
        Map<Integer,String> map = new HashMap<Integer, String>(){{
            put(1,"1");
            put(2,"2");
            put(3,"3");
        }};
        map.forEach((k,v)->{
            System.out.println(k+"/"+v);
        });
        Set<Map.Entry<Integer, String>> entries = map.entrySet();
        for (Map.Entry<Integer,String> entry:entries) {
            System.out.println(entry.getKey()+"/"+entry.getValue());
        }
    }
}
