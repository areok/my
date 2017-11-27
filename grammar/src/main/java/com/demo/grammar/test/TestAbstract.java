package com.demo.grammar.test;

import com.demo.grammar.abst.AbsMqEvent;
import com.demo.grammar.clazz.TestEvent;
import com.demo.grammar.entity.Message;
import com.demo.grammar.inter.Event;
import org.junit.Test;

/**
 * Created by 马宇驰 on 2017/11/24.
 */
public class TestAbstract {
    @Test
    public void test1(){
        Message message = new Message();
        message.setName("test1");
        message.setData("test1Name");
        AbsMqEvent<Message> event = new TestEvent(message);
        System.out.println(event.getId()+"----------"+event.getData().getData()+"============"+event.getData().getName());
    }
    @Test
    public void test2(){
        Message message = new Message();
        message.setName("test2");
        message.setData("test2Name");
        Event<Message> event = new TestEvent(message);
        System.out.println(event.getId()+"----------"+event.getData().getData()+"============"+event.getData().getName());
    }

}
