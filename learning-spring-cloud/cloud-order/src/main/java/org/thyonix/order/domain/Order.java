package org.thyonix.order.domain;

import org.thyonix.order.domain.dto.UserDTO;

import java.io.Serial;
import java.io.Serializable;
import java.math.BigDecimal;

public class Order implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long orderId;

    private Long userId;

    private String orderName;

    private BigDecimal price;

    private Integer num;

    private UserDTO user;

    public Order() {
    }

    public Order(Long orderId, Long userId, String orderName, BigDecimal price, Integer num) {
        this.orderId = orderId;
        this.userId = userId;
        this.orderName = orderName;
        this.price = price;
        this.num = num;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public UserDTO getUserDTO() {
        return user;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.user = userDTO;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", userId=" + userId +
                ", orderName='" + orderName + '\'' +
                ", price=" + price +
                ", num=" + num +
                ", user=" + user +
                '}';
    }
}
