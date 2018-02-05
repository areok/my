package com.example.mapper;

import com.demo.base.FlowMapper;
import com.example.entity.Order;
import com.example.entity.OrderExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface OrderMapper extends FlowMapper<Order> {
    long countByExample(OrderExample example);

    int deleteByExample(OrderExample example);

    List<Order> selectByExample(OrderExample example);

    int updateByExampleSelective(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByExample(@Param("record") Order record, @Param("example") OrderExample example);
}