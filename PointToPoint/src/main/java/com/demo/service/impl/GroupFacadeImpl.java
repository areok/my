package com.demo.service.impl;

import com.demo.entity.Group;
import com.demo.entity.GroupAndUser;
import com.demo.mapper.GroupAndUserMapper;
import com.demo.mapper.GroupMapper;
import com.demo.service.inter.GroupFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
@Service
public class GroupFacadeImpl implements GroupFacade {

    @Autowired
    private GroupMapper groupMapper;

    @Autowired
    private GroupAndUserMapper groupAndUserMapper;

    @Override
    public Integer addGroup(Group group) {
        Integer num = 0;
        num =  groupMapper.insert(group);
        GroupAndUser groupAndUser = new GroupAndUser();
        groupAndUser.setGroupId(group.getId().toString());
        groupAndUser.setUserId(group.getUserList().get(0).getId().toString());
        num += groupAndUserMapper.insert(groupAndUser);
        return num;
    }

    @Override
    public List<Group> getGroupList(Integer userId) {
        return groupMapper.getGroupList(userId);
    }
}
