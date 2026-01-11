package com.thyonox.Thread;

import java.util.concurrent.Callable;

/**
 * 使用 Callable 和 FutureTask 创建线程并获取返回值
 */
public class MyCallable implements Callable<Integer> {

    @Override
    public Integer call() throws Exception {
        int sum = 0;
        for (int i = 0; i < 5; i++) {
            sum += i;
            System.out.println("sum:" + sum);
            Thread.sleep(1000);
        }
        return sum;
    }

}
