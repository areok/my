package com.demo.controller;

import com.alibaba.boot.dubbo.EnableDubboAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by 马宇驰 on 2017/11/2.
 */
@SpringBootApplication
@EnableDubboAutoConfiguration
public class ConsumerStart {
    public static void main(String[] args) {
        SpringApplication.run(ConsumerStart.class,args);
    }
}
