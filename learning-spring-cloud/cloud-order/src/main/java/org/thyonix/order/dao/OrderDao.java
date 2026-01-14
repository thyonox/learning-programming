package org.thyonix.order.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.thyonix.order.domain.Order;

@Mapper
public interface OrderDao {

    Order getOrderById(@Param("orderId") Long id);
}
