package com.demo.grammar.annotaion;

import java.lang.annotation.Annotation;
import java.util.ArrayList;

/**
 * Created by 马宇驰 on 2018/3/12.
 */
@DemoAnnotation()
public class DemoTest {
    public static void main(String[] args) {
        Annotation[] annotations = DemoTest.class.getAnnotations();
        System.out.println(annotations[0].annotationType().equals(DemoAnnotation.class));
        System.out.println(((DemoAnnotation)annotations[0]).name());
        String[] strs = new String[2];
        ArrayList<Long> longs = new ArrayList<Long>();
        longs.size();
        int length = strs.length;
        System.out.println(length);
    }
}
