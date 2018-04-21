package com.example.kafka.dao;

import com.example.kafka.base.dao.BaseDao;
import com.example.kafka.entity.User;

/**
 * Created by 马宇驰 on 2018/4/5.
 */
public interface UserDao extends BaseDao<User>{

    User getById(Integer id);

}
