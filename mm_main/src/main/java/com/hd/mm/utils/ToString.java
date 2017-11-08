package com.hd.mm.utils;

import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by yangzhenwei on 2017/5/26.
 */
public abstract class ToString {

    @Override
    public String toString(){
        return ToStringBuilder.reflectionToString(this);
    }
}
