package org.thyonix.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * 异步任务服务
 */
@Component
public class AsyncTaskService {

    /**
     * 使用默认 SimpleAsyncTaskExecutor 的异步任务
     */
    @Async
    public void runDefaultAsyncTask(){
        System.out.println(Thread.currentThread().getName() + "：异步任务-1-执行中...");
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "：异步任务-1-执行结束");
    }

    /**
     * 使用 ThreadPoolTaskExecutor 的异步任务
     */
    @Async("asyncTaskExecutor")
    public void runAsyncTask(){
        System.out.println(Thread.currentThread().getName() + "：异步任务-2-执行中...");
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "：异步任务-2-执行结束");
    }

    /**
     * 使用自定义线程池的异步任务
     */
    @Async("customThreadPoolExecutor")
    public void runCustomAsyncTask(){
        System.out.println(Thread.currentThread().getName() + "：异步任务-3-执行中...");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "：异步任务-3-执行结束");
    }
}
