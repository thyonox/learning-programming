package com.thyonox;

public class Main {
    public static void main(String[] args) {
        // Stack<String> stack = new Stack<>();
        // stack.push("first");
        // stack.push("second");
        // System.out.println(stack.pop());

        // String[] strArray = {"11", "22", "33"};
        // Integer[] intArray = {1, 2, 3};
        // Utils.printArray(strArray);
        // System.out.println(Utils.findMax(intArray));

        Box<String> strBox = new Box<>("hello");
        Box<Integer> intBox = new Box<Integer>(24);
        System.out.println("strBox:" + strBox.getItem());
        System.out.println("intBox:" + intBox.getItem());
    }
}