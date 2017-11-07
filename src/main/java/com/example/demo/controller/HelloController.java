package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by 马宇驰 on 2017/6/28.
 */
@Controller
public class HelloController {
    @RequestMapping("/test")
    @ResponseBody
    public String testTemp(){

        return "1";
    }
    @RequestMapping("hello")
    public String hello(Model model){
        User user01 = new User("1","马宇驰","4");
        User user02 = new User("2","小李","3");
        List<User> users = new ArrayList<User>(){{
            add(user01);
            add(user02);
        }};
        model.addAttribute("users",users);
        model.addAttribute("name","马宇驰");
        model.addAttribute("total",2);
        model.addAttribute("count",1);
        model.addAttribute("execMode","dev");
        return "hello";
    }
    @RequestMapping("loop")
    public String loop(Model model){
        List<String> list = new ArrayList<String>(){{
            add("1");
            add("2");
            add("3");
            add("4");
        }};
        Map<String,String> map = new HashMap<String,String>(){{
            put("1","苹果");
            put("2","梨");
            put("3","橘子");
            put("4","桃");
        }};
        model.addAttribute("list",list);
        model.addAttribute("map",map);
        return "loop";
    }
    @RequestMapping("go")
    public String go(){
        return "form";
    }
    @RequestMapping(value = "/add", method= RequestMethod.POST)
    public String save(@ModelAttribute(value="message") Message message) {
        System.out.println(message.getInfo().toString());
        return "null";
    }
    @RequestMapping("fragment")
    public String test(){
        return "fragment::fragment";
    }
    @RequestMapping("fragmentCopy")
    public String test02(){
        return "fragmentCopy";
    }
}
