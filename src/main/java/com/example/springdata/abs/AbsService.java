package com.example.springdata.abs;

import com.example.springdata.service.BaseService;
import com.example.springdata.utils.FlowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;
import java.util.List;

/**
 * Created by 马宇驰 on 2017/12/4.
 */
public abstract class AbsService<E extends Serializable,ID extends Serializable,M extends FlowMapper<E>,D extends JpaRepository<E,ID>>{
    @Autowired
    protected D dao;
    @Autowired
    protected M mapper;

    public E getById(ID id){
        return mapper.selectByPrimaryKey(id);
    }
    public List<E> getAll(){
        return dao.findAll();
    }

}
