package com.example.springdata.service;

import com.example.springdata.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by 马宇驰 on 2017/11/27.
 */

public interface EmployeeJpa extends JpaRepository<Employee,Long> {
}
