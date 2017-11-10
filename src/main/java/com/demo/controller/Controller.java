package com.demo.controller;

import com.demo.entity.Demo;
import com.demo.utils.RedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 马宇驰 on 2017/11/10.
 */
@RestController
@RequestMapping("base")
public class Controller {

    @Autowired
    private RedisService redisService;

    @RequestMapping("setString")
    public Boolean setString() {
        return redisService.setString("A", "你好测试redis存放字符串");
    }

    @RequestMapping("getString")
    public String getString() {
        return redisService.getString("A");
    }

    @RequestMapping("setObject")
    public Boolean setObject() {
        Demo demo = new Demo();
        return redisService.setObject("B", demo);
    }

    @RequestMapping("getObject")
    public Demo getObject() {

        return (Demo) redisService.getObject("B");
    }

    @RequestMapping("setTining")
    public Boolean setTiming() {
        return redisService.setTiming("A", 10L);
    }
}
