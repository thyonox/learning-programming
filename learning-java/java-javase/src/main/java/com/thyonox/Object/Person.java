/*
 * @Author: thyonox
 * @Date: 2026-03-20 14:47:06
 * @Description: 一个基础的 Person 类，包含姓名和年龄属性，以及相应的 getter 和 setter 方法。
 */
package com.thyonox.Object;

public class Person {
    private String name;
    private int age;

    public Person() {
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

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

    @Override
    public String toString() {
        return "{" +
                " name='" + getName() + "'" +
                ", age='" + getAge() + "'" +
                "}";
    }
}
