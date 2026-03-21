/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:34:08
 * @Description: 
 */
package com.thyonox.generics;

/**
 * 泛型接口
 * @author Thyonox
 * @version 0.0.1
 * @since 2025-07-16
 */
public interface Container<T> {
    
    /**
     * 添加元素
     * @param item
     */
    void add(T item);

    /**
     * 取出元素
     * @return
     */
    T remove();
}
