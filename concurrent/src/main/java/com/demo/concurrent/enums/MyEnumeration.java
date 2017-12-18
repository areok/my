package com.demo.concurrent.enums;

import java.util.Enumeration;

/**
 * Created by 马宇驰 on 2017/12/14.
 */
public class MyEnumeration implements Enumeration {

    private Integer count = -1;
    Integer length = 0;
    Object[] datas = null;

    public MyEnumeration(Integer count, Integer length, Object[] datas) {
        this.count = count;
        this.length = length;
        this.datas = datas;
    }

    public MyEnumeration(Object[] datas) {
        this.datas = datas;
        this.length = datas.length;
    }

    private boolean next(){
        if(this.count>=this.length-1){
            return false;
        }
        this.count++;
        return true;
    }

    @Override
    public boolean hasMoreElements() {
        return next();
    }

    @Override
    public Object nextElement() {
        return datas[count];
    }

    public static void main(String[] args) {

        String[] strings = new String[4];
        strings[0] ="zero";
        strings[1]="one";
        strings[2] ="two";
        strings[3]="three";

        Enumeration myEnumeration = new MyEnumeration(strings);
        while (myEnumeration.hasMoreElements()){
            System.out.println(myEnumeration.nextElement());
        }
    }
}
