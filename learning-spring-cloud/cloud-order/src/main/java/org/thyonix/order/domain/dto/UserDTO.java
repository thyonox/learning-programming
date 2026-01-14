package org.thyonix.order.domain.dto;

import java.io.Serial;
import java.io.Serializable;

public class UserDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long userId;

    private String userName;

    private String address;

    public UserDTO() {
    }

    public UserDTO(Long userId, String userName, String address) {
        this.userId = userId;
        this.userName = userName;
        this.address = address;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
