package com.example.vegetable.utils;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * Created by 马宇驰 on 2018/1/3.
 */
public class ShopItem implements Serializable{
    //商品ID
    private Integer shopId;
    //商品名称
    private String shopName;
    //商品图片url
    private String shopUrl;
    //商品数量
    private Double shopNumber;
    //商品价格
    private BigDecimal shopPrice;
    //商品总价
    private BigDecimal shopCount;

    public Integer getShopId() {
        return shopId;
    }

    public void setShopId(Integer shopId) {
        this.shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getShopUrl() {
        return shopUrl;
    }

    public void setShopUrl(String shopUrl) {
        this.shopUrl = shopUrl;
    }

    public Double getShopNumber() {
        return shopNumber;
    }

    public void setShopNumber(Double shopNumber) {
        this.shopNumber = shopNumber;
    }

    public BigDecimal getShopPrice() {
        return shopPrice;
    }

    public void setShopPrice(BigDecimal shopPrice) {
        this.shopPrice = shopPrice;
    }

    public BigDecimal getShopCount() {
        return shopCount;
    }

    public void setShopCount(BigDecimal shopCount) {
        this.shopCount = shopCount;
    }

    @Override
    public String toString() {
        return "ShopItem{" +
                "shopId=" + shopId +
                ", shopName='" + shopName + '\'' +
                ", shopUrl='" + shopUrl + '\'' +
                ", shopNumber=" + shopNumber +
                ", shopPrice=" + shopPrice +
                ", shopCount=" + shopCount +
                '}';
    }
}
