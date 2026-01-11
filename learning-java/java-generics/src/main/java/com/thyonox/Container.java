package com.thyonox;

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
