package com.example.kafka.base.dao;

import java.util.List;
import java.util.Map;


/**
 * 数据访问层基础支撑接口.
 */
public interface BaseDao<T> {

    /**
     * 函数功能说明 ：单条插入数据. 修改者名字：Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param entity
     * @参数：@return
     * @return：int
     * @throws
     */
    int insert(T entity);

    /**
     * 函数功能说明 ： 批量插入数据. 修改者名字：Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param list
     * @参数：@return
     * @return：int
     * @throws
     */
    int insert(List<T> list);

    /**
     * 函数功能说明 ：根据id单条更新数据. 修改者名字： Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param entity
     * @参数：@return
     * @return：int
     * @throws
     */
    int update(T entity);

    /**
     * 函数功能说明 ： 根据id批量更新数据. 修改者名字：Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param list
     * @参数：@return
     * @return：int
     * @throws
     */
    int update(List<T> list);

    /**
     * 函数功能说明 ： 根据id查询数据. 修改者名字： Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param id
     * @参数：@return
     * @return：T
     * @throws
     */
    T getById(String id);


    List<T> listByObj(T t);

    /**
     * 函数功能说明 ： 根据id删除数据. 修改者名字： Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param id
     * @参数：@return
     * @return：int
     * @throws
     */
    int delete(String id);

    /**
     * 函数功能说明 ： 根据id批量删除数据. 修改者名字： Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param list
     * @参数：@return
     * @return：int
     * @throws
     */
    int delete(List<String> list);

    /**
     * 函数功能说明 ： 分页查询数据 . 修改者名字： Along 修改日期： 2016-5-11 修改内容：
     * 
     * @参数：@param pageParam
     * @参数：@param paramMap
     * @参数：@return
     * @return：PageBean
     * @throws
     */
     //PageBean listPage(PageParam pageParam, Map<String, Object> paramMap);


    /**
     * 函数功能说明 ： 查询数据总数 . 修改者名字： 飞啊飞 修改日期： 2016-09-13 修改内容：
     *
     * @参数：@param paramMap
     * @参数：@return
     * @return：Long
     * @throws
     */
    Long totalCount(Map<String, Object> paramMap);




    /**
     * 函数功能说明 ： 分页查询数据 .
     * 指定SQL  ID
     * @参数：@param pageParam
     * @参数：@param paramMap
     * @参数：@return
     * @return：PageBean
     * @throws
     */
    //PageBean listPage(PageParam pageParam, Map<String, Object> paramMap, String SqlId);

    /**
     * 函数功能说明 ： 查询数据总数 .
     * 指定SQL  ID
     * @参数：@param paramMap
     * @参数：@return
     * @return：Long
     * @throws
     */
    Long totalCount(Map<String, Object> paramMap, String SqlId);
}
