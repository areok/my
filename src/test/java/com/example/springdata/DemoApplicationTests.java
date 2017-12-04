package com.example.springdata;

import com.example.springdata.entity.Employee;
import com.example.springdata.mapper.EmployeeMapper;
import com.example.springdata.service.EmployeeService;
import com.github.pagehelper.ISelect;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
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
	private EmployeeService employeeService;

	@Autowired
	private EmployeeMapper employeeMapper;

	@Test
	public void contextLoads() {
		Long begin = null;
		Long end = null;
		begin = System.currentTimeMillis();
		List<Employee> all = employeeService.getAll();
		end = System.currentTimeMillis();
		System.out.println(end - begin);
		all.forEach(employee -> {
			System.out.println(employee);
		});

		Employee byId = employeeService.getById(1L);

		System.out.println(byId);

	}
	@Test
	public void test2(){
		PageInfo<Employee> objectPageInfo = PageHelper.startPage(1, 1).doSelectPageInfo(new ISelect() {
			@Override
			public void doSelect() {
				employeeMapper.selectAll();
			}
		});
		objectPageInfo.getList().forEach(object->{
			System.out.println(object);
		});
	}

}
