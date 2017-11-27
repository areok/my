package com.demo.jdk8.switchtest;

import org.junit.Test;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public class TestDemo {
    @Test
    public void test1(){
        String a = "1";
        switch (a){
            case "1":{
                System.out.println("1"); break;
            }
            case "2":{
                System.out.println("2");
                break;
            }
            default:System.out.println("3");
        }
    }
}
