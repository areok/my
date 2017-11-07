package com.example.demo.myutils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 马宇驰 on 2017/8/10.
 * 用于截取小数
 * 例如：500.000000  ------  500
 *       500.000010  ------  500.00001
 *       500         ------  500.00
 */
public class InterceptDecimalUtil {
    private static String DECOLLATOR = ".";
    private static String ZERO = "0";
    private static Character ZEROCHAR = '0';
    public static void main(String[] args) {
        String test = "500.0909000";
        String taret = InterceptDecimalUtil.execute(test,2);
        System.out.println(taret);
    }
    private static String execute(String resource,Integer digit){
        int index = resource.indexOf(DECOLLATOR);
        StringBuilder target = new StringBuilder(resource);
        if(index == -1){
            target.append(DECOLLATOR);
            for (int i=0;i<digit;i++) {
                target.append(ZERO);
            }
            return target.toString();
        }else {
            target = new StringBuilder(resource.substring(0,index));
            target.append(DECOLLATOR);
            String temp;
            temp = resource.substring(index+1,resource.length());
            temp = new StringBuilder(temp).reverse().toString();
            temp =  mm(temp);
            temp = new StringBuilder(temp).reverse().toString();
            return target.append(temp).toString();
        }
    }
    private static String mm(String str){
        if(str.charAt(0)==ZEROCHAR){
            return mm(str.substring(1,str.length()));
        }
        return str;
    }
}
