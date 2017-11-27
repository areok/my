package com.demo.jdk8.inter;

import org.junit.Test;

/**
 * Created by 马宇驰 on 2017/11/27.
 */
public class FormulaTest {
    @Test
    public void test1(){
        Formula formula = new Formula(){
            @Override
            public double calculate(int a) {
                return sqrt(a*100);
            }
        };
        double calculate = formula.calculate(100);
        double sqrt = formula.sqrt(16);
        System.out.println(calculate+"/"+sqrt);
    }
}
