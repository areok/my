package com.demo.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

@Table(name = "my_group")
public class Group implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 组命称
     */
    @Column(name = "group_name")
    private String groupName;

    /**
     * 组成员数目
     */
    @Column(name = "group_num")
    private Long groupNum;

    private static final long serialVersionUID = 1L;


    /**
     * @return id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * 获取组命称
     *
     * @return group_name - 组命称
     */
    public String getGroupName() {
        return groupName;
    }

    /**
     * 设置组命称
     *
     * @param groupName 组命称
     */
    public void setGroupName(String groupName) {
        this.groupName = groupName == null ? null : groupName.trim();
    }

    /**
     * 获取组成员数目
     *
     * @return group_num - 组成员数目
     */
    public Long getGroupNum() {
        return groupNum;
    }

    /**
     * 设置组成员数目
     *
     * @param groupNum 组成员数目
     */
    public void setGroupNum(Long groupNum) {
        this.groupNum = groupNum;
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
        Group other = (Group) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getGroupName() == null ? other.getGroupName() == null : this.getGroupName().equals(other.getGroupName()))
            && (this.getGroupNum() == null ? other.getGroupNum() == null : this.getGroupNum().equals(other.getGroupNum()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getGroupName() == null) ? 0 : getGroupName().hashCode());
        result = prime * result + ((getGroupNum() == null) ? 0 : getGroupNum().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", groupName=").append(groupName);
        sb.append(", groupNum=").append(groupNum);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }

}