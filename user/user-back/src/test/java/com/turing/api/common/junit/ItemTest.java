package com.turing.api.common.junit;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ItemTest {
    @Test
    void testAdd() {

    }

    @Test
    void testSystemOut() {
        // List<Integer> numbers = List.of(1,2,3,4);
        Item s = new Item();
        String s3 = s.systemOut();
        System.out.println("-->" + s3);
        String s2 = "Hello";
        
        Assertions.assertEquals(s.systemOut(), "hello");


    }
}
