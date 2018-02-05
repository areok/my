package com.example.controller;

import com.example.entity.Address;
import com.example.entity.Order;
import com.example.inter.AddressFacade;
import com.example.inter.OrderFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
@RestController
@RequestMapping("order")
public class OrderController {

    @Autowired
    private OrderFacade orderFacade;

    @Autowired
    private AddressFacade addressFacade;

    @PostMapping("addOrder")
    public String add(@RequestBody Order order){

        Address address = addressFacade.queryDefault(order.getUserId());
        order.setAddressId(address.getId());
        order.setOrderState("1");
        order.setOrderCreateTime(new Date());
        Integer count = orderFacade.save(order);
        if(count == 0){
            return "false";
        }
        return "true";
    }

    @GetMapping("getOrders")
    public List<Order> getListById(Integer userId){
        Order order = new Order();
        order.setUserId(userId);
        return orderFacade.query(order);
    }
}
