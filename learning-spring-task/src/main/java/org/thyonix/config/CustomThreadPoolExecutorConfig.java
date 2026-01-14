package org.thyonix.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.thyonix.factory.CustomThreadFactory;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * 自定义线程池
 */
@Configuration
public class CustomThreadPoolExecutorConfig {

    @Bean
    public ThreadPoolExecutor customThreadPoolExecutor() {
        return new ThreadPoolExecutor(
                10,
                20,
                60,
                TimeUnit.SECONDS,
                new LinkedBlockingQueue<Runnable>(100),
                new CustomThreadFactory(),
                new ThreadPoolExecutor.CallerRunsPolicy()
        );
    }
}
