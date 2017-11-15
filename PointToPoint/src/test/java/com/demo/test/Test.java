package com.demo.test;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by 马宇驰 on 2017/11/14.
 */
public class Test {
    @org.junit.Test
    public void testMapRemove(){
        HashMap<String, String> stringStringHashMap = new HashMap<>();
        stringStringHashMap.put("1","1");
        stringStringHashMap.put("2","2");
        stringStringHashMap.put("3","3");



        for (Map.Entry<String,String> temp:stringStringHashMap.entrySet()) {
            if(temp.getValue().equals("3")){
                stringStringHashMap.remove(temp.getKey(),temp.getValue());
            }
        }

        for (Map.Entry<String,String> temp:stringStringHashMap.entrySet()) {
            System.out.println(temp.getKey()+"-------------------"+temp.getValue());
        }
    }
}
