package com.demo.service;

import com.demo.abs.EventAbstract;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

/**
 * Created by 马宇驰 on 2017/11/30.
 */
@Component
public class EventFactory implements FactoryBean<EventAbstract>,InitializingBean, DisposableBean {

    private EventAbstract eventAbstract;


    @Override
    public void destroy() throws Exception {
        System.out.println("descory");
    }

    @Override
    public EventAbstract getObject() throws Exception {
        System.out.println("2222");
        return eventAbstract;
    }

    @Override
    public Class<?> getObjectType() {
        return EventAbstract.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("1111");
        eventAbstract = new EventAbstract() {
            @Override
            public void push() {
                System.out.println(1);
            }
        };
    }
}
