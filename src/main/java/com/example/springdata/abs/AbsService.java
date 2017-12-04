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
    private D dao;
    @Autowired
    private M mapper;

    public E getById(ID id){
        return mapper.selectByPrimaryKey(id);
    }
    public List<E> getAll(){
        return dao.findAll();
    }

    public D getDao() {
        return dao;
    }

    public void setDao(D dao) {
        this.dao = dao;
    }

    public M getMapper() {
        return mapper;
    }

    public void setMapper(M mapper) {
        this.mapper = mapper;
    }
}
