package com.example.impl;

import com.example.entity.Address;
import com.example.entity.AddressExample;
import com.example.inter.AddressFacade;
import com.example.mapper.AddressMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
@Service
@Transactional(propagation= Propagation.REQUIRED)
public class AddressImpl implements AddressFacade {

    @Autowired
    private AddressMapper addressMapper;

    @Override
    public Integer save(Address address) {

        return addressMapper.insertSelective(address);
    }

    @Override
    public Integer delete(Integer id) {

        return addressMapper.deleteByPrimaryKey(id);
    }

    @Override
    public Integer update(Address address) {

        return addressMapper.updateByPrimaryKeySelective(address);
    }

    @Transactional
    @Override
    public List<Address> query(Address address) {

        return addressMapper.select(address);
    }

    @Transactional
    @Override
    public Address queryDefault(Integer userId) {
        AddressExample addressExample = new AddressExample();
        AddressExample.Criteria criteria = addressExample.createCriteria();
        criteria.andUserIdEqualTo(userId);
        criteria.andStatusEqualTo("01");
        Address address = addressMapper.selectByExample(addressExample).get(0);
        return address;
    }
}
