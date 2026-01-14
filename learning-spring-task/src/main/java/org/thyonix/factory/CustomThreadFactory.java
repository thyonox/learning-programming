package org.thyonix.factory;


import java.util.concurrent.ThreadFactory;

/**
 * 自定义线程工厂
 */
public class CustomThreadFactory implements ThreadFactory {
    @Override
    public Thread newThread(Runnable r) {
        Thread t = new Thread(r);
        t.setName("CustomThreadPool -" + t.threadId());
        return t;
    }
}
