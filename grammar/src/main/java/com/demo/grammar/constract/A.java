package com.demo.grammar.constract;

/**
 * Created by 马宇驰 on 2018/3/20.
 */
public class A {
    String a;
    public A(){
        this("1");
        System.out.println("constractA1");
    }
    public A(String a){
        System.out.println("constractA2");
        this.a = a;
    }
    static {
        System.out.println("staticA");
    }
    {
        System.out.println("dynamicA");
    }

}
