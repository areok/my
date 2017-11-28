package com.example.springdata;

import com.example.springdata.entity.Employee;
import com.example.springdata.entity.EmployeeExample;
import com.example.springdata.mapper.EmployeeMapper;
import com.example.springdata.service.EmployeeJpa;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Example;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	private EmployeeJpa employeeJpa;

	@Autowired
	private EmployeeMapper employeeMapper;

	@Test
	public void contextLoads() {
		List<Employee> all = employeeJpa.findAll();
		all.forEach(employee -> {
			System.out.println(employee);
		});
		EmployeeExample employeeExample = new EmployeeExample();
		EmployeeExample.Criteria criteria = employeeExample.createCriteria();
		criteria.andIdEqualTo(1L);
		all = employeeMapper.selectByExample(employeeExample);
		all.forEach(employee -> {
			System.out.println(employee);
		});

	}

}
