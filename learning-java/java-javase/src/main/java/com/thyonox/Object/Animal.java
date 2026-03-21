/*
 * @Author: thyonox
 * @Date: 2026-03-20 15:35:44
 * @Description: 演示抽象类的 Animal 类，包含 name 和 age 属性，以及抽象方法 makeSound 和 speed，同时提供了相应的 getter 和 setter 方法。
 */
package com.thyonox.Object;

public abstract class Animal {
    private String name;
    private int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    abstract void makeSound();

    abstract void speed();


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
