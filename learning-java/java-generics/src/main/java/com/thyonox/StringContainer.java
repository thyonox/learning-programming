package com.thyonox;

import java.util.ArrayList;
import java.util.List;

/**
 * 实现泛型接口并指定具体类型
 * @author Thyonox
 * @version 0.0.1
 * @since 2025-07-16
 */
public class StringContainer implements Container<String> {

    private List<String> items = new ArrayList<>();
    
    @Override
    public void add(String item) {
        items.add(item);
    }

    @Override
    public String remove() {
        return items.isEmpty() ? null : items.remove(items.size() - 1);
    }
}