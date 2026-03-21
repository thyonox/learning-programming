/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:34:08
 * @Description: 
 */
package com.thyonox.generics;

public class Box<T> {
    private T item;

    public Box() {
    }
    
    public Box(T item) {
        this.item = item;
    }

    public T getItem() {
        return this.item;
    }

    public void setItem(T item) {
        this.item = item;
    }
}
