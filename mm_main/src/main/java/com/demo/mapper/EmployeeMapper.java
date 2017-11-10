package com.demo.mapper;

import com.demo.entity.Employee;
import com.demo.entity.EmployeeExample;
import java.util.List;

import com.demo.utils.FlowMapper;
import org.apache.ibatis.annotations.Param;

public interface EmployeeMapper extends FlowMapper<Employee> {
    long countByExample(EmployeeExample example);

    int deleteByExample(EmployeeExample example);

    List<Employee> selectByExample(EmployeeExample example);

    int updateByExampleSelective(@Param("record") Employee record, @Param("example") EmployeeExample example);

    int updateByExample(@Param("record") Employee record, @Param("example") EmployeeExample example);
}