package com.demo.concurrent.test;

import org.junit.Test;

import java.math.BigDecimal;

/**
 * Created by 马宇驰 on 2017/12/18.
 */
public class TestBigDecimal {
    @Test
    public void test1(){
        BigDecimal bigDecimal = new BigDecimal(4180000);
        BigDecimal bigDecimal1 = new BigDecimal(0.708333);
        BigDecimal bigDecimal2 = bigDecimal.multiply(bigDecimal1).divide(new BigDecimal(100)).setScale(2, BigDecimal.ROUND_HALF_UP);
        BigDecimal bigDecimal3 = bigDecimal.multiply(bigDecimal1).divide(new BigDecimal(100));
        System.out.println(bigDecimal2);
        System.out.println(bigDecimal3);
    }
}
