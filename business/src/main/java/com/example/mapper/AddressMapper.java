package com.example.mapper;

import com.demo.base.FlowMapper;
import com.example.entity.Address;
import com.example.entity.AddressExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface AddressMapper extends FlowMapper<Address> {
    long countByExample(AddressExample example);

    int deleteByExample(AddressExample example);

    List<Address> selectByExample(AddressExample example);

    int updateByExampleSelective(@Param("record") Address record, @Param("example") AddressExample example);

    int updateByExample(@Param("record") Address record, @Param("example") AddressExample example);
}