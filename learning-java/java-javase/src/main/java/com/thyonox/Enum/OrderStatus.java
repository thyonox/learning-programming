package com.thyonox.Enum;

public enum OrderStatus {
    PENDING(1, "待支付"),
    PAID(2, "已支付"),
    SHIPPED(3, "已发货"),
    COMPLETED(4, "已完成"),
    CANCELLED(5, "已取消");

    private int code;
    private String info;

    OrderStatus(int code, String info) {
        this.code = code;
        this.info = info;
    }

    public int getCode(){
        return code;
    }

    public String getInfo(){
        return info;
    }

    public static OrderStatus fromCode(int code){
        for (OrderStatus orderStatus : values()) {
            if (orderStatus.code == code) {
                return orderStatus; 
            } 
        } 
        throw new IllegalArgumentException("Unkown code:"+ code);
    }

    @Override
    public String toString() {
        return "OrderStatus{" +
                "code=" + code +
                ", info='" + info + '\'' +
                '}';
    }
}
