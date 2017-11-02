package com.demo.impl;

/**
 * Created by 马宇驰 on 2017/11/2.
 */

import com.alibaba.boot.dubbo.EnableDubboAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableDubboAutoConfiguration
@ComponentScan("com.demo.impl")
public class ProviderStartApplication {
    public static void main(String[] args) {

        SpringApplication.run(ProviderStartApplication.class,args);
        try {
            Thread.sleep(Long.MAX_VALUE);
        } catch (Exception e) {
        }
    }
}
