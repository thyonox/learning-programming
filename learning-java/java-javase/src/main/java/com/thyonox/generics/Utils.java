/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:34:08
 * @Description: 
 */
package com.thyonox.generics;

public class Utils {
    // 打印数组内容
    public static <T> void printArray(T[] array){
        for (T t : array) {
            System.out.println(t);
        }
    }

    // 比较数组中的最大值
    public static <T extends Comparable<T>> T findMax(T[] array) {
        T max = array[0];
        for (T t : array) {
            if (t.compareTo(max) > 0) {
                max = t;
            }
        }
        return max;
    }
}
