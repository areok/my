package com.demo.service.impl;

import com.demo.entity.User;
import com.demo.mapper.UserMapper;
import com.demo.service.inter.UserFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by 马宇驰 on 2017/11/14.
 */
@Service
public class UserFacadeImpl implements UserFacade {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User login(User user) {
        HashMap<String, String> map = new HashMap<>();
        user = userMapper.selectOne(user);
        return user;
    }

    @Override
    public Map<String, String> register(User user) {
        userMapper.insert(user);
        return null;
    }

    @Override
    public User queryUser(Integer userId) {
        return userMapper.selectByPrimaryKey(userId);
    }
}
