package com.thyonox.Thread;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 * 使用 Lambda 表达式简化 Runnable 和 Callable 的实现方式
 */
public class LambdaThread {

    /**
     * Runnable Lambaa
     */
    public void runableLambda() {
        Thread thread = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("Lambda Thread:" + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        });
        thread.start();
    }

    /**
     * Callable Lambda
     * @throws InterruptedException
     * @throws ExecutionException
     */
    public void callableLambda() throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Future<Integer> future = executor.submit(() -> {
            int sum = 0;
            for (int i = 0; i < 5; i++) {
                sum += i;
                System.out.println("Callable Lambda Thread:" + sum);
            }
            return sum;
        });
        System.out.println("Callable Lambda Result: " + future.get());
        executor.shutdown();
    }
}
