package org.thyonix.user;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.thyonix.user.dao.UserDao;

@SpringBootTest
class CloudUserApplicationTests {

    @Autowired
    private UserDao userDao;

    @Test
    void mybatisTest() {
        System.out.println(userDao.getUserById(1L));
    }

}
