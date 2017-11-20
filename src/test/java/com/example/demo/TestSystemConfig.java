package com.example.demo;

import com.example.demo.controller.Message;
import com.sun.xml.internal.ws.resources.ModelerMessages;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.servlet.Servlet;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class TestSystemConfig {
    @Autowired
    Servlet servlet;

    @Test
    public void test1(){
        Message message1 = new Message();
        //Object message = servlet.getServletConfig().getServletContext().getAttribute("message");
        System.out.println(message1);
    }

}
