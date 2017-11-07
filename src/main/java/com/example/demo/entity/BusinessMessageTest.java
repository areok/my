package com.example.demo.entity;

/**
 * Created by 马宇驰 on 2017/8/14.
 */
public class BusinessMessageTest {
    public static void main(String[] args) {
        BusinessMessageExample businessMessageExample = new BusinessMessageExample();
        BusinessMessageExample.Criteria criteria = businessMessageExample.createCriteria();
        criteria.andBussNoEqualTo("sss");
        String condition = criteria.criteria.get(0).getCondition();
        Object value = criteria.criteria.get(0).getValue();
        System.out.print(condition + value);
    }
}
