package com.demo.grammar.inter;

import java.io.Serializable;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public interface Event<D> extends Serializable{
    String getId();
    D getData();
}
