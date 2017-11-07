package com.example.demo.controller;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/6/29.
 */
public class Message implements Serializable{
    private String info;

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info= info;
    }
}
