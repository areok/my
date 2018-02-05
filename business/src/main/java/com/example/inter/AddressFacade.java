package com.example.inter;

import com.example.entity.Address;

import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/4.
 */
public interface AddressFacade {
    Integer save(Address address);

    Integer delete(Integer id);

    Integer update(Address address);

    List<Address> query(Address address);

    Address queryDefault(Integer userId);
}
