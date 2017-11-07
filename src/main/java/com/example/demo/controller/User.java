package com.example.demo.controller;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/6/29.
 */
public class User implements Serializable {
    private String id;
    private String name;
    private String status;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User(String id, String name, String status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    public User() {
    }
}
