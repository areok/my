package com.example.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class Order implements Serializable {
    private Integer id;

    /**
     * 用户id
     */
    private Integer userId;

    /**
     * 收货地址id
     */
    private Integer addressId;

    /**
     * 订单状态 1  待处理，2  配送中，3 已完成，4 退货中，5 退货完成
     */
    private String orderState;

    /**
     * 订单编号
     */
    private String orderNum;

    /**
     * 订单价值
     */
    private BigDecimal orderTotal;

    /**
     * 订单创建时间
     */
    private Date orderCreateTime;

    private static final long serialVersionUID = 1L;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取用户id
     *
     * @return user_id - 用户id
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * 设置用户id
     *
     * @param userId 用户id
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * 获取收货地址id
     *
     * @return address_id - 收货地址id
     */
    public Integer getAddressId() {
        return addressId;
    }

    /**
     * 设置收货地址id
     *
     * @param addressId 收货地址id
     */
    public void setAddressId(Integer addressId) {
        this.addressId = addressId;
    }

    /**
     * 获取订单状态 1  待处理，2  配送中，3 已完成，4 退货中，5 退货完成
     *
     * @return order_state - 订单状态 1  待处理，2  配送中，3 已完成，4 退货中，5 退货完成
     */
    public String getOrderState() {
        return orderState;
    }

    /**
     * 设置订单状态 1  待处理，2  配送中，3 已完成，4 退货中，5 退货完成
     *
     * @param orderState 订单状态 1  待处理，2  配送中，3 已完成，4 退货中，5 退货完成
     */
    public void setOrderState(String orderState) {
        this.orderState = orderState == null ? null : orderState.trim();
    }

    /**
     * 获取订单编号
     *
     * @return order_num - 订单编号
     */
    public String getOrderNum() {
        return orderNum;
    }

    /**
     * 设置订单编号
     *
     * @param orderNum 订单编号
     */
    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum == null ? null : orderNum.trim();
    }

    /**
     * 获取订单价值
     *
     * @return order_total - 订单价值
     */
    public BigDecimal getOrderTotal() {
        return orderTotal;
    }

    /**
     * 设置订单价值
     *
     * @param orderTotal 订单价值
     */
    public void setOrderTotal(BigDecimal orderTotal) {
        this.orderTotal = orderTotal;
    }

    /**
     * 获取订单创建时间
     *
     * @return order_create_time - 订单创建时间
     */
    public Date getOrderCreateTime() {
        return orderCreateTime;
    }

    /**
     * 设置订单创建时间
     *
     * @param orderCreateTime 订单创建时间
     */
    public void setOrderCreateTime(Date orderCreateTime) {
        this.orderCreateTime = orderCreateTime;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        Order other = (Order) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getUserId() == null ? other.getUserId() == null : this.getUserId().equals(other.getUserId()))
            && (this.getAddressId() == null ? other.getAddressId() == null : this.getAddressId().equals(other.getAddressId()))
            && (this.getOrderState() == null ? other.getOrderState() == null : this.getOrderState().equals(other.getOrderState()))
            && (this.getOrderNum() == null ? other.getOrderNum() == null : this.getOrderNum().equals(other.getOrderNum()))
            && (this.getOrderTotal() == null ? other.getOrderTotal() == null : this.getOrderTotal().equals(other.getOrderTotal()))
            && (this.getOrderCreateTime() == null ? other.getOrderCreateTime() == null : this.getOrderCreateTime().equals(other.getOrderCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getUserId() == null) ? 0 : getUserId().hashCode());
        result = prime * result + ((getAddressId() == null) ? 0 : getAddressId().hashCode());
        result = prime * result + ((getOrderState() == null) ? 0 : getOrderState().hashCode());
        result = prime * result + ((getOrderNum() == null) ? 0 : getOrderNum().hashCode());
        result = prime * result + ((getOrderTotal() == null) ? 0 : getOrderTotal().hashCode());
        result = prime * result + ((getOrderCreateTime() == null) ? 0 : getOrderCreateTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", userId=").append(userId);
        sb.append(", addressId=").append(addressId);
        sb.append(", orderState=").append(orderState);
        sb.append(", orderNum=").append(orderNum);
        sb.append(", orderTotal=").append(orderTotal);
        sb.append(", orderCreateTime=").append(orderCreateTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}