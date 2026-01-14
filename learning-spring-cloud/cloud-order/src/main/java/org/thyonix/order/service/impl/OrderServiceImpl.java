package org.thyonix.order.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.thyonix.order.dao.OrderDao;
import org.thyonix.order.domain.Order;
import org.thyonix.order.domain.dto.UserDTO;
import org.thyonix.order.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private RestTemplate restTemplate;

    @Override
    public Order getOrderById(long id) {
        Order order =  orderDao.getOrderById(id);
        //String url = "http://localhost:8080/user/" + order.getUserId();
        String url = "http://CLOUD-USER/user/" + order.getUserId();
        UserDTO userDTO = restTemplate.getForObject(url, UserDTO.class);
        order.setUserDTO(userDTO);
        return order;
    }
}
