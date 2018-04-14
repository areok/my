package com.example.controller;

import com.example.entity.Address;
import com.example.inter.AddressFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
@RestController
@RequestMapping("address")
public class AddressController {

    @Autowired
    private AddressFacade addressFacade;

    @PostMapping("addAddress")
    public String add(@RequestBody Address address){
        address.setStatus(" 00");
        Integer count = addressFacade.save(address);
        if(count == 0){
            return "false";
        }
        return "true";
    }

    @GetMapping("getAddress")
    public List<Address> getListById(Integer userId){
        Address address = new Address();
        address.setUserId(userId);
        return addressFacade.query(address);
    }
}
