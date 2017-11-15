package com.demo.utils;

import com.demo.controller.MyWebSocket;

import javax.websocket.Session;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by 马宇驰 on 2017/11/14.
 */
public class MapUtils{
    public static void removeByValue(ConcurrentHashMap<String,MyWebSocket> map, Session value){
        for (Map.Entry<String,MyWebSocket> temp:map.entrySet()) {
            if(temp.getValue().getSession().equals(value)){
                map.remove(temp.getKey(),temp.getValue());
            }
        }
    }
}
