package com.example.controller;

import com.example.entity.Business;
import com.example.inter.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
@RestController
@RequestMapping("business")
public class BusinessController {

    @Autowired
    private BusinessFacade businessFacade;

    @GetMapping("getProducts")
    public List<Business> getListByType(String type){
        return businessFacade.getTodayCommendationList();
    }
}
