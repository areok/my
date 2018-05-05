package com.example.controller;

import com.example.entity.Business;
import com.example.inter.BusinessFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
@Controller
@RequestMapping("business")
public class BusinessController {

    @Autowired
    private BusinessFacade businessFacade;

    @ResponseBody
    @GetMapping("getProducts")
    public List<Business> getListByType(String type){
        return businessFacade.getTodayCommendationList();
    }

    @GetMapping("getAllProducts")
    public ModelAndView getList(){
        ModelAndView modelAndView = new ModelAndView("/product/product");
        modelAndView.addObject("products",businessFacade.getAll());
        return modelAndView;
    }

    @GetMapping("saveProduct")
    public ModelAndView saveProduct(Business business){
        businessFacade.addBusiness(business);
        ModelAndView modelAndView = new ModelAndView("/product/product");
        modelAndView.addObject("products",businessFacade.getAll());
        return modelAndView;
    }
}
