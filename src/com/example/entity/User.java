package com.example.entity;

import java.io.Serializable;
import java.util.Date;


public class User implements Serializable {

    private Integer uId;


    private String uName;


    private String uType;


    private String uPassword;


    private Date uCreateTime;

    private static final long serialVersionUID = 1L;

    /**
     * @return u_id
     */
    public Integer getuId() {
        return uId;
    }

    /**
     * @param uId
     */
    public void setuId(Integer uId) {
        this.uId = uId;
    }

    /**
     * @return u_name
     */
    public String getuName() {
        return uName;
    }

    /**
     * @param uName
     */
    public void setuName(String uName) {
        this.uName = uName == null ? null : uName.trim();
    }

    /**
     * @return u_type
     */
    public String getuType() {
        return uType;
    }

    /**
     * @param uType
     */
    public void setuType(String uType) {
        this.uType = uType == null ? null : uType.trim();
    }

    /**
     * @return u_password
     */
    public String getuPassword() {
        return uPassword;
    }

    /**
     * @param uPassword
     */
    public void setuPassword(String uPassword) {
        this.uPassword = uPassword == null ? null : uPassword.trim();
    }

    /**
     * @return u_create_time
     */
    public Date getuCreateTime() {
        return uCreateTime;
    }

    /**
     * @param uCreateTime
     */
    public void setuCreateTime(Date uCreateTime) {
        this.uCreateTime = uCreateTime;
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
        User other = (User) that;
        return (this.getuId() == null ? other.getuId() == null : this.getuId().equals(other.getuId()))
            && (this.getuName() == null ? other.getuName() == null : this.getuName().equals(other.getuName()))
            && (this.getuType() == null ? other.getuType() == null : this.getuType().equals(other.getuType()))
            && (this.getuPassword() == null ? other.getuPassword() == null : this.getuPassword().equals(other.getuPassword()))
            && (this.getuCreateTime() == null ? other.getuCreateTime() == null : this.getuCreateTime().equals(other.getuCreateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getuId() == null) ? 0 : getuId().hashCode());
        result = prime * result + ((getuName() == null) ? 0 : getuName().hashCode());
        result = prime * result + ((getuType() == null) ? 0 : getuType().hashCode());
        result = prime * result + ((getuPassword() == null) ? 0 : getuPassword().hashCode());
        result = prime * result + ((getuCreateTime() == null) ? 0 : getuCreateTime().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", uId=").append(uId);
        sb.append(", uName=").append(uName);
        sb.append(", uType=").append(uType);
        sb.append(", uPassword=").append(uPassword);
        sb.append(", uCreateTime=").append(uCreateTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}