package com.example;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(exclude = {HibernateJpaAutoConfiguration.class})
@MapperScan("com.example.mapper")
public class VegetablebcApplication {
	public static void main(String[] args) {

		SpringApplication.run(VegetablebcApplication.class, args);
	}
}
