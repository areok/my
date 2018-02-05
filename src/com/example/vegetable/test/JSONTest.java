package com.example.vegetable.test;


import com.example.entity.Business;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
public class JSONTest {
    public static void main(String[] args) {
        String str = "[{\"bId\":1,\"bTodaycommend\":\"1\",\"bName\":\"aa\",\"bRemark\":\"bb\",\"bUrl\":\"cc\",\"bType\":\"1\",\"bCreateTime\":null},{\"bId\":2,\"bTodaycommend\":\"1\",\"bName\":\"bb\",\"bRemark\":\"cc\",\"bUrl\":\"dd\",\"bType\":\"1\",\"bCreateTime\":null}]";

//        JSONArray jsonArray = JSONArray.fromObject(str);
//        List<Business> list = (List<Business>) JSONArray.toList(jsonArray,Business.class);
//        for (Business business:list) {
//            System.out.println(business);
//        }

        Gson gson = new Gson();
        List<Business> persons = gson.fromJson(str, new TypeToken<List<Business>>() {
        }.getType());
        for (Business business:persons) {
            System.out.println(business);
        }
    }
}
