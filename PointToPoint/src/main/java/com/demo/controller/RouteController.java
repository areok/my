package com.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 马宇驰 on 2017/11/15.
 */
@Controller
@RequestMapping("route")
public class RouteController {

    @GetMapping("toMain")
    public String toMain(){
        return "main";
    }
}
