package com.example.springdata.service;

import com.example.springdata.utils.FlowMapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/11/27.
 */

public interface BaseService<E extends Serializable,ID extends Serializable,M extends FlowMapper<E>,D extends JpaRepository<E,ID> > {}
