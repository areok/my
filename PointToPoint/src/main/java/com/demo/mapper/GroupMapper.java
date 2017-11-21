package com.demo.mapper;

import com.demo.base.FlowMapper;
import com.demo.entity.Group;
import com.demo.entity.GroupExample;
import com.demo.vo.GroupVO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface GroupMapper extends FlowMapper<Group> {
    long countByExample(GroupExample example);

    int deleteByExample(GroupExample example);

    List<Group> selectByExample(GroupExample example);

    int updateByExampleSelective(@Param("record") Group record, @Param("example") GroupExample example);

    int updateByExample(@Param("record") Group record, @Param("example") GroupExample example);

    List<GroupVO> queryGroupList(Integer userId);
}