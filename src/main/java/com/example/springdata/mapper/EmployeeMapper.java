package com.example.springdata.mapper;

import com.example.springdata.entity.Employee;
import com.example.springdata.entity.EmployeeExample;
import com.example.springdata.utils.FlowMapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EmployeeMapper extends FlowMapper<Employee> {
    long countByExample(EmployeeExample example);

    int deleteByExample(EmployeeExample example);

    List<Employee> selectByExample(EmployeeExample example);

    int updateByExampleSelective(@Param("record") Employee record, @Param("example") EmployeeExample example);

    int updateByExample(@Param("record") Employee record, @Param("example") EmployeeExample example);
}