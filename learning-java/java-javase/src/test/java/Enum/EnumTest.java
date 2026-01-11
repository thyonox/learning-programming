package Enum;

import com.thyonox.Enum.Color;
import com.thyonox.Enum.ConfigManager;
import com.thyonox.Enum.OrderStatus;
import com.thyonox.Enum.PaymentMethod;

import org.junit.Test;

public class EnumTest {

    @Test
    public void testColor(){
        Color red = Color.RED;
        switch (red){
            case RED:
                System.out.println(Color.RED);
                break;
            case GREEN:
                System.out.println(Color.GREEN);
                break;
            case BLUE:
                System.out.println(Color.BLUE);
        }
    }

    @Test
    public void testOrder(){
       OrderStatus orderStatus = OrderStatus.fromCode(2);
        System.out.println(orderStatus.getInfo());
    }

    @Test
    public void testConfig(){
        String config = ConfigManager.INSTANCE.getConfig("db.url");
        System.out.println(config);
    }

    @Test
    public void testPayment(){
        PaymentMethod wechat = PaymentMethod.fromCode("wechat");
        System.out.println(wechat.processPayment(400.10));
    }
}
