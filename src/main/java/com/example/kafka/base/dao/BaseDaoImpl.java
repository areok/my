package com.example.kafka.base.dao;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


/**
 * 据访问层基础支撑类.
 */
public abstract class BaseDaoImpl<T> extends SqlSessionDaoSupport implements BaseDao<T> {

    protected static final Log LOG = LogFactory.getLog(BaseDaoImpl.class);

    public static final String SQL_INSERT = "insert";
    public static final String SQL_BATCH_INSERT = "batchInsert";
    public static final String SQL_UPDATE_BY_ID = "updateByPrimaryKey";
    public static final String SQL_BATCH_UPDATE_BY_IDS = "batchUpdateByIds";
    public static final String SQL_SELECT_BY_ID = "selectByPrimaryKey";
    public static final String SQL_DELETE_BY_ID = "deleteByPrimaryKey";
    public static final String SQL_BATCH_DELETE_BY_IDS = "batchDeleteByIds";
    public static final String SQL_LIST_PAGE = "listPage";
    public static final String SQL_LIST_BY_OBJ = "listByObj";
    public static final String SQL_LIST_PAGE_COUNT = "listPageCount";
    public static final String SQL_QUERY_PAGE_COUNT = "queryPageCount";
    public static final String SQL_COUNT_BY_PAGE_PARAM = "countByPageParam"; // 根据当前分页参数进行统计
    

    /**
     * 注入SqlSessionTemplate实例(要求Spring中进行SqlSessionTemplate的配置).
     * 可以调用sessionTemplate完成数据库操作.
     */
    @Autowired
    private SqlSessionTemplate sqlSessionTemplate;

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory){
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    public SqlSessionTemplate getSqlSessionTemplate() {
        return sqlSessionTemplate;
    }

    /**
     * 单条插入数据.
     */
    public int insert(T entity) {

        int result = sqlSessionTemplate.insert(getStatement(SQL_INSERT), entity);
        if (result <= 0) {
            LOG.warn("数据库操作,insert返回0.");
        }
        return result;
    }

    /**
     * 批量插入数据.
     */
    public int insert(List<T> list) {
        if (list.isEmpty() || list.size() <= 0) {
            return 0;
        }

        int result = sqlSessionTemplate.insert(getStatement(SQL_BATCH_INSERT), list);
        if (result <= 0) {
            LOG.warn("数据库操作,batchInsert返回0.");
        }
        return result;
    }

    /**
     * 根据id单条更新数据.
     */
    public int update(T entity) {
        int result = sqlSessionTemplate.update(getStatement(SQL_UPDATE_BY_ID), entity);
        if (result <= 0) {
            LOG.warn("数据库操作,updateByPrimaryKey返回0.");
        }
        return result;
    }

    /**
     * 根据id批量更新数据.
     */
    public int update(List<T> list) {
        if (list.isEmpty() || list.size() <= 0) {
            return 0;
        }
        int result = sqlSessionTemplate.update(getStatement(SQL_BATCH_UPDATE_BY_IDS), list);
        if (result <= 0) {
            LOG.warn("数据库操作,batchUpdateByIds返回0.");
        }
        return result;
    }

    /**
     * 根据id查询数据.
     */
    public T getById(String id) {
        return sqlSessionTemplate.selectOne(getStatement(SQL_SELECT_BY_ID), id);
    }

    public List<T> listByObj(T t){
        if (t == null) {
            return null;
        }
        return sqlSessionTemplate.selectList(getStatement(SQL_LIST_BY_OBJ), t);
    }

    /**
     * 根据id删除数据.
     */
    public int delete(String id) {
        return (int) sqlSessionTemplate.delete(getStatement(SQL_DELETE_BY_ID), id);
    }

    /**
     * 根据id批量删除数据.
     */
    public int delete(List<String> list) {
        if (list.isEmpty() || list.size() <= 0) {
            return 0;
        } else {
            return (int) sqlSessionTemplate.delete(getStatement(SQL_BATCH_DELETE_BY_IDS), list);
        }
    }

    public Long totalCount(Map<String, Object> paramMap){
        if(null == paramMap){
            return 0L;
        }else{
            Long totalCount = sqlSessionTemplate.selectOne(getStatement(SQL_LIST_PAGE_COUNT), paramMap);
            if(null == totalCount){
                return 0L;
            }else{
                return totalCount;
            }
        }
    }

    public Long queryTotalCount(Map<String, Object> paramMap){
        if(null == paramMap){
            return 0L;
        }else{
            Long totalCount = sqlSessionTemplate.selectOne(getStatement(SQL_QUERY_PAGE_COUNT), paramMap);
            if(null == totalCount){
                return 0L;
            }else{
                return totalCount;
            }
        }
    }

    /**
     * 函数功能说明 ： 获取Mapper命名空间. 修改者名字： Along 修改日期： 2016-1-8 修改内容：
     * 
     * @参数：@param sqlId
     * @参数：@return
     * @return：String
     * @throws
     */
    public String getStatement(String sqlId) {
        String name = this.getClass().getName();
        // 单线程用StringBuilder，确保速度；多线程用StringBuffer,确保安全
        StringBuilder sb = new StringBuilder();
        sb.append(name).append(".").append(sqlId);
        return sb.toString();
    }

    /**
     * 根据指定SQL统计数据条数
     * @param paramMap
     * @param SqlId  原则：SqlId+"Count"
     * @return
     */
    public Long totalCount(Map<String, Object> paramMap, String SqlId){
        if(null == paramMap){
            return 0L;
        }
        else{
            Long totalCount = sqlSessionTemplate.selectOne(getStatement(SqlId), paramMap);
            if(null == totalCount){
                return 0L;
            }
            else{
                return totalCount;
            }
        }
    }

}
