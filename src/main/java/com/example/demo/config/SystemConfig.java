package com.example.demo.config;

import com.example.demo.enums.Fruit;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.ServletContext;

/**
 * Created by 马宇驰 on 2017/11/7.
 */
@Configuration
public class SystemConfig extends WebMvcConfigurerAdapter implements ServletContextAware {
    @Override
    public void setServletContext(ServletContext servletContext) {
        servletContext.setAttribute("fruit", Fruit.class);
    }
}
