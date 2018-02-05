package com.example.impl;

import com.example.inter.BusinessFacade;
import com.example.mapper.BusinessMapper;
import com.example.entity.Business;
import com.example.entity.BusinessExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/26.
 */
@Service
@Transactional()
public class BusinessFacadeImpl implements BusinessFacade {

    @Autowired
    private BusinessMapper businessMapper;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public Integer addBusiness(Business business) {
        return businessMapper.insert(business);
    }

    @Override
    public List<Business> getByType(String type) {
        BusinessExample businessExample = new BusinessExample();
        BusinessExample.Criteria criteria = businessExample.createCriteria();
        criteria.andBTypeEqualTo(type);
        return businessMapper.selectByExample(businessExample);
    }

    @Override
    public List<Business> getTodayCommendationList() {
        BusinessExample businessExample = new BusinessExample();
        BusinessExample.Criteria criteria = businessExample.createCriteria();
        criteria.andBTodaycommendEqualTo("1");
        return businessMapper.selectByExample(businessExample);
    }
}
