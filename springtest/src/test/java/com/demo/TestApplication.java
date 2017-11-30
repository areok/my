package com.demo;

import com.demo.abs.EventAbstract;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by 马宇驰 on 2017/11/30.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class)
public class TestApplication {

    @Autowired
    EventAbstract event;

    @Test
    public void test1(){
        event.execute();
        event.push();
    }
}
