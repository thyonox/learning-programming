package com.thyonox;

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
