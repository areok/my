package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by lenovo on 2018/4/26.
 */
@Controller

public class TabController {
    @GetMapping("tab")
    public String getTab(){
        return "/tab";
    }
    @GetMapping("aa")
    public String getAa(){
        return "/aa";
    }
    @GetMapping("bb")
    public String getBb(){
        return "/bb";
    }
}
