package com.example.impl;

import com.example.entity.User;
import com.example.entity.UserExample;
import com.example.inter.UserFacade;
import com.example.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
@Service
@Transactional(propagation= Propagation.REQUIRED)
public class UserFacadeImpl implements UserFacade {

    @Autowired
    private UserMapper userMapper;

    @Override
    public Integer save(User user) {
        return userMapper.insert(user);
    }

    @Override
    public Integer delete(Integer id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public Integer update(User user) {
        UserExample userExample = new UserExample();
        UserExample.Criteria criteria = userExample.createCriteria();
        criteria.andUIdEqualTo(user.getuId());
        return userMapper.updateByExampleSelective(user,userExample );
    }

    @Transactional()
    @Override
    public List<User> query(User user) {
        UserExample userExample = new UserExample();
        UserExample.Criteria criteria = userExample.createCriteria();
        criteria.andUNameEqualTo(user.getuName());
        criteria.andUPasswordEqualTo(user.getuPassword());
        return userMapper.selectByExample(userExample);
    }
}
