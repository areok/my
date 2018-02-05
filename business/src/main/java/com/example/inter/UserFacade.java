package com.example.inter;


import com.example.entity.User;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
public interface UserFacade {

    Integer save(User user);

    Integer delete(Integer id);

    Integer update(User user);

    List<User> query(User user);
}
