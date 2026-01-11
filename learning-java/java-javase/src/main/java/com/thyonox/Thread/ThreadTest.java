package com.thyonox.Thread;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/**
 * 多线程测试类
 */
public class ThreadTest {

    /**
     * 测试继承 Thread 类的方式创建线程
     */
    public void threadTest() {
        MyThread myThread1 = new MyThread();
        MyThread myThread2 = new MyThread();
        myThread1.start();
        myThread2.start();
    }

    /**
     * 测试实现 Runnable 接口的方式创建线程
     */
    public void runnableTest() {
        MyRunnable myRunnable = new MyRunnable();
        Thread thread1 = new Thread(myRunnable, "Thread-1");
        Thread thread2 = new Thread(myRunnable, "Thread-2");
        thread1.start();
        thread2.start();
    }

    /**
     * 测试使用 Callable 和 FutureTask 的方式创建线程并获取返回值
     * 
     * @throws InterruptedException
     * @throws ExecutionException
     */
    public void callableTest() throws InterruptedException, ExecutionException {
        MyCallable myCallable = new MyCallable();
        FutureTask<Integer> futureTask = new FutureTask<>(myCallable);
        Thread thread = new Thread(futureTask);
        thread.start();
        System.out.println("Result:" + futureTask.get());
    }

    /**
     * 测试使用 Lambda 表达式简化 Runnable 和 Callable 的实现方式
     * @throws InterruptedException
     * @throws ExecutionException
     */
    public void lambdaTest() throws InterruptedException, ExecutionException {
        LambdaThread lambdaThread = new LambdaThread();
        lambdaThread.runableLambda();
        lambdaThread.callableLambda();
    }

    public static void main(String[] args) {
        ThreadTest threadTest = new ThreadTest();
        try {
            threadTest.lambdaTest();
        } catch (InterruptedException | ExecutionException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
