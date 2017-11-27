package com.demo.grammar.clazz;

import com.demo.grammar.abst.AbsMqEvent;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public class TestEvent<D extends Serializable> extends AbsMqEvent<D> {
    public TestEvent(String id, D data) {
        super(id, data);
    }

    public TestEvent(D data) {
        super(data);
    }
}
