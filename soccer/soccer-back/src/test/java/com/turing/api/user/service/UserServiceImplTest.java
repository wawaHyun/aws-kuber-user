package com.turing.api.user.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import jakarta.transaction.Transactional;


@Transactional
public class UserServiceImplTest {

    @Autowired
    private UserService ser;

    @Test
    void testCount() {
        // Assertions.assertEquals(ser.count(), "20");
        // assertThat(ser.count()).isEqualTo(20);
        Assertions.assertEquals(ser.count(), 20);

        
        // long totalUsers = ser.count();

        // assertThat(totalUsers).isEqualTo(14L);
    }

    @Test
    void testDeleteById() {

    }

    @Test
    void testExistsById() {

    }

    @Test
    void testFindAll() {

    }

    @Test
    void testFindById() {

    }

    @Test
    void testFindUsersByJob() {

    }

    @Test
    void testFindUsersByName() {

    }

    @Test
    void testLogin() {

    }

    @Test
    void testModify() {

    }

    @Test
    void testSave() {

    }
}
