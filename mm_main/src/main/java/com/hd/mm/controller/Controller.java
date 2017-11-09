package com.hd.mm.controller;

import com.hd.mm.entity.Employee;
import com.hd.mm.mapper.EmployeeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by 马宇驰 on 2017/11/8.
 */
@RestController
@RequestMapping("base")
public class Controller {
    @Autowired
    private EmployeeMapper employeeMapper;
    @GetMapping("add")
    public int addEmployee(){
        Employee employee = new Employee();
        return employeeMapper.insert(employee);
    }
    @GetMapping("query")
    public Employee queryEmployee(){
        Employee employee = new Employee();
        employee.setId(1L);
        return employeeMapper.selectByPrimaryKey(1L);
    }
}
