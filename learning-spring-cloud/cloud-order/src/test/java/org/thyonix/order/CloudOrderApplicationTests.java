package org.thyonix.order;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.web.client.RestTemplate;
import org.thyonix.order.dao.OrderDao;

@SpringBootTest
class CloudOrderApplicationTests {

    @Autowired
    private OrderDao orderDao;

    @Autowired
    private LoadBalancerClient loadBalancerClient;

    @Autowired
    private RestTemplate restTemplate;

    @Test
    void mybatisTest() {
        System.out.println(orderDao.getOrderById(1L));
    }

    @Test
    void testLoadBalancer() {
        ServiceInstance instance = loadBalancerClient.choose("cloud_user");
        if (instance != null) {
            System.out.println(instance.getUri().toString());
            return;
        }
        System.out.println("No instance available");
    }

    @Test
    public void testRestTemplate() {
        System.out.println("RestTemplate = " + restTemplate.getClass());
        restTemplate.getInterceptors().forEach(i -> System.out.println("拦截器: " + i.getClass()));
    }

}
