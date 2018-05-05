package com.example.impl;

import com.example.entity.Order;
import com.example.entity.OrderInfo;
import com.example.inter.OrderFacade;
import com.example.mapper.BusinessMapper;
import com.example.mapper.OrderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
@Service
@Transactional(propagation = Propagation.REQUIRED)
public class OrderImpl implements OrderFacade {

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private BusinessMapper businessMapper;

    @Override
    public Integer save(Order order) {

        return orderMapper.insertSelective(order);
    }

    @Override
    public Integer delete(Integer id) {

        return orderMapper.deleteByPrimaryKey(id);
    }

    @Override
    public Integer update(Order order) {
        return orderMapper.updateByPrimaryKeySelective(order);
    }

    @Transactional
    @Override
    public List<Order> query(Order order) {
        return orderMapper.select(order);
    }

    @Override
    public List<OrderInfo> queryAll() {
        return businessMapper.queryAllOrders();
    }
}
