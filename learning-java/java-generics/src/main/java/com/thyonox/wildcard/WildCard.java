package com.thyonox.wildcard;

import java.util.List;

/**
 * 通配符类示例
 * @author Thyonox
 * @version 0.0.1
 * @since 2025-07-16
 */
public class WildCard {

    /**
     * 无界通配符-打印集合项
     * @param list
     */
    public void pritnList(List<?> list){
        for (Object item : list) {
            System.out.print(item);
        }
    }

    /**
     * 上界通配符-对集合项求和
     * @param list
     * @return
     */
    public double sum(List<? extends Number> list){
        double sum = 0;
        for (Number number : list) {
            sum = sum + number.doubleValue();
        }
        return sum;
    }

    /**
     * 下界通配符-像列表添加整数
     * @param list
     * @param count
     */
    public void addNumbers(List<? super Integer> list, int count){
        for (int i = 0; i < count; i++) {
            list.add(i);
        }
    }
}
