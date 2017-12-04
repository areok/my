package com.demo;

import org.junit.Test;

/**
 * Created by 马宇驰 on 2017/12/4.
 */
public class TestTemp {

    @Test
    public void test1(){
        int a = 1<<30;
        System.out.println(a);
        double pow = Math.pow(2, 31);
        int b = (int) pow;
        int c = Integer.MAX_VALUE;
        System.out.println(b);
        System.out.println(c);
    }
    @Test
    public void test2(){
        int n = -12;
        int n1 = n>>1;
        int n2 = n >>> 1;
        int n3 = (int)Math.pow(2,31)-6;
        System.out.println(n1);
        System.out.println(n2);
        System.out.print(n3);

    }
}
