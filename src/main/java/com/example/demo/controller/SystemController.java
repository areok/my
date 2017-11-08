package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.Servlet;
import java.io.UnsupportedEncodingException;

/**
 * Created by 马宇驰 on 2017/11/7.
 */
@Controller
@RequestMapping("base")
public class SystemController {
    @Autowired
    Servlet servlet;

    @Value("${fruit.name}")
    private String fruit;
    @Autowired
    private Environment environment;
    @GetMapping("value")
    @ResponseBody
    public String getValue(){
        return fruit;
    }
    @GetMapping("value2")
    @ResponseBody
    private String getFruit() throws UnsupportedEncodingException {
        byte[] value = environment.getProperty("fruit.name").getBytes("ISO-8859-1");
        String result = new String(value, "GBK");
        return environment.getProperty("fruit.name");
    }

    @GetMapping("servlet")
    @ResponseBody
    private Class getServlet() throws IllegalAccessException, InstantiationException, ClassNotFoundException {
        Class fruitClzz = (Class)servlet.getServletConfig().getServletContext().getAttribute("fruit");

        return fruitClzz;
    }
    @GetMapping("toSystemConfig")
    public String toSystemConfig(){
        return "SystemConfig";
    }
}
