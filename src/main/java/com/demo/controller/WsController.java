package com.demo.controller;

import com.demo.entity.WiselyMessage;
import com.demo.entity.WiselyResponse;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

/**
 * Created by 马宇驰 on 2017/11/13.
 */
@Controller
public class WsController {
    @MessageMapping("/welcome")//1
    @SendTo("/topic/getResponse")//2
    public WiselyResponse say(WiselyMessage message) throws Exception {
        return new WiselyResponse("Welcome, " + message.getName() + "!");
    }
}

/**
 * (1)@MessageMapping和@RequestMapping功能类似，用于设置URL映射地址，浏览器向服务器发起请求，需要通过该地址。
 * <p>
 * (2)如果服务器接受到了消息，就会对订阅了@SendTo括号中的地址传送消息。
 */
