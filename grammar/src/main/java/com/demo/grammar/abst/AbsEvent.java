package com.demo.grammar.abst;

import com.demo.grammar.inter.Event;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public abstract class AbsEvent<D> implements Event<D> {
    private String id;
    private D data;

    public AbsEvent(String id, D data) {
        this.id = id;
        this.data = data;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public D getData() {
        return data;
    }

    public void setData(D data) {
        this.data = data;
    }
}
