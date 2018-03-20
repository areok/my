package com.demo.grammar.annotaion;

import java.lang.annotation.*;

/**
 * Created by 马宇驰 on 2018/3/12.
 */

@Documented
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface DemoAnnotation {

    String name() default "test";

}
