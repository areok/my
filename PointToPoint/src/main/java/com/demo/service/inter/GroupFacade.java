package com.demo.service.inter;

import com.demo.entity.Group;
import com.demo.vo.GroupVO;

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
    Integer addGroup(GroupVO group);

    /**
     * 根据用户id获取组成员
     * @param userId
     * @return
     */
    List<GroupVO> getGroupList(Integer userId);
}
