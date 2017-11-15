package com.demo.controller;

import com.demo.entity.User;
import com.demo.service.inter.UserFacade;
import com.demo.utils.SessionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * Created by 马宇驰 on 2017/11/14.
 */
@RestController
@RequestMapping("chat")
public class LoginController {

    @Autowired
    private UserFacade userFacade;

    @PostMapping("login")
    public String login(@RequestBody User user){
        Map<String, String> login = userFacade.login(user);
        String result = login.get("result");
       if(result.equals("ok")){
           SessionUtil.setCurrentUser(user);
       }
        return result;
    }


    @PostMapping("register")
    public String register(@RequestBody User user){
        Map<String, String> login = userFacade.register(user);
        SessionUtil.setCurrentUser(user);
        return "ok";
    }
}
