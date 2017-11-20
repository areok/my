package com.demo.service.inter;

import com.demo.entity.GroupAndUser;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
public interface GroupAndUserFacade {

    Integer addUser(GroupAndUser groupAndUser);

    Integer deleteUser(GroupAndUser groupAndUser);

}
