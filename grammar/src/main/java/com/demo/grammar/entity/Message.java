package com.demo.grammar.entity;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public class Message implements Serializable {
    private String name;
    private String data;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }


}
