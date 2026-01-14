package org.thyonix.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thyonix.user.dao.UserDao;
import org.thyonix.user.domain.dto.UserDTO;
import org.thyonix.user.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDTO getUserById(Long id) {
        return userDao.getUserById(id);
    }
}
