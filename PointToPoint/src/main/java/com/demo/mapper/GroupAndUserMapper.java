package com.demo.mapper;

import com.demo.base.FlowMapper;
import com.demo.entity.GroupAndUser;
import com.demo.entity.GroupAndUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface GroupAndUserMapper extends FlowMapper<GroupAndUser> {
    long countByExample(GroupAndUserExample example);

    int deleteByExample(GroupAndUserExample example);

    List<GroupAndUser> selectByExample(GroupAndUserExample example);

    int updateByExampleSelective(@Param("record") GroupAndUser record, @Param("example") GroupAndUserExample example);

    int updateByExample(@Param("record") GroupAndUser record, @Param("example") GroupAndUserExample example);
}