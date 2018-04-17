package com.demo.grammar.jvm;

import java.util.ArrayList;

/**
 * Created by 马宇驰 on 2018/3/29.
 */
public class MenoryDemo_3 {
    public static void main(String[] args) {
        while (true){
            ArrayList<byte[]> byteList = new ArrayList<byte[]>();
            byte[] bytes = new byte[1024*1024];
            byteList.add(bytes);
            System.out.println(byteList);
        }
    }
}
