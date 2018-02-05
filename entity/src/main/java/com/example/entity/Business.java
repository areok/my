package com.example.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Table(name = "v_business")
@Entity
public class Business implements Serializable {
    @Id
    @Column(name = "b_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bId;

    @Id
    @Column(name = "b_todaycommend")
    private String bTodaycommend;

    @Column(name = "b_name")
    private String bName;

    /**
     * 备注
     */
    @Column(name = "b_remark")
    private String bRemark;

    /**
     * 图片地址
     */
    @Column(name = "b_url")
    private String bUrl;

    /**
     * 类型
     */
    @Column(name = "b_type")
    private String bType;

    /**
     * 价格
     */
    @Column(name = "b_price")
    private BigDecimal bPrice;

    @Column(name = "b_create_time")
    private Date bCreateTime;

    private static final long serialVersionUID = 1L;

    /**
     * @return b_id
     */
    public Integer getbId() {
        return bId;
    }

    /**
     * @param bId
     */
    public void setbId(Integer bId) {
        this.bId = bId;
    }

    /**
     * @return b_todaycommend
     */
    public String getbTodaycommend() {
        return bTodaycommend;
    }

    /**
     * @param bTodaycommend
     */
    public void setbTodaycommend(String bTodaycommend) {
        this.bTodaycommend = bTodaycommend == null ? null : bTodaycommend.trim();
    }

    /**
     * @return b_name
     */
    public String getbName() {
        return bName;
    }

    /**
     * @param bName
     */
    public void setbName(String bName) {
        this.bName = bName == null ? null : bName.trim();
    }

    /**
     * 获取备注
     *
     * @return b_remark - 备注
     */
    public String getbRemark() {
        return bRemark;
    }

    /**
     * 设置备注
     *
     * @param bRemark 备注
     */
    public void setbRemark(String bRemark) {
        this.bRemark = bRemark == null ? null : bRemark.trim();
    }

    /**
     * 获取图片地址
     *
     * @return b_url - 图片地址
     */
    public String getbUrl() {
        return bUrl;
    }

    /**
     * 设置图片地址
     *
     * @param bUrl 图片地址
     */
    public void setbUrl(String bUrl) {
        this.bUrl = bUrl == null ? null : bUrl.trim();
    }

    /**
     * 获取类型
     *
     * @return b_type - 类型
     */
    public String getbType() {
        return bType;
    }

    /**
     * 设置类型
     *
     * @param bType 类型
     */
    public void setbType(String bType) {
        this.bType = bType == null ? null : bType.trim();
    }

    /**
     * 获取价格
     *
     * @return b_price - 价格
     */
    public BigDecimal getbPrice() {
        return bPrice;
    }

    /**
     * 设置价格
     *
     * @param bPrice 价格
     */
    public void setbPrice(BigDecimal bPrice) {
        this.bPrice = bPrice;
    }

    /**
     * @return b_create_time
     */
    public Date getbCreateTime() {
        return bCreateTime;
    }

    /**
     * @param bCreateTime
     */
    public void setbCreateTime(Date bCreateTime) {
        this.bCreateTime = bCreateTime;
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
        Business other = (Business) that;
        return (this.getbId() == null ? other.getbId() == null : this.getbId().equals(other.getbId()))
            && (this.getbTodaycommend() == null ? other.getbTodaycommend() == null : this.getbTodaycommend().equals(other.getbTodaycommend()))
            && (this.getbName() == null ? other.getbName() == null : this.getbName().equals(other.getbName()))
            && (this.getbRemark() == null ? other.getbRemark() == null : this.getbRemark().equals(other.getbRemark()))
            && (this.getbUrl() == null ? other.getbUrl() == null : this.getbUrl().equals(other.getbUrl()))
            && (this.getbType() == null ? other.getbType() == null : this.getbType().equals(other.getbType()))
            && (this.getbPrice() == null ? other.getbPrice() == null : this.getbPrice().equals(other.getbPrice()))
            && (this.getbCreateTime() == null ? other.getbCreateTime() == null : this.getbCreateTime().equals(other.getbCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getbId() == null) ? 0 : getbId().hashCode());
        result = prime * result + ((getbTodaycommend() == null) ? 0 : getbTodaycommend().hashCode());
        result = prime * result + ((getbName() == null) ? 0 : getbName().hashCode());
        result = prime * result + ((getbRemark() == null) ? 0 : getbRemark().hashCode());
        result = prime * result + ((getbUrl() == null) ? 0 : getbUrl().hashCode());
        result = prime * result + ((getbType() == null) ? 0 : getbType().hashCode());
        result = prime * result + ((getbPrice() == null) ? 0 : getbPrice().hashCode());
        result = prime * result + ((getbCreateTime() == null) ? 0 : getbCreateTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", bId=").append(bId);
        sb.append(", bTodaycommend=").append(bTodaycommend);
        sb.append(", bName=").append(bName);
        sb.append(", bRemark=").append(bRemark);
        sb.append(", bUrl=").append(bUrl);
        sb.append(", bType=").append(bType);
        sb.append(", bPrice=").append(bPrice);
        sb.append(", bCreateTime=").append(bCreateTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}