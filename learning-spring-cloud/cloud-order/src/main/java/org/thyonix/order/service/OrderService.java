package org.thyonix.order.service;

import org.thyonix.order.domain.Order;

public interface OrderService {

    Order getOrderById(long id);
}
