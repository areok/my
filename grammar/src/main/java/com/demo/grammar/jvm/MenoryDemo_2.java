package com.demo.grammar.jvm;

import java.util.ArrayList;

/**
 * Created by 马宇驰 on 2018/3/29.
 */
public class MenoryDemo_2 {
    public static void main(String[] args) {
        ArrayList<byte[]> byteList = new ArrayList<byte[]>();
        while (true){
            byte[] bytes = new byte[1024*1024];
            byteList.add(bytes);
        }
    }
}
