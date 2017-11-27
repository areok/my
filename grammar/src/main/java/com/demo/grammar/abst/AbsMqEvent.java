package com.demo.grammar.abst;

import java.io.Serializable;
import java.util.UUID;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public abstract class AbsMqEvent<D extends Serializable> extends AbsEvent<D>{
    public AbsMqEvent(String id, D data) {
        super(id, data);
    }
    public AbsMqEvent(D data){
        super(UUID.randomUUID().toString().replace("-",""), data);
    }
}
