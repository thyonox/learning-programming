package org.thyonix.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * 定时任务服务
 */
@Component
public class ScheduledTasksService {

    @Autowired
    private AsyncTaskService asyncTaskService;

    /**
     * 每 5 秒执行一次
     */
    @Scheduled(fixedRate = 5000)
    public void runRateTask(){
        System.out.println(Thread.currentThread().getName() + "：定时任务-1-执行中...");

        // 调用异步任务
        asyncTaskService.runDefaultAsyncTask();
        asyncTaskService.runAsyncTask();
        asyncTaskService.runCustomAsyncTask();
    }

    /**
     * 上一次任务执行完成，延迟 5 秒执行下一次
     */
    @Scheduled(fixedDelay = 5000)
    public void runDelayTask(){
        System.out.println(Thread.currentThread().getName() + "：定时任务-2-执行中...");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    /**
     * 每分钟的第 5 秒执行一次
     */
    @Scheduled(cron = "5 * * * * *")
    public void runCronTask(){
        System.out.println(Thread.currentThread().getName() + "：定时任务-3-执行中...");
    }
}
