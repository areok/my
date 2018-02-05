package com.example.inter;


import com.example.entity.Business;
import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
public interface BusinessFacade {

    Integer addBusiness(Business business);

    //根据类型获取
    List<Business> getByType(String type);

    //获取今日推荐
    List<Business> getTodayCommendationList();

}
