package com.demo.redis;

import org.springframework.data.redis.core.ListOperations;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * @Author: mayuchi
 * @Description:
 * @Date: Created in 19:27 2019/5/23
 */
@Service
public class ListRedisService {

    @Resource(name="redisTemplate")
    ListOperations<String,Object> listOperations;

    public List<Object> getList(){
        List<Object> list = listOperations.range("list", 0, 6);
        return  list;
    }

    public void setList(){
        String[] strings = {"c#","c++", "python", "java", "c#", "c#"};
        listOperations.leftPushAll("list",strings);
    }
}
