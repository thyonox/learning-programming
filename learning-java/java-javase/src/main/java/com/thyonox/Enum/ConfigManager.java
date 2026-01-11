package com.thyonox.Enum;

import java.util.HashMap;
import java.util.Map;

/**
 * 实现单例模式
 */
public enum ConfigManager {
    INSTANCE;

    private final Map<String, String> config;

    ConfigManager(){
        config = new HashMap<>();
        config.put("db.url", "jdbc:mysql://localhost:3306/mydb");
        config.put("db.user", "root");
    }

    public String getConfig(String key){
        return config.get(key); 
    }

    public void setConfig(String key, String value){
        config.put(key, value);
    }
}
