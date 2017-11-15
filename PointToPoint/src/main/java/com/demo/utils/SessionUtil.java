package com.demo.utils;

import com.demo.contents.SystemContents;
import com.demo.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


/**
 * 获取session中相关信息公共方法
 *
 *
 */
public class SessionUtil {

	private static Logger LogUtil = LoggerFactory.getLogger(SessionUtil.class);
	/**
	 * 获取session对象
	 * 
	 * @return
	 */
	public static HttpSession getSession() {
		HttpSession session = null;
		try {
			if(getRequest() != null)
				session = getRequest().getSession();
		} catch (Exception e) {
			LogUtil.error(e.getMessage(),e);
		}
		return session;
	}

	public static HttpServletRequest getRequest() {
		ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes();
		return attrs.getRequest();
	}

	public static HttpServletResponse getResponse() {
		ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes();
		return attrs.getResponse();
	}

	/**
	 * 获取当前登陆用户对象信息
	 *
	 * @return
	 */
	public static User getCurrentUser() {
		User user = null;
		if(SessionUtil.getSession() != null){
			user = (User) SessionUtil.getSession().getAttribute(SystemContents.SESSION_KEY);
		}
		return user;
	}

	public static void setCurrentUser(User user) {
		SessionUtil.getSession().setAttribute(SystemContents.SESSION_KEY,user);

	}


    public static void invalidate() {
		HttpSession session = getSession();
		if(session != null){
			session.invalidate();
		}

	}
}
