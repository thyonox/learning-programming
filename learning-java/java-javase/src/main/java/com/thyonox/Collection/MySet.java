package com.thyonox.Collection;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class MySet {

    public void set() {
        Set<String> hashSet = new HashSet<>();
        hashSet.add("apple");
        hashSet.add("Banana");
        hashSet.add(null);
        hashSet.add("apple");

        System.out.println("HashSet:" + hashSet);
        System.out.println("Contains Apple:" + hashSet.contains("apple"));

        // 使用增强 for 循环进行遍历
        System.out.println("增强for循环遍历:");
        for (String itemString : hashSet) {
            System.out.println("- " + itemString + " ");
        }

        // 通过 forEach 进行快速遍历
        System.out.println("forEach遍历:");
        hashSet.forEach(itemString -> System.out.println("- " + itemString));

        // 通过迭代器遍历元素，可以在遍历时安全删除元素
        System.out.println("迭代器遍历:");
        Iterator<String> iterator = hashSet.iterator();
        while (iterator.hasNext()) {
            String item = iterator.next();
            if (item == null) {
                iterator.remove();
            }else {
                System.out.println("- " + item + " ");
            }
        }

        // 通过 stream 进行复杂操作
        System.out.println("strean 操作:");
        hashSet.stream()
            .filter(itemString -> itemString.startsWith("B"))
            .map(itemString -> itemString.toUpperCase())
            .forEach(itemString -> System.out.println("- " + itemString));
    }

    public static void main(String[] args) {
        MySet mySet = new MySet();
        mySet.set();
    }
}
