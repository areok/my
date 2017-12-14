package com.example.demo;

import com.example.demo.controller.Message;
import com.sun.xml.internal.ws.resources.ModelerMessages;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.servlet.Servlet;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;

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
    @Test
    public void test2(){
        String s = "%e9%a9%ac%e5%ae%87%e9%a9%b0";
        try {
            String decode = URLDecoder.decode(s, "utf-8");
            System.out.println(decode);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

}
