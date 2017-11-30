package com.demo.abs;

import com.demo.inter.Event;

/**
 * Created by 马宇驰 on 2017/11/30.
 */
public abstract class EventAbstract implements Event {
    public void push(){
        System.out.println("this is abstract!");
    };
}
