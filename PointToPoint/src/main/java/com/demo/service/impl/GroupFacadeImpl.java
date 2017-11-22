package com.demo.service.impl;

import com.demo.entity.GroupAndUser;
import com.demo.mapper.GroupAndUserMapper;
import com.demo.mapper.GroupMapper;
import com.demo.service.inter.GroupFacade;
import com.demo.vo.GroupVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
@Service
@Transactional(propagation = Propagation.REQUIRED)
public class GroupFacadeImpl implements GroupFacade {

    @Autowired
    private GroupMapper groupMapper;

    @Autowired
    private GroupAndUserMapper groupAndUserMapper;

    @Override
    public Integer addGroup(GroupVO groupVO) {
        Integer num = 0;
        num =  groupMapper.insertSelective(groupVO);
        GroupAndUser groupAndUser = new GroupAndUser();
        groupAndUser.setGroupId(groupVO.getId().toString());
        groupAndUser.setUserId(groupVO.getUserList().get(0).getId().toString());
        num += groupAndUserMapper.insert(groupAndUser);
        return num;
    }

    @Override
    public List<GroupVO> getGroupList(Integer userId) {
        return groupMapper.queryGroupList(userId);
    }
}
