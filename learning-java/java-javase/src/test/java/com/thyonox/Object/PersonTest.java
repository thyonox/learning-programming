/*
 * @Author: thyonox
 * @Date: 2026-03-20 14:55:10
 * @Description: Person 类的测试类，用于验证 Person 类的功能是否正常。
 */
package com.thyonox.Object;

import org.junit.Test;

public class PersonTest {
   @Test
    public void testPerson() {
        Person person = new Person("Alice", 30);
        System.out.println(person.toString());
    } 
}
