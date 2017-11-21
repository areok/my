package com.demo.controller;

import com.demo.entity.User;
import com.demo.service.inter.GroupFacade;
import com.demo.service.inter.UserFacade;
import com.demo.utils.SessionUtil;
import com.demo.vo.GroupVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by 马宇驰 on 2017/11/14.
 */
@RestController
@RequestMapping("chat")
public class LoginController {

    @Autowired
    private UserFacade userFacade;

    @Autowired
    private GroupFacade groupFacade;

    @PostMapping("login")
    public String login(@RequestBody User user){
        user = userFacade.login(user);
        if(user!=null){
           SessionUtil.setCurrentUser(user);
            return "ok";
        }
        return "no";
    }


    @PostMapping("register")
    public String register(@RequestBody User user){
        Map<String, String> login = userFacade.register(user);
        SessionUtil.setCurrentUser(user);
        return "ok";
    }

    @PostMapping("queryGroup")
    public List<GroupVO> queryGroup(){
        Integer id = SessionUtil.getCurrentUser().getId();
        List<GroupVO> groupList = groupFacade.getGroupList(id);
        return groupList;
    }
}
