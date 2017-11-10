package com.demo.utils;

import com.demo.entity.Demo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.*;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;


@SuppressWarnings("unchecked")
@Service
public class RedisService {

    public Logger LOGGER = LoggerFactory.getLogger(RedisService.class);

    public static final String REDIS_CODE = "UTF-8";
    @SuppressWarnings("rawtypes")
    @Autowired
    private RedisTemplate redisTemplate;

    /**
     * 批量删除对应的value
     *
     * @param keys
     */
    public void remove(final String... keys) {
        for (String key : keys) {
            del(key);
        }
    }

    public boolean checkAndSet(String key, Object oldValue, Object newValue, long expireTime) {
        redisTemplate.watch(key);
        Object object = this.get(key);
        if ((oldValue == null && object == null) || oldValue.equals(object)) {
            this.set(key, newValue, expireTime);
            if (redisTemplate.exec() == null) {
                return false;
            }
            return true;
        }
        return false;

    }

    /**
     * 批量删除key
     *
     * @param pattern
     */
    public void removePattern(final String pattern) {
        Set<Serializable> keys = redisTemplate.keys(pattern);
        if (keys.size() > 0)
            redisTemplate.delete(keys);
    }

    /**
     * 删除对应的value
     *
     * @param key
     */
    public void del(final String key) {
        if (exists(key)) {
            redisTemplate.delete(key);
        }
    }

    /**
     * 判断缓存中是否有对应的value
     *
     * @param key
     * @return
     */
    public boolean exists(final String key) {
        return redisTemplate.hasKey(key);
    }

    /**
     * 读取缓存
     *
     * @param key
     * @return
     */
    public Object get(final String key) {
        Object result = null;
        ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
        result = operations.get(key);
        return result;
    }


    //什么鬼

