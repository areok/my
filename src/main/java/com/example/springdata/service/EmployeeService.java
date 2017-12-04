package com.example.springdata.service;

import com.example.springdata.abs.AbsService;
import com.example.springdata.entity.Employee;
import com.example.springdata.jpa.EmployeeJpa;
import com.example.springdata.mapper.EmployeeMapper;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

/**
 * Created by 马宇驰 on 2017/12/4.
 */
@Service
public class EmployeeService extends AbsService<Employee,Long,EmployeeMapper,EmployeeJpa> {
    @PostConstruct
    public void execute(){
        System.out.println(this.mapper.getClass());
    }
}
