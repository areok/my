package com.demo.test;

import com.demo.ApplicationRedis;
import com.demo.utils.RedisService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * Created by 马宇驰 on 2017/11/10.
 */
@RunWith(SpringJUnit4ClassRunner.class) // SpringJUnit支持，由此引入Spring-Test框架支持！
@SpringApplicationConfiguration(classes = ApplicationRedis.class) // 指定我们SpringBoot工程的Application启动类
@WebAppConfiguration // 由于是Web项目，Junit需要模拟ServletContext，因此我们需要给我们的测试类加上@WebAppConfiguration。
public class TestRedis {

    @Autowired
    private RedisService redisService;

    /*
        处理递增或者递减事项
            传入一个指定的值：执行一次decr返回值递减一次
                             执行一次incr返回值增加一次
                 绑定一个传入参数
     */
    @Test
    public void testDecrAndIncr(){
        Long decr = redisService.decr("1");
        System.out.println("\n"+"******************************************"+decr);
        Long incr = redisService.incr("1");
        System.out.println("\n"+"******************************************"+incr);
    }

}