    /**
     * 写入缓存
     *
     * @param key
     * @param value
     * @return
     */
    public boolean set(final String key, Object value) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(key, value);
            result = true;
            return result;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
    }



    /**
     * 写入缓存
     * setIfAbsent目前实际上基本=set_nx,但是会有死锁问题
     *
     * @param key
     * @param value
     * @return
     */
    public boolean setIfAbsent(final String key, Object value, Long expireTime) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            boolean res = operations.setIfAbsent(key, value);
            //未设置失效时间,则默认10分钟
            if (null == expireTime) {
                expireTime = 300L;
            }
            //死锁就是因为这两步不是原子的
            if (res) {
                redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            }
            return res;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
    }

    /**
     * 多个键值对写入缓存
     * multiSet
     *
     * @param map
     * @return
     */
    public boolean multiSet(Map<String, Object> map) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.multiSet(map);
            result = true;
            return result;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
    }


    /**
     * 写入缓存
     *
     * @param key
     * @param value
     * @return
     */
    public boolean set(final String key, Object value, Long expireTime) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(key, value);
            if (null != expireTime && 0 < expireTime) {
                redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            }
            result = true;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    /**
     * 重新设置缓存时间
     * @param key
     * @return
     */
    public boolean setExpireTime(final String key, Long expireTime) {
        boolean result = false;
        try {
            if ( null != expireTime && 0 < expireTime) {
                redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            }
            result = true;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    /**
     * 递减
     *
     * @param key
     * @return
     */
    public Long decr(final String key) {
        final byte[] rawKey = key.getBytes(Charset.forName("UTF8"));

        return (Long) this.redisTemplate.execute(new RedisCallback() {
            public Long doInRedis(RedisConnection connection) {
                return connection.decr(rawKey);
            }
        }, true);

    }

    /**
     * 递增
     *
     * @param key
     * @return
     */
    public Long incr(final String key) {

        final byte[] rawKey = key.getBytes(Charset.forName("UTF8"));

        return (Long) this.redisTemplate.execute(new RedisCallback() {
            public Long doInRedis(RedisConnection connection) {
                return connection.incr(rawKey);
            }
        }, true);

    }


    /**
     * 写入缓存,目前主要是先完成从列表里面增加和删除
     *
     * @param key
     * @param value
     * @return
     */
    public boolean hset(final String key, final String field, Object value, Long expireTime) {
        boolean result = false;
        try {
            HashOperations<String, String, Object> operations = redisTemplate.opsForHash();
            operations.put(key, field, value);
            if (null != expireTime && 0 < expireTime) {
                redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            }
            result = true;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    /**
     * 获取某一hashmap类型下的所有field
     *
     * @param key
     * @return
     */
    public Set<String> hkeys(final String key) {
        Set<String> fieldSet = null;
        try {
            HashOperations<String, String, Object> operations = redisTemplate.opsForHash();
            fieldSet = operations.keys(key);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return fieldSet;
    }

    /**
     * 设置hashmap形式的值
     *
     * @param key
     * @param field
     * @param value
     * @return
     */
    public boolean hset(final String key, final String field, Object value) {
        boolean result = false;
        try {
            HashOperations<String, String, Object> operations = redisTemplate.opsForHash();
            operations.put(key, field, value);
            result = true;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    /**
     * 写入缓存,目前主要是先完成从列表里面增加和删除
     *
     * @param key
     * @param field
     * @return
     */
    public Object hget(final String key, final String field, Long expireTime) {
        Object result = null;
        try {
            HashOperations<String, String, Object> operations = redisTemplate.opsForHash();
            result = operations.get(key, field);
            if (null != result && null != expireTime && 0 < expireTime) {
                redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            }
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    /**
     * 根据key和field获取哈希值
     *
     * @param key
     * @param field
     * @return
     */
    public Object hget(final String key, final String field) {
        Object result = null;
        try {
            HashOperations<String, String, Object> operations = redisTemplate.opsForHash();
            result = operations.get(key, field);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    /**
     * 按照key和field删除hashmap值
     *
     * @param key
     * @param field
     * @return
     */
    public boolean hdel(final String key, final String field) {
        boolean result = false;
        try {
            HashOperations<String, String, Object> operations = redisTemplate.opsForHash();
            operations.delete(key, field);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    //向redis里添加set
    public boolean sadd(final String key, final List<String> values) {
        boolean result = false;
        try {
            SetOperations<String, Object> operations = redisTemplate.opsForSet();
            result = operations.add(key, values) > 0;
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }

    //获取set里的集合
    public Set<String> smembers(final String key) {
        Set result = new HashSet<String>();
        try {
            SetOperations<String, Object> operations = redisTemplate.opsForSet();
            result = operations.members(key);
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
            throw new RuntimeException(e);
        }
        return result;
    }


    public Map<String, Object> rkeyLike(final String keyLike) {

        Map<String, Object> values = new HashMap<String, Object>();
        try {
            Set<String> keys = redisTemplate.keys(keyLike + "*");
            for (String b : keys) {
                Object v = get(b);
                if (v != null) {
                    values.put(b, v);
                }
            }
        } catch (Exception e) {
            LOGGER.error("Exception happens when rkeyLike,the key is " + keyLike, e);
            throw new RuntimeException(e);
        }
        return values;
    }

    public String getId(final String tableType, final String area) {
        try {
            if (tableType.equalsIgnoreCase("1")) {

                Date curDate = new Date();
                long curTime = curDate.getTime();
                String curTimeNextHour = new SimpleDateFormat("yyyy-MM-dd HH:").format(curTime + 1 * 60 * 60 * 1000) + "00:00";
                Date curDateNextHour = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(curTimeNextHour);
                long expireTime = (curDateNextHour.getTime() - curTime) / 1000;
                String dateString = new SimpleDateFormat("yyMMddHH").format(curDate);

//                //前缀待确定,后续从配置里面读取
//                String prefix = "FY1";
//
//                if(area.equals(ConfigSysConstant.areaBeiJing)){
//                    prefix = ConfigSysConstant.areaBeiJingCode;
//                }
//                else if(area.equals(ConfigSysConstant.areaShanghai)){
//                    prefix = ConfigSysConstant.areaShanghaiCode;
//                }
                //随机四位整数,位数后续也可以从配置里面读取
                Random random = new Random();
                NumberFormat numberFormat = NumberFormat.getInstance();
                numberFormat.setMinimumIntegerDigits(4);
                String key = tableType + area + dateString;
                String value;
                //要在当前小时以内,所以过期时间 = 当前时间的下一个小时整点 - 当前时间。
                //重试次数,虽然概率小但是也要尽可能避免,已经生成过,则重新生成
                Object redisValue = null;
                int retryCount = 1;//后续也可以从配置里面读取
                for (int i = 0; i < retryCount + 1; i++) {
                    int num = random.nextInt(9999) + 1;
                    String formatNum = numberFormat.format(num);
                    //因为带逗号,所以去一下逗号
                    formatNum = formatNum.replace(",", "");
                    value = area + dateString + formatNum;
                    redisValue = hget(key, value, expireTime);
                    if (null == redisValue) {
                        boolean hsetRes = hset(key, value, "1", expireTime);
                        LOGGER.debug("存入redis时的ID是" + value + "存入结果是" + hsetRes);
                        return value;
                    }
                }
                if (null != redisValue) {
                    //记录重试失败
                    LOGGER.error("生成唯一ID时失败,重复的ID是" + redisValue.toString() + "数据表类型是" + tableType);
                    return null;
                }
            } else {
                return null;
            }
        } catch (ParseException pEx) {
            //记录失败
            LOGGER.error("生成唯一ID时反格式化日期失败,数据表类型是" + tableType);
            throw new RuntimeException(pEx);
        }
        return null;
    }

    //当前主要解决抢锁失败没有权限时,谁在用锁的提示问题
//    public LockResult getLockNew(String key, String userID, Long keyLockTimeSeconds, String bussType) {
//        boolean ifExist = exists(key);
//        LockResult lockResult = new LockResult();
//        if (ifExist) {
//            //是当前操作员,可以进入
//            String grabUserId = (String) get(key);
//            if (grabUserId.equals(userID)) {
//                lockResult.setAccess(MortgageBusinessConstant.HAVE_ACCESS);
//                lockResult.setUserId(userID);
//            } else {
//                lockResult.setAccess(MortgageBusinessConstant.NO_ACCESS);
//                lockResult.setUserId(grabUserId);
//                //TODO LIUQING
////                User user = this.userFacade.getById(grabUserId);
////                lockResult.setUserName(user.getName());
//            }
//        } else {
//            if (null == keyLockTimeSeconds) {
//                keyLockTimeSeconds = 300L;
//            }
//            //10分钟在分配页面停留的时间
//            boolean grabLock = setIfAbsent(key, userID, keyLockTimeSeconds);
//            if (grabLock) {
//                lockResult.setAccess(MortgageBusinessConstant.HAVE_ACCESS);
//                lockResult.setUserId(userID);
//            } else {
//                //出现这种情况,说明redis有问题!
//                lockResult.setAccess(MortgageBusinessConstant.NO_ACCESS);
//                lockResult.setUserName(null);
//            }
//        }
//        return lockResult;
//    }

    public String getNo() {

        String yyyyMMddHHmmss = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());

        String key = yyyyMMddHHmmss+String.valueOf((int)(Math.random()*(9999-1000+1))+1000);

        if(!setIfAbsent(key,key,60L)){
            return this.getNo();
        }
        return key;

    }

    public void convertAndSend(String channel, Object message) {
        Assert.hasText(channel, "a non-empty channel is required");

        final byte[] rawChannel = channel.getBytes();
        final byte[] rawMessage = message.toString().getBytes();

        redisTemplate.execute(new RedisCallback<Object>() {

            public Object doInRedis(RedisConnection connection) {
                connection.publish(rawChannel, rawMessage);
                return null;
            }
        }, true);
    }
  /**************************************************************************************************************/
    public Boolean setString(String key, String value) {
        ValueOperations<Serializable,String> valueOperations = redisTemplate.opsForValue();
        //如果不存在就set
        return valueOperations.setIfAbsent(key,value);
    }
    public String getString(String key) {
        ValueOperations<Serializable,String> valueOperations = redisTemplate.opsForValue();
        //如果不存在就set
        return valueOperations.get(key);
    }


    public Boolean setObject(String key, Object value) {
        ValueOperations<Serializable,Object> valueOperations = redisTemplate.opsForValue();
        //如果不存在就set
        return valueOperations.setIfAbsent(key,value);
    }
    public Object getObject(Object key) {
        ValueOperations<Serializable,Demo> valueOperations = redisTemplate.opsForValue();
        //如果不存在就set
        return valueOperations.get(key);
    }


    public Boolean setTiming(String key, long time) {
        if(redisTemplate.hasKey(key)){
            redisTemplate.expire(key,time, TimeUnit.SECONDS);
            return true;
        }else {
            return false;
        }

    }
}