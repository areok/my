package com.example.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BusinessExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BusinessExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andBIdIsNull() {
            addCriterion("b_id is null");
            return (Criteria) this;
        }

        public Criteria andBIdIsNotNull() {
            addCriterion("b_id is not null");
            return (Criteria) this;
        }

        public Criteria andBIdEqualTo(Integer value) {
            addCriterion("b_id =", value, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdNotEqualTo(Integer value) {
            addCriterion("b_id <>", value, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdGreaterThan(Integer value) {
            addCriterion("b_id >", value, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("b_id >=", value, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdLessThan(Integer value) {
            addCriterion("b_id <", value, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdLessThanOrEqualTo(Integer value) {
            addCriterion("b_id <=", value, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdIn(List<Integer> values) {
            addCriterion("b_id in", values, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdNotIn(List<Integer> values) {
            addCriterion("b_id not in", values, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdBetween(Integer value1, Integer value2) {
            addCriterion("b_id between", value1, value2, "bId");
            return (Criteria) this;
        }

        public Criteria andBIdNotBetween(Integer value1, Integer value2) {
            addCriterion("b_id not between", value1, value2, "bId");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendIsNull() {
            addCriterion("b_todaycommend is null");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendIsNotNull() {
            addCriterion("b_todaycommend is not null");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendEqualTo(String value) {
            addCriterion("b_todaycommend =", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendNotEqualTo(String value) {
            addCriterion("b_todaycommend <>", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendGreaterThan(String value) {
            addCriterion("b_todaycommend >", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendGreaterThanOrEqualTo(String value) {
            addCriterion("b_todaycommend >=", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendLessThan(String value) {
            addCriterion("b_todaycommend <", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendLessThanOrEqualTo(String value) {
            addCriterion("b_todaycommend <=", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendLike(String value) {
            addCriterion("b_todaycommend like", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendNotLike(String value) {
            addCriterion("b_todaycommend not like", value, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendIn(List<String> values) {
            addCriterion("b_todaycommend in", values, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendNotIn(List<String> values) {
            addCriterion("b_todaycommend not in", values, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendBetween(String value1, String value2) {
            addCriterion("b_todaycommend between", value1, value2, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendNotBetween(String value1, String value2) {
            addCriterion("b_todaycommend not between", value1, value2, "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBNameIsNull() {
            addCriterion("b_name is null");
            return (Criteria) this;
        }

        public Criteria andBNameIsNotNull() {
            addCriterion("b_name is not null");
            return (Criteria) this;
        }

        public Criteria andBNameEqualTo(String value) {
            addCriterion("b_name =", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameNotEqualTo(String value) {
            addCriterion("b_name <>", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameGreaterThan(String value) {
            addCriterion("b_name >", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameGreaterThanOrEqualTo(String value) {
            addCriterion("b_name >=", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameLessThan(String value) {
            addCriterion("b_name <", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameLessThanOrEqualTo(String value) {
            addCriterion("b_name <=", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameLike(String value) {
            addCriterion("b_name like", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameNotLike(String value) {
            addCriterion("b_name not like", value, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameIn(List<String> values) {
            addCriterion("b_name in", values, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameNotIn(List<String> values) {
            addCriterion("b_name not in", values, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameBetween(String value1, String value2) {
            addCriterion("b_name between", value1, value2, "bName");
            return (Criteria) this;
        }

        public Criteria andBNameNotBetween(String value1, String value2) {
            addCriterion("b_name not between", value1, value2, "bName");
            return (Criteria) this;
        }

        public Criteria andBRemarkIsNull() {
            addCriterion("b_remark is null");
            return (Criteria) this;
        }

        public Criteria andBRemarkIsNotNull() {
            addCriterion("b_remark is not null");
            return (Criteria) this;
        }

        public Criteria andBRemarkEqualTo(String value) {
            addCriterion("b_remark =", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkNotEqualTo(String value) {
            addCriterion("b_remark <>", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkGreaterThan(String value) {
            addCriterion("b_remark >", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkGreaterThanOrEqualTo(String value) {
            addCriterion("b_remark >=", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkLessThan(String value) {
            addCriterion("b_remark <", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkLessThanOrEqualTo(String value) {
            addCriterion("b_remark <=", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkLike(String value) {
            addCriterion("b_remark like", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkNotLike(String value) {
            addCriterion("b_remark not like", value, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkIn(List<String> values) {
            addCriterion("b_remark in", values, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkNotIn(List<String> values) {
            addCriterion("b_remark not in", values, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkBetween(String value1, String value2) {
            addCriterion("b_remark between", value1, value2, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBRemarkNotBetween(String value1, String value2) {
            addCriterion("b_remark not between", value1, value2, "bRemark");
            return (Criteria) this;
        }

        public Criteria andBUrlIsNull() {
            addCriterion("b_url is null");
            return (Criteria) this;
        }

        public Criteria andBUrlIsNotNull() {
            addCriterion("b_url is not null");
            return (Criteria) this;
        }

        public Criteria andBUrlEqualTo(String value) {
            addCriterion("b_url =", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlNotEqualTo(String value) {
            addCriterion("b_url <>", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlGreaterThan(String value) {
            addCriterion("b_url >", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlGreaterThanOrEqualTo(String value) {
            addCriterion("b_url >=", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlLessThan(String value) {
            addCriterion("b_url <", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlLessThanOrEqualTo(String value) {
            addCriterion("b_url <=", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlLike(String value) {
            addCriterion("b_url like", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlNotLike(String value) {
            addCriterion("b_url not like", value, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlIn(List<String> values) {
            addCriterion("b_url in", values, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlNotIn(List<String> values) {
            addCriterion("b_url not in", values, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlBetween(String value1, String value2) {
            addCriterion("b_url between", value1, value2, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBUrlNotBetween(String value1, String value2) {
            addCriterion("b_url not between", value1, value2, "bUrl");
            return (Criteria) this;
        }

        public Criteria andBTypeIsNull() {
            addCriterion("b_type is null");
            return (Criteria) this;
        }

        public Criteria andBTypeIsNotNull() {
            addCriterion("b_type is not null");
            return (Criteria) this;
        }

        public Criteria andBTypeEqualTo(String value) {
            addCriterion("b_type =", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeNotEqualTo(String value) {
            addCriterion("b_type <>", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeGreaterThan(String value) {
            addCriterion("b_type >", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeGreaterThanOrEqualTo(String value) {
            addCriterion("b_type >=", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeLessThan(String value) {
            addCriterion("b_type <", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeLessThanOrEqualTo(String value) {
            addCriterion("b_type <=", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeLike(String value) {
            addCriterion("b_type like", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeNotLike(String value) {
            addCriterion("b_type not like", value, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeIn(List<String> values) {
            addCriterion("b_type in", values, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeNotIn(List<String> values) {
            addCriterion("b_type not in", values, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeBetween(String value1, String value2) {
            addCriterion("b_type between", value1, value2, "bType");
            return (Criteria) this;
        }

        public Criteria andBTypeNotBetween(String value1, String value2) {
            addCriterion("b_type not between", value1, value2, "bType");
            return (Criteria) this;
        }

        public Criteria andBPriceIsNull() {
            addCriterion("b_price is null");
            return (Criteria) this;
        }

        public Criteria andBPriceIsNotNull() {
            addCriterion("b_price is not null");
            return (Criteria) this;
        }

        public Criteria andBPriceEqualTo(BigDecimal value) {
            addCriterion("b_price =", value, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceNotEqualTo(BigDecimal value) {
            addCriterion("b_price <>", value, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceGreaterThan(BigDecimal value) {
            addCriterion("b_price >", value, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("b_price >=", value, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceLessThan(BigDecimal value) {
            addCriterion("b_price <", value, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceLessThanOrEqualTo(BigDecimal value) {
            addCriterion("b_price <=", value, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceIn(List<BigDecimal> values) {
            addCriterion("b_price in", values, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceNotIn(List<BigDecimal> values) {
            addCriterion("b_price not in", values, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("b_price between", value1, value2, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBPriceNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("b_price not between", value1, value2, "bPrice");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeIsNull() {
            addCriterion("b_create_time is null");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeIsNotNull() {
            addCriterion("b_create_time is not null");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeEqualTo(Date value) {
            addCriterion("b_create_time =", value, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeNotEqualTo(Date value) {
            addCriterion("b_create_time <>", value, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeGreaterThan(Date value) {
            addCriterion("b_create_time >", value, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("b_create_time >=", value, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeLessThan(Date value) {
            addCriterion("b_create_time <", value, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("b_create_time <=", value, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeIn(List<Date> values) {
            addCriterion("b_create_time in", values, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeNotIn(List<Date> values) {
            addCriterion("b_create_time not in", values, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeBetween(Date value1, Date value2) {
            addCriterion("b_create_time between", value1, value2, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("b_create_time not between", value1, value2, "bCreateTime");
            return (Criteria) this;
        }

        public Criteria andBTodaycommendLikeInsensitive(String value) {
            addCriterion("upper(b_todaycommend) like", value.toUpperCase(), "bTodaycommend");
            return (Criteria) this;
        }

        public Criteria andBNameLikeInsensitive(String value) {
            addCriterion("upper(b_name) like", value.toUpperCase(), "bName");
            return (Criteria) this;
        }

        public Criteria andBRemarkLikeInsensitive(String value) {
            addCriterion("upper(b_remark) like", value.toUpperCase(), "bRemark");
            return (Criteria) this;
        }

        public Criteria andBUrlLikeInsensitive(String value) {
            addCriterion("upper(b_url) like", value.toUpperCase(), "bUrl");
            return (Criteria) this;
        }

        public Criteria andBTypeLikeInsensitive(String value) {
            addCriterion("upper(b_type) like", value.toUpperCase(), "bType");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}