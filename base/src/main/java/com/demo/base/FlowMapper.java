package com.demo.base;

import tk.mybatis.mapper.common.*;

/**
 * Created by liuqing-notebook on 2017/5/10.
 */
@org.apache.ibatis.annotations.Mapper
public interface FlowMapper<E> extends
        BaseMapper<E>,
        RowBoundsMapper<E>,
        IdsMapper<E>,
        ConditionMapper<E>,
        Marker {

}
