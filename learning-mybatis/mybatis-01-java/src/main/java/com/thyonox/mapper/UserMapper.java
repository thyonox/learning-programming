package com.thyonox.mapper;

import com.thyonox.domain.User;

public interface UserMapper {

    User selectUserById(Long id);
}
