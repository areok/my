package com.example.demo.test;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.regex.Pattern;

/**
 * Created by 马宇驰 on 2017/8/10.
 */
public class Regular {
    public static void main(String[] args) {
        String date = "AA";
        if( Pattern.compile("[a-zA-Z]").matcher(date).find()){
            System.out.println(true);
        }else {
            System.out.print(false);
        }
    }
}
