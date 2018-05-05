package com.example.inter;

import com.example.entity.Order;
import com.example.entity.OrderInfo;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public interface OrderFacade {
    Integer save(Order order);

    Integer delete(Integer id);

    Integer update(Order order);

    List<Order> query(Order order);

    List<OrderInfo> queryAll();
}
