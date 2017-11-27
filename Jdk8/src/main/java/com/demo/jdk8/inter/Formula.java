package com.demo.jdk8.inter;

/**
 * Created by 马宇驰 on 2017/11/27.
 */
public interface Formula {
    double calculate(int a);
    default double sqrt(int a){
        return Math.sqrt(a);
    }
}
