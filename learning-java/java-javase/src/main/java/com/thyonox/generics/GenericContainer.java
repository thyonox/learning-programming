/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:34:08
 * @Description: 
 */
package com.thyonox.generics;

import java.util.ArrayList;
import java.util.List;

/**
 * 实现泛型接口并保持泛型
 * @author Thyonox
 * @version 0.0.1
 * @since 2025-07-16
 */
public class GenericContainer<T> implements Container<T> {

    private List<T> items= new ArrayList<>();

    @Override
    public void add(T item) {
        items.add(item);
    }
    
    @Override
    public T remove()  {
        return items.isEmpty() ? null : items.remove(items.size() - 1);
    }
}
