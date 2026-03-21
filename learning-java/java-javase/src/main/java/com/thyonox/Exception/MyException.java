/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:19:50
 * @Description: 
 */
package com.thyonox.Exception;

public class MyException {
    public void indexExp() {
        int[] arr = {1, 2, 3};
        try {
            for (int i = 0; i <= arr.length; i++) {
                System.out.println(arr[i]);
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            e.printStackTrace();
        }
    }
}
