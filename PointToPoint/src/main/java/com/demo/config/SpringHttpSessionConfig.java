package com.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.session.SessionRepository;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;
import org.springframework.session.data.redis.RedisOperationsSessionRepository;
import org.springframework.session.web.http.CookieHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;

/**
 * Created by liuqing on 2017/8/30.
 */
@Configuration
@EnableSpringHttpSession
public class SpringHttpSessionConfig {
    @Bean
    public SessionRepository<?> sessionRepository(RedisConnectionFactory redisConnectionFactory) {
        RedisOperationsSessionRepository redisSessionRepository =
                new RedisOperationsSessionRepository(redisConnectionFactory);
        redisSessionRepository.setDefaultMaxInactiveInterval(86400);//单位秒 1天
        redisSessionRepository.setRedisKeyNamespace("fullflow_web");
        return redisSessionRepository;
    }

    @Bean
    public HttpSessionStrategy httpSessionStrategy() {
        return new CookieHttpSessionStrategy();
    }
}
