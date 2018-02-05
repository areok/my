package com.example.mapper;

import com.demo.base.FlowMapper;
import com.example.entity.Business;
import com.example.entity.BusinessExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BusinessMapper extends FlowMapper<Business> {
    long countByExample(BusinessExample example);

    int deleteByExample(BusinessExample example);

    List<Business> selectByExample(BusinessExample example);

    int updateByExampleSelective(@Param("record") Business record, @Param("example") BusinessExample example);

    int updateByExample(@Param("record") Business record, @Param("example") BusinessExample example);
}