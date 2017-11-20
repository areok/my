package com.demo.service.inter;

import com.demo.entity.Group;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
public interface GroupFacade {
    /**
     * 添加新的组成员
     * @param group
     * @return
     */
    Integer addGroup(Group group);

    /**
     * 根据用户id获取组成员
     * @param userId
     * @return
     */
    List<Group> getGroupList(Integer userId);
}
