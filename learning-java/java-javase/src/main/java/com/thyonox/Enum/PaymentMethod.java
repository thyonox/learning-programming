package com.thyonox.Enum;

public enum PaymentMethod {
    ALIPAY("alipay"){
        @Override
        public String processPayment(double amount) {
            return "alipay" + amount;
        }
    },
    WECHAT("wechat"){
        @Override
        public String processPayment(double amount) {
            return "wechat" + amount;
        }
    };
    private final String code;

    PaymentMethod(String code){
        this.code = code;
    }

    public abstract String processPayment(double amount);

    public static PaymentMethod fromCode(String code){
        for (PaymentMethod paymentMethod : values()) {
            if (paymentMethod.code.equals(code)) {
                return paymentMethod;
            } 
        }
        throw new IllegalArgumentException("Unknown payment code:" + code);
    }
}
