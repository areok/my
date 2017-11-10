package com.demo.entity;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/11/10.
 */
public class Demo implements Serializable{
    private String id = "1";
    private String msg = "测试对象";

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
