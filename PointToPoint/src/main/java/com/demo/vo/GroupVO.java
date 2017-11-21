package com.demo.vo;

import com.demo.entity.Group;
import com.demo.entity.User;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
public class GroupVO extends Group {

    private List<User> userList = new ArrayList<>();

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    @Override
    public String toString() {
        return "GroupVO{" +
                "userList=" + userList +
                '}';
    }
}
