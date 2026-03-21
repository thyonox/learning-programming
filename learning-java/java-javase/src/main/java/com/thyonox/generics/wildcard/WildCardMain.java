/*
 * @Author: thyonox
 * @Date: 2026-03-20 18:34:08
 * @Description: 
 */
package com.thyonox.generics.wildcard;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class WildCardMain {

   public static void main(String[] args) {
        WildCard wildCard = new WildCard();
        
        wildCard.pritnList(Arrays.asList("A", "B", "C"));

        System.out.println(wildCard.sum(Arrays.asList(1, 2, 3)));

        List<Integer> list = new ArrayList<>();
        wildCard.addNumbers(list, 6);
        System.out.println(list);
   }
}
