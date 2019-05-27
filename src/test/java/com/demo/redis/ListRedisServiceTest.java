package com.demo.redis;

import com.demo.BaseTest;
import org.junit.Test;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Author: mayuchi
 * @Description:
 * @Date: Created in 19:31 2019/5/23
 */

public class ListRedisServiceTest extends BaseTest {

    @Resource
    ListRedisService listRedisService;

    @Resource(name="redisTemplate")
    ListOperations<String,Object> listOperations;

    @Resource
    RedisTemplate redisTemplate;

    @Resource(name="redisTemplate")
    ValueOperations<String,Long> valueOperations;

    @Test
    public void getList() {
        listRedisService.setList();
        List<Object> list = listRedisService.getList();
        System.out.println(list);
    }

    @Test
    public void test(){
        Object list = redisTemplate.opsForValue().get("list");
        System.out.println(list);
    }
}