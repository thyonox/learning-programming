/*
 * @Author: thyonox
 * @Date: 2026-03-20 15:40:09
 * @Description: 演示抽象类的 Dog 类，继承自抽象类 Animal，并实现了 makeSound 和 speed 方法，同时添加了一个 type 属性，以及相应的 getter 和 setter 方法。 
 */
package com.thyonox.Object;

public class Dog extends Animal{
    private String type;

    public Dog(String name, int age, String type) {
        super(name, age);
        this.type = type;
    }

    @Override
    void makeSound() {
        System.out.println("汪汪汪");
    }

    @Override
    void speed() {
        System.out.println("狗的速度是每小时40公里");
    }


    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
