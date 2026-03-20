package Enum;

import com.thyonox.Enum.Color;
import com.thyonox.Enum.ConfigManager;
import com.thyonox.Enum.OrderStatus;
import com.thyonox.Enum.PaymentMethod;

import org.junit.Test;

public class EnumTest {

    // 演示枚举在 switch 中的分支匹配。
    @Test
    public void testColor(){
        Color red = Color.RED;
        // 根据不同的枚举常量执行对应逻辑。
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

    // 通过状态码获取订单状态并读取描述信息。
    @Test
    public void testOrder(){
       OrderStatus orderStatus = OrderStatus.fromCode(2);
        System.out.println(orderStatus.getInfo());
    }

    // 使用枚举单例读取配置项。
    @Test
    public void testConfig(){
        String config = ConfigManager.INSTANCE.getConfig("db.url");
        System.out.println(config);
    }

    // 根据支付方式编码获取枚举并执行支付逻辑。
    @Test
    public void testPayment(){
        PaymentMethod wechat = PaymentMethod.fromCode("wechat");
        System.out.println(wechat.processPayment(400.10));
    }
}
