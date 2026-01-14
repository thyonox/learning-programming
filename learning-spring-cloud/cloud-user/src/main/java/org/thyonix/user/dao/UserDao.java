package org.thyonix.user.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.thyonix.user.domain.dto.UserDTO;

@Mapper
public interface UserDao {

    UserDTO getUserById(@Param("userId") Long id);
}
