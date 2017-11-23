package com.demo.test;

import com.demo.utils.RedisService;
import com.demo.inter.Task;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.IOException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * Created by 马宇驰 on 2017/11/10.
 */
@RunWith(SpringJUnit4ClassRunner.class) // SpringJUnit支持，由此引入Spring-Test框架支持！
@SpringBootTest
public class TestRedisMQ {

    @Autowired
    private RedisService redisService;

    private  final ScheduledExecutorService scheduledExecutorService= Executors.newScheduledThreadPool(1);

    private static Integer NUM = 1;

    @Test
    public void testDecrAndIncr() throws IOException {
        scheduledExecutorService.scheduleWithFixedDelay(new Task() {
            @Override
            public void run() {
                redisService.convertAndSend("test",NUM.toString());
                NUM++;
            }

            @Override
            public void execute() {

            }
        },10L, 10L,TimeUnit.SECONDS);
        System.in.read();
    }
}
