package org.thyonix.user.service;

import org.thyonix.user.domain.dto.UserDTO;

public interface UserService {

    UserDTO getUserById(Long id);
}
