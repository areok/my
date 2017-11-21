package com.demo.test;

import com.demo.entity.Group;
import com.demo.entity.User;
import com.demo.service.inter.GroupAndUserFacade;
import com.demo.service.inter.GroupFacade;
import com.demo.service.inter.UserFacade;
import com.demo.vo.GroupVO;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;
import java.util.Map;

/**
 * Created by 马宇驰 on 2017/11/20.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class AccessTest {

    @Autowired
    private UserFacade userFacade;

    @Autowired
    private GroupAndUserFacade groupAndUserFacade;

    @Autowired
    private GroupFacade groupFacade;

    @org.junit.Test
    public void testAddGroup(){
        User user = new User();
        user.setId(36);
        user = userFacade.login(user);

        GroupVO groupVO = new GroupVO();
        groupVO.setGroupName("我的好友");
        groupVO.getUserList().add(user);
        Integer integer = groupFacade.addGroup(groupVO);
        System.out.println("\n"+"\n"+"\n"+integer);

    }

    @org.junit.Test
    public void testGetGroup(){

        List<GroupVO> groupList = groupFacade.getGroupList(36);

        for (GroupVO groupVO:groupList) {
            System.out.println("\n"+groupVO.toString());
            List<User> userList = groupVO.getUserList();
            for (User user:userList) {
                System.out.println(user.toString());
            }
        }
    }


}
