package com.thyonox.Collection;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

public class MyMap {
    
    public void hashMap(){
        Map<Integer, String> hashMap = new HashMap<>();
        hashMap.put(1, "apple");
        hashMap.put(2, "banana");
        hashMap.put(3, "apple");
        hashMap.put(null, "null");

        System.out.println("HashMap:" + hashMap);

        // 通过 keyset 遍历
        System.out.println("KeySet遍历:");
        Set<Integer> keySet = hashMap.keySet();
        for (Integer key : keySet) {
            System.out.println("- " + key + ":" + hashMap.get(key));
        } 

        // 通过entryset遍历
        System.out.println("EntrySet遍历:");
        Set<Entry<Integer,String>> entrySet = hashMap.entrySet();
        for (Entry<Integer,String> entry : entrySet) {
            if (entry.getValue().equals("banana")) {
                entry.setValue("Banana");
            }
            System.out.println("- " + entry.getKey() + ":" + entry.getValue());
        }

        // 通过 forEach 遍历
        System.out.println("forEach遍历:");
        hashMap.forEach((key, value) -> System.out.println("- " + key + ":" + value));

        // 通过迭代器遍历
        System.out.println("迭代器遍历:");
        Iterator<Entry<Integer,String>> iterator = hashMap.entrySet().iterator();
        while (iterator.hasNext()) {
            Entry<Integer,String> entry = iterator.next();
            if (entry.getValue().equals("Banana")) {
                iterator.remove();
            }else {
                System.out.println("- " + entry.getKey() + ":" + entry.getValue());
            }
        }

        // 通过 stream 进行复杂操作
        System.out.println("Stream操作:");
        hashMap.entrySet().stream()
            .filter(entry -> entry.getKey() != null && entry.getKey() > 2)
            .map(entry -> entry.getKey() + ":-" + entry.getValue())
            .forEach(item -> System.out.println(item));
    }

    public static void main(String[] args) {
        MyMap myMap = new MyMap();
        myMap.hashMap();
    }
}
