package com.demo.service.inter;

import com.demo.entity.User;

import java.util.Map;

/**
 * Created by 马宇驰 on 2017/11/14.
 */
public interface UserFacade {
    Map<String,String> login(User user);

    Map<String,String> register(User user);

}
