package com.demo.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.demo.inter.DubboProvider;
import org.springframework.stereotype.Component;

/**
 * Created by 马宇驰 on 2017/11/2.
 */
@Service(version  = "1.0.0")
@Component
public class ProviderImpl implements DubboProvider {
    public String getRes() {
        return "this is ok";
    }
}
