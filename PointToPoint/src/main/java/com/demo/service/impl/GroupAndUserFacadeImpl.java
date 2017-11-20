package com.demo.service.impl;

import com.demo.entity.GroupAndUser;
import com.demo.mapper.GroupAndUserMapper;
import com.demo.service.inter.GroupAndUserFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
@Service
public class GroupAndUserFacadeImpl implements GroupAndUserFacade {

    @Autowired
    private GroupAndUserMapper groupAndUserMapper;

    @Override
    public Integer addUser(GroupAndUser groupAndUser) {
        return groupAndUserMapper.insert(groupAndUser);
    }

    @Override
    public Integer deleteUser(GroupAndUser groupAndUser) {
        return groupAndUserMapper.delete(groupAndUser);
    }
}
