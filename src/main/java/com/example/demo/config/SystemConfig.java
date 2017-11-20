package com.example.demo.config;

import com.example.demo.controller.Message;
import com.example.demo.enums.Fruit;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.ServletContext;

/**
 * Created by 马宇驰 on 2017/11/7.
 */
@Configuration
public class SystemConfig extends WebMvcConfigurerAdapter implements ServletContextAware , ApplicationContextAware{
    @Override
    public void setServletContext(ServletContext servletContext) {

        //servletContext.setAttribute("fruit", Fruit.class);
    }
    @Bean
    public Message getMessage(){
        Message message = new Message();
        message.setInfo("test");
        return message;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        applicationContext.getBean(ServletContext.class).setAttribute("fruit", Fruit.class);
    }
}
