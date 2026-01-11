package com.thyonox.Collection;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class MyList {
    public void arraryList() {
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add(0, "Orange");
        System.out.println("ArrayList:" + arrayList);
        System.out.println("Element at index 1:" + arrayList.get(1));

        // 使用 for 循环进行遍历，能显示索引
        for (int i = 0; i < arrayList.size(); i++) {
            System.out.println("Index" + i + ":" + arrayList.get(i));
        }

        // 使用增强 for 循环进行遍历，不能显示索引
        for (String itemString : arrayList) {
            System.out.println(itemString);
        }

        // 通过 forEach 遍历
        arrayList.forEach(System.out::println);

        // 通过迭代器遍历，可以在遍历时安全删除元素
        Iterator<String> iterator = arrayList.iterator();
        while (iterator.hasNext()) {
            String itemString = iterator.next();
            if (itemString.equals("Banana")) {
                iterator.remove();
            }
        }
        System.out.println(arrayList);

        // 通过 list 迭代器遍历，支持遍历时修改、添加元素
        ListIterator<String> listIterator = arrayList.listIterator();
        while (listIterator.hasNext()) {
            if (listIterator.next().equals("Orange")) {
                listIterator.set("Mango");
                listIterator.add("Grape"); 
            }
        }
        System.out.println(arrayList);

        // 通过 steam 进行复杂操作
        arrayList.stream()
            .filter(itemString -> itemString.startsWith("A"))
            .map(itemString -> itemString.toUpperCase())
            .forEach(itemString -> System.out.println(itemString));
    }

    public static void main(String[] args) {
        MyList myList = new MyList();
        myList.arraryList();
    }
}

