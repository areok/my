package com.demo.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.demo.inter.DubboProvider;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 马宇驰 on 2017/11/2.
 */
@RestController
@RequestMapping("base")
public class Consumer {
    @Reference(version = "1.0.0")
    private DubboProvider dubboProvider;

    @GetMapping("consumer")
    public String consumer(){
        return dubboProvider.getRes();
    }
}
