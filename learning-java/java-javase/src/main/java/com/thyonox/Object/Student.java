/*
 * @Author: thyonox
 * @Date: 2026-03-20 15:12:50
 * @Description: 演示继承的 Student 类，继承自 Person 类，并添加了一个 studentId 属性，以及相应的 getter 和 setter 方法。
 */
package com.thyonox.Object;

public class Student extends Person {
    private String studentId;

    public Student() {
    }

    public Student(String name, int age, String studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    public String getStudentId() {
        return this.studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    @Override
    public String toString() {
        return "{" +
                " name='" + getName() + "'" +
                ", age='" + getAge() + "'" +
                ", studentId='" + getStudentId() + "'" +
                "}";
    }
}
