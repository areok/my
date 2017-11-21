package com.demo.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.demo.entity.User;
import com.demo.service.inter.UserFacade;
import com.demo.utils.MapUtils;
import com.demo.utils.SpringContextUtil;
import com.demo.vo.MessageVO;
import org.apache.tomcat.websocket.WsSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.session.SessionRepository;
import org.springframework.stereotype.Component;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by 马宇驰 on 2017/11/13.
 */
@ServerEndpoint(value = "/websocket")
@Component
public class MyWebSocket {

    //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
    private static int onlineCount = 0;

    //concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。
    private static ConcurrentHashMap<Integer, MyWebSocket> webSocketMap = new ConcurrentHashMap<>();

    //与某个客户端的连接会话，需要通过它来给客户端发送数据
    private Session session;


    /**
     * 连接建立成功调用的方法
     */
    @OnOpen
    public void onOpen(Session session) {
        User currentUser = getCurrentUser(session);
        this.session = session;
        webSocketMap.put(currentUser.getId(), this); //加入set中
        addOnlineCount();           //在线数加1
        System.out.println("有新连接加入！" + currentUser.getName() + "当前在线人数为" + getOnlineCount());
        try {
            sendMessage("-----------------------------------");
        } catch (IOException e) {
            System.out.println("IO异常");
        }
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        MapUtils.removeByValue(webSocketMap, this.getSession());
        webSocketMap.remove(this);  //从set中删除
        subOnlineCount();           //在线数减1
        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
    }

    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        System.out.println("来自客户端的消息:" + message);
        User user = getCurrentUser(session);

        MessageVO messageVO = JSON.parseObject(message, new TypeReference<MessageVO>() {});
        Integer toWho = messageVO.getToUserId();
      ;
        MessageVO targetMessage = new MessageVO();
        targetMessage.setMsg(messageVO.getMsg());
        targetMessage.setFromUserName(user.getName());
        targetMessage.setFromUserId(user.getId());
        message = JSON.toJSONString(targetMessage);

        for (Map.Entry<Integer, MyWebSocket> temp : webSocketMap.entrySet()) {
            if (temp.getKey().equals(toWho)) {
                try {
                    temp.getValue().sendMessage(message);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    /**
     * 发生错误时调用
     *
     * @OnError
     */
    public void onError(Session session, Throwable error) {
        System.out.println("发生错误");
        error.printStackTrace();
    }


    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
        //this.session.getAsyncRemote().sendText(message);
    }


    /**
     * 群发自定义消息
     */
    public static void sendInfo(String message) throws IOException {
//        for (MyWebSocket item : webSocketSet) {
//            try {
//                item.sendMessage(message);
//            } catch (IOException e) {
//                continue;
//            }
//        }
    }


    /**
     * 获取登录员
     * @param session
     * @return
     */
    private static User getCurrentUser(Session session) {
        SessionRepository redisSessionRepository = SpringContextUtil.getBean(SessionRepository.class);
        String sessionId = ((WsSession) session).getHttpSessionId();
        Object o = redisSessionRepository.getSession(sessionId);
        if (o == null) {
            return null;
        }
        User user = ((org.springframework.session.Session) o).getAttribute("user");
        if (user == null) {
            return null;
        }
        return user;
    }

    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        MyWebSocket.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        MyWebSocket.onlineCount--;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }
}