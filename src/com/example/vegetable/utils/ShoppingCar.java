package com.example.vegetable.utils;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by 马宇驰 on 2018/1/3.
 */
public class ShoppingCar implements Serializable{

    private static final long serialVersionUID =-2057116355580327339L;

    private List<ShopItem> shops;

    private BigDecimal shopCount;

    public List<ShopItem> getShops() {
        return shops;
    }

    public void setShops(List<ShopItem> shops) {
        this.shops = shops;
    }

    public BigDecimal getShopCount() {
        return shopCount;
    }

    public void setShopCount(BigDecimal shopCount) {
        this.shopCount = shopCount;
    }

    @Override
    public String toString() {
        return "ShoppingCar{" +
                "shops=" + shops +
                ", shopCount=" + shopCount +
                '}';
    }
}
