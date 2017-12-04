package com.example.springdata.jpa;

import com.example.springdata.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by 马宇驰 on 2017/12/4.
 */
public interface EmployeeJpa extends JpaRepository<Employee,Long> {}
