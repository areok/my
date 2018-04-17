package com.demo.grammar.valuetion;

/**
 * Created by 马宇驰 on 2018/3/29.
 */
public class TestString {
    public static void main(String[] args) {
        //String s = "AES";
        String s = new String("AES");
        new TestString().changeString(s);
        System.out.println(s);

        Integer i = 1;
        new TestString().changeInteger(i);
        System.out.println(i);
    }
    public void changeString(String s){
        s = s.replace("A","E");
        s = s.toLowerCase();
    }
    public void changeInteger(Integer i){
        i = i++;
    }
}
