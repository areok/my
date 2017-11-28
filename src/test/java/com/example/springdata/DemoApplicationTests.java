package com.example.springdata;

import com.example.springdata.entity.Employee;
import com.example.springdata.entity.EmployeeExample;
import com.example.springdata.mapper.EmployeeMapper;
import com.example.springdata.service.EmployeeJpa;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	private EmployeeJpa employeeJpa;

	@Autowired
	private EmployeeMapper employeeMapper;

	@Test
	public void contextLoads() {
		Long begin = null;
		Long end = null;
		begin = System.currentTimeMillis();
		List<Employee> all = employeeJpa.findAll();
		end = System.currentTimeMillis();
		System.out.println(end - begin);
		all.forEach(employee -> {
			System.out.println(employee);
		});
		EmployeeExample employeeExample = new EmployeeExample();
		EmployeeExample.Criteria criteria = employeeExample.createCriteria();
		criteria.andIdEqualTo(1L);
		begin = System.currentTimeMillis();
		all = employeeMapper.selectAll();
		end = System.currentTimeMillis();
		System.out.println(end - begin);
		all.forEach(employee -> {
			System.out.println(employee);
		});

	}
	@Test
	public void test2(){
		Long begin = null;
		Long end = null;
		List<Employee> all = null;
		EmployeeExample employeeExample = new EmployeeExample();
		EmployeeExample.Criteria criteria = employeeExample.createCriteria();
		criteria.andIdEqualTo(1L);
		begin = System.currentTimeMillis();
		all = employeeMapper.selectAll();
		end = System.currentTimeMillis();
		System.out.println(end - begin);
		all.forEach(employee -> {
			System.out.println(employee);
		});
	}

}
