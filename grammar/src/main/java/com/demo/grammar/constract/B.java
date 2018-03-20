package com.demo.grammar.constract;

/**
 * Created by 马宇驰 on 2018/3/20.
 */
public class B extends A {
    public B(){
        System.out.println("constractB1");
    }
    public B(String a){
        System.out.println("constractB2");
        this.a = a;
    }
    static {
        System.out.println("staticB");
    }
    {
        System.out.println("dynamicB");
    }

    public static void main(String[] args) {
        new B("b");
    }
}
