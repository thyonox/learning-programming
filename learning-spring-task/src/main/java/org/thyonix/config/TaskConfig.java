package org.thyonix.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

/**
 * 定时任务配置类
 */
@Configuration
@EnableAsync // 启用定时任务
@EnableScheduling // 启用异步任务
public class TaskConfig {

    /**
     * 自定义执行线程池，同配置文件的 execution 项
     * @return TaskExecutor
     */
    @Bean
    public TaskExecutor asyncTaskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(10);  // 设置核心线程数
        executor.setMaxPoolSize(20);  // 设置最大线程数
        executor.setQueueCapacity(100);  // 设置队列容量
        executor.setThreadNamePrefix("ThreadPoolTaskExecutor - "); // 设置线程前缀
        executor.initialize();  // 初始化线程池
        return executor;
    }

    /**
     * 自定义调度线程池，同配置文件的 scheduling 项
     * @return TaskScheduler
     */
    @Bean
    public TaskScheduler taskScheduler() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(5);  // 设置线程数量
        scheduler.setThreadNamePrefix("ThreadPoolTaskScheduler - "); // 设置线程前缀
        return scheduler;  // 会被自动初始化，直接返回
    }

}
