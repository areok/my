package com.demo.inter;
import org.springframework.stereotype.Component;
/**
 * Created by 马宇驰 on 2017/11/30.
 */


public interface Event {
    default void execute(){
        System.out.println("default");
    }
}
