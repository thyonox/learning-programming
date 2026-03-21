/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:34:08
 * @Description: 
 */
package com.thyonox.generics;

import java.util.ArrayList;
import java.util.List;


public class Stack<T> {
    private List<T> items = new ArrayList<>();
    
    /**
     * 往栈中添加元素
     * @param item
     */
    public void push(T item){
        items.add(item);
    }

    /**
     * 从栈中取出元素
     * @return
     */
    public T pop(){
        if (!items.isEmpty()) {
            return items.remove(items.size() - 1);
        }
        return null;
    }
}
