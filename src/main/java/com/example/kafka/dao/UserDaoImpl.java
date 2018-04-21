package com.example.kafka.dao;

import com.example.kafka.base.dao.BaseDaoImpl;
import com.example.kafka.entity.User;
import org.springframework.stereotype.Repository;

/**
 * Created by 马宇驰 on 2018/4/5.
 */
@Repository
public class UserDaoImpl extends BaseDaoImpl<User> implements UserDao{

    // 获得当前方法名
    private String getCurrentMethod(){
        String name = this.getClass().getName();
        StringBuilder sb = new StringBuilder();
        sb.append(name).append(".").append(Thread.currentThread().getStackTrace()[2].getMethodName());
        return sb.toString();
    }
    @Override
    public User getById(Integer id) {
        return new User();
        //return getSqlSessionTemplate().selectOne(getCurrentMethod(),id);

    }
}
