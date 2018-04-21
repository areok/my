package com.example.kafka.controller;

import com.example.kafka.dao.UserDaoImpl;
import com.example.kafka.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 马宇驰 on 2018/4/5.
 */
@RestController
@RequestMapping("db")
public class DBController {

    @Autowired
    private UserDaoImpl userDao;

    @RequestMapping("queryList")
    public User getUsers(){
        User user =  userDao.getById(1);
        return user;
    }
    @RequestMapping("submit")
    public void submit(User user){
        System.out.println(user);
    }
}
