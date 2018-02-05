package com.example.controller;

import com.example.entity.User;
import com.example.inter.UserFacade;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/3.
 */
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserFacade userFacade;

    @GetMapping("login")
    public String login(String userName,String passWord){
        User user = new User();
        user.setuName(userName);
        user.setuPassword(passWord);
        List<User> users = userFacade.query(user);
        if(users.size()==0){
            return "false";
        }else {
            Gson gson = new Gson();
            String jsonResult = gson.toJson(users.get(0));
            return jsonResult;
        }
    }

    @GetMapping("regist")
    public String regist(String userName,String passWord){
        User user = new User();
        user.setuName(userName);
        user.setuPassword(passWord);
        Integer count = userFacade.save(user);
        if(count==0){
            return "false";
        }else {
            return "true";
        }
    }
}
