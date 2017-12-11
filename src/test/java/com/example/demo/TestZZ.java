package com.example.demo;

import java.util.regex.Pattern;

/**
 * Created by 马宇驰 on 2017/8/18.
 */
public class TestZZ {
    public static void main(String[] args) {
        String creater = "waiwei_中国";
        if( Pattern.compile("[waiwei_]").matcher(creater).find()){
            System.out.println("s");
        }else{
            System.out.println("ss");
        }
        Pattern PATTERN_NAME_HAS_SYMBOL = Pattern.compile("[:*,/\\-._0-9a-zA-Z]+");
        System.out.println(PATTERN_NAME_HAS_SYMBOL.matcher(creater));
    }
}
