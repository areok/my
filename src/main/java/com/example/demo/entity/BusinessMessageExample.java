package com.example.demo.entity;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BusinessMessageExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public BusinessMessageExample() {
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

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("id like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("id not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andBussNoIsNull() {
            addCriterion("buss_no is null");
            return (Criteria) this;
        }

        public Criteria andBussNoIsNotNull() {
            addCriterion("buss_no is not null");
            return (Criteria) this;
        }

        public Criteria andBussNoEqualTo(String value) {
            addCriterion("buss_no =", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoNotEqualTo(String value) {
            addCriterion("buss_no <>", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoGreaterThan(String value) {
            addCriterion("buss_no >", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoGreaterThanOrEqualTo(String value) {
            addCriterion("buss_no >=", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoLessThan(String value) {
            addCriterion("buss_no <", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoLessThanOrEqualTo(String value) {
            addCriterion("buss_no <=", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoLike(String value) {
            addCriterion("buss_no like", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoNotLike(String value) {
            addCriterion("buss_no not like", value, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoIn(List<String> values) {
            addCriterion("buss_no in", values, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoNotIn(List<String> values) {
            addCriterion("buss_no not in", values, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoBetween(String value1, String value2) {
            addCriterion("buss_no between", value1, value2, "bussNo");
            return (Criteria) this;
        }

        public Criteria andBussNoNotBetween(String value1, String value2) {
            addCriterion("buss_no not between", value1, value2, "bussNo");
            return (Criteria) this;
        }

        public Criteria andGuaIdIsNull() {
            addCriterion("gua_id is null");
            return (Criteria) this;
        }

        public Criteria andGuaIdIsNotNull() {
            addCriterion("gua_id is not null");
            return (Criteria) this;
        }

        public Criteria andGuaIdEqualTo(String value) {
            addCriterion("gua_id =", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdNotEqualTo(String value) {
            addCriterion("gua_id <>", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdGreaterThan(String value) {
            addCriterion("gua_id >", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdGreaterThanOrEqualTo(String value) {
            addCriterion("gua_id >=", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdLessThan(String value) {
            addCriterion("gua_id <", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdLessThanOrEqualTo(String value) {
            addCriterion("gua_id <=", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdLike(String value) {
            addCriterion("gua_id like", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdNotLike(String value) {
            addCriterion("gua_id not like", value, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdIn(List<String> values) {
            addCriterion("gua_id in", values, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdNotIn(List<String> values) {
            addCriterion("gua_id not in", values, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdBetween(String value1, String value2) {
            addCriterion("gua_id between", value1, value2, "guaId");
            return (Criteria) this;
        }

        public Criteria andGuaIdNotBetween(String value1, String value2) {
            addCriterion("gua_id not between", value1, value2, "guaId");
            return (Criteria) this;
        }

        public Criteria andChanManIdIsNull() {
            addCriterion("chan_man_id is null");
            return (Criteria) this;
        }

        public Criteria andChanManIdIsNotNull() {
            addCriterion("chan_man_id is not null");
            return (Criteria) this;
        }

        public Criteria andChanManIdEqualTo(String value) {
            addCriterion("chan_man_id =", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdNotEqualTo(String value) {
            addCriterion("chan_man_id <>", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdGreaterThan(String value) {
            addCriterion("chan_man_id >", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdGreaterThanOrEqualTo(String value) {
            addCriterion("chan_man_id >=", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdLessThan(String value) {
            addCriterion("chan_man_id <", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdLessThanOrEqualTo(String value) {
            addCriterion("chan_man_id <=", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdLike(String value) {
            addCriterion("chan_man_id like", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdNotLike(String value) {
            addCriterion("chan_man_id not like", value, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdIn(List<String> values) {
            addCriterion("chan_man_id in", values, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdNotIn(List<String> values) {
            addCriterion("chan_man_id not in", values, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdBetween(String value1, String value2) {
            addCriterion("chan_man_id between", value1, value2, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChanManIdNotBetween(String value1, String value2) {
            addCriterion("chan_man_id not between", value1, value2, "chanManId");
            return (Criteria) this;
        }

        public Criteria andChannelNoIsNull() {
            addCriterion("channel_no is null");
            return (Criteria) this;
        }

        public Criteria andChannelNoIsNotNull() {
            addCriterion("channel_no is not null");
            return (Criteria) this;
        }

        public Criteria andChannelNoEqualTo(String value) {
            addCriterion("channel_no =", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoNotEqualTo(String value) {
            addCriterion("channel_no <>", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoGreaterThan(String value) {
            addCriterion("channel_no >", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoGreaterThanOrEqualTo(String value) {
            addCriterion("channel_no >=", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoLessThan(String value) {
            addCriterion("channel_no <", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoLessThanOrEqualTo(String value) {
            addCriterion("channel_no <=", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoLike(String value) {
            addCriterion("channel_no like", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoNotLike(String value) {
            addCriterion("channel_no not like", value, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoIn(List<String> values) {
            addCriterion("channel_no in", values, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoNotIn(List<String> values) {
            addCriterion("channel_no not in", values, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoBetween(String value1, String value2) {
            addCriterion("channel_no between", value1, value2, "channelNo");
            return (Criteria) this;
        }

        public Criteria andChannelNoNotBetween(String value1, String value2) {
            addCriterion("channel_no not between", value1, value2, "channelNo");
            return (Criteria) this;
        }

        public Criteria andCreatCnoIsNull() {
            addCriterion("creat_cno is null");
            return (Criteria) this;
        }

        public Criteria andCreatCnoIsNotNull() {
            addCriterion("creat_cno is not null");
            return (Criteria) this;
        }

        public Criteria andCreatCnoEqualTo(String value) {
            addCriterion("creat_cno =", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoNotEqualTo(String value) {
            addCriterion("creat_cno <>", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoGreaterThan(String value) {
            addCriterion("creat_cno >", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoGreaterThanOrEqualTo(String value) {
            addCriterion("creat_cno >=", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoLessThan(String value) {
            addCriterion("creat_cno <", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoLessThanOrEqualTo(String value) {
            addCriterion("creat_cno <=", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoLike(String value) {
            addCriterion("creat_cno like", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoNotLike(String value) {
            addCriterion("creat_cno not like", value, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoIn(List<String> values) {
            addCriterion("creat_cno in", values, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoNotIn(List<String> values) {
            addCriterion("creat_cno not in", values, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoBetween(String value1, String value2) {
            addCriterion("creat_cno between", value1, value2, "creatCno");
            return (Criteria) this;
        }

        public Criteria andCreatCnoNotBetween(String value1, String value2) {
            addCriterion("creat_cno not between", value1, value2, "creatCno");
            return (Criteria) this;
        }

        public Criteria andMainCidIsNull() {
            addCriterion("main_cid is null");
            return (Criteria) this;
        }

        public Criteria andMainCidIsNotNull() {
            addCriterion("main_cid is not null");
            return (Criteria) this;
        }

        public Criteria andMainCidEqualTo(String value) {
            addCriterion("main_cid =", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidNotEqualTo(String value) {
            addCriterion("main_cid <>", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidGreaterThan(String value) {
            addCriterion("main_cid >", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidGreaterThanOrEqualTo(String value) {
            addCriterion("main_cid >=", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidLessThan(String value) {
            addCriterion("main_cid <", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidLessThanOrEqualTo(String value) {
            addCriterion("main_cid <=", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidLike(String value) {
            addCriterion("main_cid like", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidNotLike(String value) {
            addCriterion("main_cid not like", value, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidIn(List<String> values) {
            addCriterion("main_cid in", values, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidNotIn(List<String> values) {
            addCriterion("main_cid not in", values, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidBetween(String value1, String value2) {
            addCriterion("main_cid between", value1, value2, "mainCid");
            return (Criteria) this;
        }

        public Criteria andMainCidNotBetween(String value1, String value2) {
            addCriterion("main_cid not between", value1, value2, "mainCid");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("`status` is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("`status` is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(String value) {
            addCriterion("`status` =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(String value) {
            addCriterion("`status` <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(String value) {
            addCriterion("`status` >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(String value) {
            addCriterion("`status` >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(String value) {
            addCriterion("`status` <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(String value) {
            addCriterion("`status` <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLike(String value) {
            addCriterion("`status` like", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotLike(String value) {
            addCriterion("`status` not like", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<String> values) {
            addCriterion("`status` in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<String> values) {
            addCriterion("`status` not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(String value1, String value2) {
            addCriterion("`status` between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(String value1, String value2) {
            addCriterion("`status` not between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andChanManNameIsNull() {
            addCriterion("chan_man_name is null");
            return (Criteria) this;
        }

        public Criteria andChanManNameIsNotNull() {
            addCriterion("chan_man_name is not null");
            return (Criteria) this;
        }

        public Criteria andChanManNameEqualTo(String value) {
            addCriterion("chan_man_name =", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameNotEqualTo(String value) {
            addCriterion("chan_man_name <>", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameGreaterThan(String value) {
            addCriterion("chan_man_name >", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameGreaterThanOrEqualTo(String value) {
            addCriterion("chan_man_name >=", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameLessThan(String value) {
            addCriterion("chan_man_name <", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameLessThanOrEqualTo(String value) {
            addCriterion("chan_man_name <=", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameLike(String value) {
            addCriterion("chan_man_name like", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameNotLike(String value) {
            addCriterion("chan_man_name not like", value, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameIn(List<String> values) {
            addCriterion("chan_man_name in", values, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameNotIn(List<String> values) {
            addCriterion("chan_man_name not in", values, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameBetween(String value1, String value2) {
            addCriterion("chan_man_name between", value1, value2, "chanManName");
            return (Criteria) this;
        }

        public Criteria andChanManNameNotBetween(String value1, String value2) {
            addCriterion("chan_man_name not between", value1, value2, "chanManName");
            return (Criteria) this;
        }

        public Criteria andLoanAmountIsNull() {
            addCriterion("loan_amount is null");
            return (Criteria) this;
        }

        public Criteria andLoanAmountIsNotNull() {
            addCriterion("loan_amount is not null");
            return (Criteria) this;
        }

        public Criteria andLoanAmountEqualTo(String value) {
            addCriterion("loan_amount =", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountNotEqualTo(String value) {
            addCriterion("loan_amount <>", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountGreaterThan(String value) {
            addCriterion("loan_amount >", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountGreaterThanOrEqualTo(String value) {
            addCriterion("loan_amount >=", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountLessThan(String value) {
            addCriterion("loan_amount <", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountLessThanOrEqualTo(String value) {
            addCriterion("loan_amount <=", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountLike(String value) {
            addCriterion("loan_amount like", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountNotLike(String value) {
            addCriterion("loan_amount not like", value, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountIn(List<String> values) {
            addCriterion("loan_amount in", values, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountNotIn(List<String> values) {
            addCriterion("loan_amount not in", values, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountBetween(String value1, String value2) {
            addCriterion("loan_amount between", value1, value2, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andLoanAmountNotBetween(String value1, String value2) {
            addCriterion("loan_amount not between", value1, value2, "loanAmount");
            return (Criteria) this;
        }

        public Criteria andDeadlineIsNull() {
            addCriterion("deadline is null");
            return (Criteria) this;
        }

        public Criteria andDeadlineIsNotNull() {
            addCriterion("deadline is not null");
            return (Criteria) this;
        }

        public Criteria andDeadlineEqualTo(String value) {
            addCriterion("deadline =", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineNotEqualTo(String value) {
            addCriterion("deadline <>", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineGreaterThan(String value) {
            addCriterion("deadline >", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineGreaterThanOrEqualTo(String value) {
            addCriterion("deadline >=", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineLessThan(String value) {
            addCriterion("deadline <", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineLessThanOrEqualTo(String value) {
            addCriterion("deadline <=", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineLike(String value) {
            addCriterion("deadline like", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineNotLike(String value) {
            addCriterion("deadline not like", value, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineIn(List<String> values) {
            addCriterion("deadline in", values, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineNotIn(List<String> values) {
            addCriterion("deadline not in", values, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineBetween(String value1, String value2) {
            addCriterion("deadline between", value1, value2, "deadline");
            return (Criteria) this;
        }

        public Criteria andDeadlineNotBetween(String value1, String value2) {
            addCriterion("deadline not between", value1, value2, "deadline");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayIsNull() {
            addCriterion("guaranty_way is null");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayIsNotNull() {
            addCriterion("guaranty_way is not null");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayEqualTo(String value) {
            addCriterion("guaranty_way =", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayNotEqualTo(String value) {
            addCriterion("guaranty_way <>", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayGreaterThan(String value) {
            addCriterion("guaranty_way >", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayGreaterThanOrEqualTo(String value) {
            addCriterion("guaranty_way >=", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayLessThan(String value) {
            addCriterion("guaranty_way <", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayLessThanOrEqualTo(String value) {
            addCriterion("guaranty_way <=", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayLike(String value) {
            addCriterion("guaranty_way like", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayNotLike(String value) {
            addCriterion("guaranty_way not like", value, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayIn(List<String> values) {
            addCriterion("guaranty_way in", values, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayNotIn(List<String> values) {
            addCriterion("guaranty_way not in", values, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayBetween(String value1, String value2) {
            addCriterion("guaranty_way between", value1, value2, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayNotBetween(String value1, String value2) {
            addCriterion("guaranty_way not between", value1, value2, "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayIsNull() {
            addCriterion("repay_way is null");
            return (Criteria) this;
        }

        public Criteria andRepayWayIsNotNull() {
            addCriterion("repay_way is not null");
            return (Criteria) this;
        }

        public Criteria andRepayWayEqualTo(String value) {
            addCriterion("repay_way =", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayNotEqualTo(String value) {
            addCriterion("repay_way <>", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayGreaterThan(String value) {
            addCriterion("repay_way >", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayGreaterThanOrEqualTo(String value) {
            addCriterion("repay_way >=", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayLessThan(String value) {
            addCriterion("repay_way <", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayLessThanOrEqualTo(String value) {
            addCriterion("repay_way <=", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayLike(String value) {
            addCriterion("repay_way like", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayNotLike(String value) {
            addCriterion("repay_way not like", value, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayIn(List<String> values) {
            addCriterion("repay_way in", values, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayNotIn(List<String> values) {
            addCriterion("repay_way not in", values, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayBetween(String value1, String value2) {
            addCriterion("repay_way between", value1, value2, "repayWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayNotBetween(String value1, String value2) {
            addCriterion("repay_way not between", value1, value2, "repayWay");
            return (Criteria) this;
        }

        public Criteria andInterestRateIsNull() {
            addCriterion("interest_rate is null");
            return (Criteria) this;
        }

        public Criteria andInterestRateIsNotNull() {
            addCriterion("interest_rate is not null");
            return (Criteria) this;
        }

        public Criteria andInterestRateEqualTo(String value) {
            addCriterion("interest_rate =", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateNotEqualTo(String value) {
            addCriterion("interest_rate <>", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateGreaterThan(String value) {
            addCriterion("interest_rate >", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateGreaterThanOrEqualTo(String value) {
            addCriterion("interest_rate >=", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateLessThan(String value) {
            addCriterion("interest_rate <", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateLessThanOrEqualTo(String value) {
            addCriterion("interest_rate <=", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateLike(String value) {
            addCriterion("interest_rate like", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateNotLike(String value) {
            addCriterion("interest_rate not like", value, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateIn(List<String> values) {
            addCriterion("interest_rate in", values, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateNotIn(List<String> values) {
            addCriterion("interest_rate not in", values, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateBetween(String value1, String value2) {
            addCriterion("interest_rate between", value1, value2, "interestRate");
            return (Criteria) this;
        }

        public Criteria andInterestRateNotBetween(String value1, String value2) {
            addCriterion("interest_rate not between", value1, value2, "interestRate");
            return (Criteria) this;
        }

        public Criteria andTermUnitIsNull() {
            addCriterion("term_unit is null");
            return (Criteria) this;
        }

        public Criteria andTermUnitIsNotNull() {
            addCriterion("term_unit is not null");
            return (Criteria) this;
        }

        public Criteria andTermUnitEqualTo(String value) {
            addCriterion("term_unit =", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitNotEqualTo(String value) {
            addCriterion("term_unit <>", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitGreaterThan(String value) {
            addCriterion("term_unit >", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitGreaterThanOrEqualTo(String value) {
            addCriterion("term_unit >=", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitLessThan(String value) {
            addCriterion("term_unit <", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitLessThanOrEqualTo(String value) {
            addCriterion("term_unit <=", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitLike(String value) {
            addCriterion("term_unit like", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitNotLike(String value) {
            addCriterion("term_unit not like", value, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitIn(List<String> values) {
            addCriterion("term_unit in", values, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitNotIn(List<String> values) {
            addCriterion("term_unit not in", values, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitBetween(String value1, String value2) {
            addCriterion("term_unit between", value1, value2, "termUnit");
            return (Criteria) this;
        }

        public Criteria andTermUnitNotBetween(String value1, String value2) {
            addCriterion("term_unit not between", value1, value2, "termUnit");
            return (Criteria) this;
        }

        public Criteria andLoanUseIsNull() {
            addCriterion("loan_use is null");
            return (Criteria) this;
        }

        public Criteria andLoanUseIsNotNull() {
            addCriterion("loan_use is not null");
            return (Criteria) this;
        }

        public Criteria andLoanUseEqualTo(String value) {
            addCriterion("loan_use =", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseNotEqualTo(String value) {
            addCriterion("loan_use <>", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseGreaterThan(String value) {
            addCriterion("loan_use >", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseGreaterThanOrEqualTo(String value) {
            addCriterion("loan_use >=", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseLessThan(String value) {
            addCriterion("loan_use <", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseLessThanOrEqualTo(String value) {
            addCriterion("loan_use <=", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseLike(String value) {
            addCriterion("loan_use like", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseNotLike(String value) {
            addCriterion("loan_use not like", value, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseIn(List<String> values) {
            addCriterion("loan_use in", values, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseNotIn(List<String> values) {
            addCriterion("loan_use not in", values, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseBetween(String value1, String value2) {
            addCriterion("loan_use between", value1, value2, "loanUse");
            return (Criteria) this;
        }

        public Criteria andLoanUseNotBetween(String value1, String value2) {
            addCriterion("loan_use not between", value1, value2, "loanUse");
            return (Criteria) this;
        }

        public Criteria andOpStatusIsNull() {
            addCriterion("op_status is null");
            return (Criteria) this;
        }

        public Criteria andOpStatusIsNotNull() {
            addCriterion("op_status is not null");
            return (Criteria) this;
        }

        public Criteria andOpStatusEqualTo(String value) {
            addCriterion("op_status =", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusNotEqualTo(String value) {
            addCriterion("op_status <>", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusGreaterThan(String value) {
            addCriterion("op_status >", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusGreaterThanOrEqualTo(String value) {
            addCriterion("op_status >=", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusLessThan(String value) {
            addCriterion("op_status <", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusLessThanOrEqualTo(String value) {
            addCriterion("op_status <=", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusLike(String value) {
            addCriterion("op_status like", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusNotLike(String value) {
            addCriterion("op_status not like", value, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusIn(List<String> values) {
            addCriterion("op_status in", values, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusNotIn(List<String> values) {
            addCriterion("op_status not in", values, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusBetween(String value1, String value2) {
            addCriterion("op_status between", value1, value2, "opStatus");
            return (Criteria) this;
        }

        public Criteria andOpStatusNotBetween(String value1, String value2) {
            addCriterion("op_status not between", value1, value2, "opStatus");
            return (Criteria) this;
        }

        public Criteria andLoanTypeIsNull() {
            addCriterion("loan_type is null");
            return (Criteria) this;
        }

        public Criteria andLoanTypeIsNotNull() {
            addCriterion("loan_type is not null");
            return (Criteria) this;
        }

        public Criteria andLoanTypeEqualTo(String value) {
            addCriterion("loan_type =", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeNotEqualTo(String value) {
            addCriterion("loan_type <>", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeGreaterThan(String value) {
            addCriterion("loan_type >", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeGreaterThanOrEqualTo(String value) {
            addCriterion("loan_type >=", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeLessThan(String value) {
            addCriterion("loan_type <", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeLessThanOrEqualTo(String value) {
            addCriterion("loan_type <=", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeLike(String value) {
            addCriterion("loan_type like", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeNotLike(String value) {
            addCriterion("loan_type not like", value, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeIn(List<String> values) {
            addCriterion("loan_type in", values, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeNotIn(List<String> values) {
            addCriterion("loan_type not in", values, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeBetween(String value1, String value2) {
            addCriterion("loan_type between", value1, value2, "loanType");
            return (Criteria) this;
        }

        public Criteria andLoanTypeNotBetween(String value1, String value2) {
            addCriterion("loan_type not between", value1, value2, "loanType");
            return (Criteria) this;
        }

        public Criteria andClientFromIsNull() {
            addCriterion("client_from is null");
            return (Criteria) this;
        }

        public Criteria andClientFromIsNotNull() {
            addCriterion("client_from is not null");
            return (Criteria) this;
        }

        public Criteria andClientFromEqualTo(String value) {
            addCriterion("client_from =", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromNotEqualTo(String value) {
            addCriterion("client_from <>", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromGreaterThan(String value) {
            addCriterion("client_from >", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromGreaterThanOrEqualTo(String value) {
            addCriterion("client_from >=", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromLessThan(String value) {
            addCriterion("client_from <", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromLessThanOrEqualTo(String value) {
            addCriterion("client_from <=", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromLike(String value) {
            addCriterion("client_from like", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromNotLike(String value) {
            addCriterion("client_from not like", value, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromIn(List<String> values) {
            addCriterion("client_from in", values, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromNotIn(List<String> values) {
            addCriterion("client_from not in", values, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromBetween(String value1, String value2) {
            addCriterion("client_from between", value1, value2, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andClientFromNotBetween(String value1, String value2) {
            addCriterion("client_from not between", value1, value2, "clientFrom");
            return (Criteria) this;
        }

        public Criteria andChanManNoIsNull() {
            addCriterion("chan_man_no is null");
            return (Criteria) this;
        }

        public Criteria andChanManNoIsNotNull() {
            addCriterion("chan_man_no is not null");
            return (Criteria) this;
        }

        public Criteria andChanManNoEqualTo(String value) {
            addCriterion("chan_man_no =", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoNotEqualTo(String value) {
            addCriterion("chan_man_no <>", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoGreaterThan(String value) {
            addCriterion("chan_man_no >", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoGreaterThanOrEqualTo(String value) {
            addCriterion("chan_man_no >=", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoLessThan(String value) {
            addCriterion("chan_man_no <", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoLessThanOrEqualTo(String value) {
            addCriterion("chan_man_no <=", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoLike(String value) {
            addCriterion("chan_man_no like", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoNotLike(String value) {
            addCriterion("chan_man_no not like", value, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoIn(List<String> values) {
            addCriterion("chan_man_no in", values, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoNotIn(List<String> values) {
            addCriterion("chan_man_no not in", values, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoBetween(String value1, String value2) {
            addCriterion("chan_man_no between", value1, value2, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andChanManNoNotBetween(String value1, String value2) {
            addCriterion("chan_man_no not between", value1, value2, "chanManNo");
            return (Criteria) this;
        }

        public Criteria andBrokersIdIsNull() {
            addCriterion("brokers_id is null");
            return (Criteria) this;
        }

        public Criteria andBrokersIdIsNotNull() {
            addCriterion("brokers_id is not null");
            return (Criteria) this;
        }

        public Criteria andBrokersIdEqualTo(String value) {
            addCriterion("brokers_id =", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdNotEqualTo(String value) {
            addCriterion("brokers_id <>", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdGreaterThan(String value) {
            addCriterion("brokers_id >", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdGreaterThanOrEqualTo(String value) {
            addCriterion("brokers_id >=", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdLessThan(String value) {
            addCriterion("brokers_id <", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdLessThanOrEqualTo(String value) {
            addCriterion("brokers_id <=", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdLike(String value) {
            addCriterion("brokers_id like", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdNotLike(String value) {
            addCriterion("brokers_id not like", value, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdIn(List<String> values) {
            addCriterion("brokers_id in", values, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdNotIn(List<String> values) {
            addCriterion("brokers_id not in", values, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdBetween(String value1, String value2) {
            addCriterion("brokers_id between", value1, value2, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIdNotBetween(String value1, String value2) {
            addCriterion("brokers_id not between", value1, value2, "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersIsNull() {
            addCriterion("brokers is null");
            return (Criteria) this;
        }

        public Criteria andBrokersIsNotNull() {
            addCriterion("brokers is not null");
            return (Criteria) this;
        }

        public Criteria andBrokersEqualTo(String value) {
            addCriterion("brokers =", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersNotEqualTo(String value) {
            addCriterion("brokers <>", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersGreaterThan(String value) {
            addCriterion("brokers >", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersGreaterThanOrEqualTo(String value) {
            addCriterion("brokers >=", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersLessThan(String value) {
            addCriterion("brokers <", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersLessThanOrEqualTo(String value) {
            addCriterion("brokers <=", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersLike(String value) {
            addCriterion("brokers like", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersNotLike(String value) {
            addCriterion("brokers not like", value, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersIn(List<String> values) {
            addCriterion("brokers in", values, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersNotIn(List<String> values) {
            addCriterion("brokers not in", values, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersBetween(String value1, String value2) {
            addCriterion("brokers between", value1, value2, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersNotBetween(String value1, String value2) {
            addCriterion("brokers not between", value1, value2, "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileIsNull() {
            addCriterion("brokers_mobile is null");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileIsNotNull() {
            addCriterion("brokers_mobile is not null");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileEqualTo(String value) {
            addCriterion("brokers_mobile =", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileNotEqualTo(String value) {
            addCriterion("brokers_mobile <>", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileGreaterThan(String value) {
            addCriterion("brokers_mobile >", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileGreaterThanOrEqualTo(String value) {
            addCriterion("brokers_mobile >=", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileLessThan(String value) {
            addCriterion("brokers_mobile <", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileLessThanOrEqualTo(String value) {
            addCriterion("brokers_mobile <=", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileLike(String value) {
            addCriterion("brokers_mobile like", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileNotLike(String value) {
            addCriterion("brokers_mobile not like", value, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileIn(List<String> values) {
            addCriterion("brokers_mobile in", values, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileNotIn(List<String> values) {
            addCriterion("brokers_mobile not in", values, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileBetween(String value1, String value2) {
            addCriterion("brokers_mobile between", value1, value2, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileNotBetween(String value1, String value2) {
            addCriterion("brokers_mobile not between", value1, value2, "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andChaNameIsNull() {
            addCriterion("cha_name is null");
            return (Criteria) this;
        }

        public Criteria andChaNameIsNotNull() {
            addCriterion("cha_name is not null");
            return (Criteria) this;
        }

        public Criteria andChaNameEqualTo(String value) {
            addCriterion("cha_name =", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameNotEqualTo(String value) {
            addCriterion("cha_name <>", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameGreaterThan(String value) {
            addCriterion("cha_name >", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameGreaterThanOrEqualTo(String value) {
            addCriterion("cha_name >=", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameLessThan(String value) {
            addCriterion("cha_name <", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameLessThanOrEqualTo(String value) {
            addCriterion("cha_name <=", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameLike(String value) {
            addCriterion("cha_name like", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameNotLike(String value) {
            addCriterion("cha_name not like", value, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameIn(List<String> values) {
            addCriterion("cha_name in", values, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameNotIn(List<String> values) {
            addCriterion("cha_name not in", values, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameBetween(String value1, String value2) {
            addCriterion("cha_name between", value1, value2, "chaName");
            return (Criteria) this;
        }

        public Criteria andChaNameNotBetween(String value1, String value2) {
            addCriterion("cha_name not between", value1, value2, "chaName");
            return (Criteria) this;
        }

        public Criteria andLoanHideIsNull() {
            addCriterion("loan_hide is null");
            return (Criteria) this;
        }

        public Criteria andLoanHideIsNotNull() {
            addCriterion("loan_hide is not null");
            return (Criteria) this;
        }

        public Criteria andLoanHideEqualTo(String value) {
            addCriterion("loan_hide =", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideNotEqualTo(String value) {
            addCriterion("loan_hide <>", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideGreaterThan(String value) {
            addCriterion("loan_hide >", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideGreaterThanOrEqualTo(String value) {
            addCriterion("loan_hide >=", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideLessThan(String value) {
            addCriterion("loan_hide <", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideLessThanOrEqualTo(String value) {
            addCriterion("loan_hide <=", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideLike(String value) {
            addCriterion("loan_hide like", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideNotLike(String value) {
            addCriterion("loan_hide not like", value, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideIn(List<String> values) {
            addCriterion("loan_hide in", values, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideNotIn(List<String> values) {
            addCriterion("loan_hide not in", values, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideBetween(String value1, String value2) {
            addCriterion("loan_hide between", value1, value2, "loanHide");
            return (Criteria) this;
        }

        public Criteria andLoanHideNotBetween(String value1, String value2) {
            addCriterion("loan_hide not between", value1, value2, "loanHide");
            return (Criteria) this;
        }

        public Criteria andHideCauseIsNull() {
            addCriterion("hide_cause is null");
            return (Criteria) this;
        }

        public Criteria andHideCauseIsNotNull() {
            addCriterion("hide_cause is not null");
            return (Criteria) this;
        }

        public Criteria andHideCauseEqualTo(String value) {
            addCriterion("hide_cause =", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseNotEqualTo(String value) {
            addCriterion("hide_cause <>", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseGreaterThan(String value) {
            addCriterion("hide_cause >", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseGreaterThanOrEqualTo(String value) {
            addCriterion("hide_cause >=", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseLessThan(String value) {
            addCriterion("hide_cause <", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseLessThanOrEqualTo(String value) {
            addCriterion("hide_cause <=", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseLike(String value) {
            addCriterion("hide_cause like", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseNotLike(String value) {
            addCriterion("hide_cause not like", value, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseIn(List<String> values) {
            addCriterion("hide_cause in", values, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseNotIn(List<String> values) {
            addCriterion("hide_cause not in", values, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseBetween(String value1, String value2) {
            addCriterion("hide_cause between", value1, value2, "hideCause");
            return (Criteria) this;
        }

        public Criteria andHideCauseNotBetween(String value1, String value2) {
            addCriterion("hide_cause not between", value1, value2, "hideCause");
            return (Criteria) this;
        }

        public Criteria andLoanSupportIsNull() {
            addCriterion("loan_support is null");
            return (Criteria) this;
        }

        public Criteria andLoanSupportIsNotNull() {
            addCriterion("loan_support is not null");
            return (Criteria) this;
        }

        public Criteria andLoanSupportEqualTo(String value) {
            addCriterion("loan_support =", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportNotEqualTo(String value) {
            addCriterion("loan_support <>", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportGreaterThan(String value) {
            addCriterion("loan_support >", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportGreaterThanOrEqualTo(String value) {
            addCriterion("loan_support >=", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportLessThan(String value) {
            addCriterion("loan_support <", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportLessThanOrEqualTo(String value) {
            addCriterion("loan_support <=", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportLike(String value) {
            addCriterion("loan_support like", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportNotLike(String value) {
            addCriterion("loan_support not like", value, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportIn(List<String> values) {
            addCriterion("loan_support in", values, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportNotIn(List<String> values) {
            addCriterion("loan_support not in", values, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportBetween(String value1, String value2) {
            addCriterion("loan_support between", value1, value2, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andLoanSupportNotBetween(String value1, String value2) {
            addCriterion("loan_support not between", value1, value2, "loanSupport");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseIsNull() {
            addCriterion("no_support_cause is null");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseIsNotNull() {
            addCriterion("no_support_cause is not null");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseEqualTo(String value) {
            addCriterion("no_support_cause =", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseNotEqualTo(String value) {
            addCriterion("no_support_cause <>", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseGreaterThan(String value) {
            addCriterion("no_support_cause >", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseGreaterThanOrEqualTo(String value) {
            addCriterion("no_support_cause >=", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseLessThan(String value) {
            addCriterion("no_support_cause <", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseLessThanOrEqualTo(String value) {
            addCriterion("no_support_cause <=", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseLike(String value) {
            addCriterion("no_support_cause like", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseNotLike(String value) {
            addCriterion("no_support_cause not like", value, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseIn(List<String> values) {
            addCriterion("no_support_cause in", values, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseNotIn(List<String> values) {
            addCriterion("no_support_cause not in", values, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseBetween(String value1, String value2) {
            addCriterion("no_support_cause between", value1, value2, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseNotBetween(String value1, String value2) {
            addCriterion("no_support_cause not between", value1, value2, "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andLoanRelationIsNull() {
            addCriterion("loan_relation is null");
            return (Criteria) this;
        }

        public Criteria andLoanRelationIsNotNull() {
            addCriterion("loan_relation is not null");
            return (Criteria) this;
        }

        public Criteria andLoanRelationEqualTo(String value) {
            addCriterion("loan_relation =", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationNotEqualTo(String value) {
            addCriterion("loan_relation <>", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationGreaterThan(String value) {
            addCriterion("loan_relation >", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationGreaterThanOrEqualTo(String value) {
            addCriterion("loan_relation >=", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationLessThan(String value) {
            addCriterion("loan_relation <", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationLessThanOrEqualTo(String value) {
            addCriterion("loan_relation <=", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationLike(String value) {
            addCriterion("loan_relation like", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationNotLike(String value) {
            addCriterion("loan_relation not like", value, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationIn(List<String> values) {
            addCriterion("loan_relation in", values, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationNotIn(List<String> values) {
            addCriterion("loan_relation not in", values, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationBetween(String value1, String value2) {
            addCriterion("loan_relation between", value1, value2, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andLoanRelationNotBetween(String value1, String value2) {
            addCriterion("loan_relation not between", value1, value2, "loanRelation");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceIsNull() {
            addCriterion("repayment_source is null");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceIsNotNull() {
            addCriterion("repayment_source is not null");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceEqualTo(String value) {
            addCriterion("repayment_source =", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceNotEqualTo(String value) {
            addCriterion("repayment_source <>", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceGreaterThan(String value) {
            addCriterion("repayment_source >", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceGreaterThanOrEqualTo(String value) {
            addCriterion("repayment_source >=", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceLessThan(String value) {
            addCriterion("repayment_source <", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceLessThanOrEqualTo(String value) {
            addCriterion("repayment_source <=", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceLike(String value) {
            addCriterion("repayment_source like", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceNotLike(String value) {
            addCriterion("repayment_source not like", value, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceIn(List<String> values) {
            addCriterion("repayment_source in", values, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceNotIn(List<String> values) {
            addCriterion("repayment_source not in", values, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceBetween(String value1, String value2) {
            addCriterion("repayment_source between", value1, value2, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceNotBetween(String value1, String value2) {
            addCriterion("repayment_source not between", value1, value2, "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkIsNull() {
            addCriterion("surver_remark is null");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkIsNotNull() {
            addCriterion("surver_remark is not null");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkEqualTo(String value) {
            addCriterion("surver_remark =", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkNotEqualTo(String value) {
            addCriterion("surver_remark <>", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkGreaterThan(String value) {
            addCriterion("surver_remark >", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkGreaterThanOrEqualTo(String value) {
            addCriterion("surver_remark >=", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkLessThan(String value) {
            addCriterion("surver_remark <", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkLessThanOrEqualTo(String value) {
            addCriterion("surver_remark <=", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkLike(String value) {
            addCriterion("surver_remark like", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkNotLike(String value) {
            addCriterion("surver_remark not like", value, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkIn(List<String> values) {
            addCriterion("surver_remark in", values, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkNotIn(List<String> values) {
            addCriterion("surver_remark not in", values, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkBetween(String value1, String value2) {
            addCriterion("surver_remark between", value1, value2, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkNotBetween(String value1, String value2) {
            addCriterion("surver_remark not between", value1, value2, "surverRemark");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeIsNull() {
            addCriterion("hope_loan_time is null");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeIsNotNull() {
            addCriterion("hope_loan_time is not null");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeEqualTo(String value) {
            addCriterion("hope_loan_time =", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeNotEqualTo(String value) {
            addCriterion("hope_loan_time <>", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeGreaterThan(String value) {
            addCriterion("hope_loan_time >", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeGreaterThanOrEqualTo(String value) {
            addCriterion("hope_loan_time >=", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeLessThan(String value) {
            addCriterion("hope_loan_time <", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeLessThanOrEqualTo(String value) {
            addCriterion("hope_loan_time <=", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeLike(String value) {
            addCriterion("hope_loan_time like", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeNotLike(String value) {
            addCriterion("hope_loan_time not like", value, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeIn(List<String> values) {
            addCriterion("hope_loan_time in", values, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeNotIn(List<String> values) {
            addCriterion("hope_loan_time not in", values, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeBetween(String value1, String value2) {
            addCriterion("hope_loan_time between", value1, value2, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeNotBetween(String value1, String value2) {
            addCriterion("hope_loan_time not between", value1, value2, "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andLenderTypeIsNull() {
            addCriterion("lender_type is null");
            return (Criteria) this;
        }

        public Criteria andLenderTypeIsNotNull() {
            addCriterion("lender_type is not null");
            return (Criteria) this;
        }

        public Criteria andLenderTypeEqualTo(String value) {
            addCriterion("lender_type =", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeNotEqualTo(String value) {
            addCriterion("lender_type <>", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeGreaterThan(String value) {
            addCriterion("lender_type >", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeGreaterThanOrEqualTo(String value) {
            addCriterion("lender_type >=", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeLessThan(String value) {
            addCriterion("lender_type <", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeLessThanOrEqualTo(String value) {
            addCriterion("lender_type <=", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeLike(String value) {
            addCriterion("lender_type like", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeNotLike(String value) {
            addCriterion("lender_type not like", value, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeIn(List<String> values) {
            addCriterion("lender_type in", values, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeNotIn(List<String> values) {
            addCriterion("lender_type not in", values, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeBetween(String value1, String value2) {
            addCriterion("lender_type between", value1, value2, "lenderType");
            return (Criteria) this;
        }

        public Criteria andLenderTypeNotBetween(String value1, String value2) {
            addCriterion("lender_type not between", value1, value2, "lenderType");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageIsNull() {
            addCriterion("surver_short_message is null");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageIsNotNull() {
            addCriterion("surver_short_message is not null");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageEqualTo(String value) {
            addCriterion("surver_short_message =", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageNotEqualTo(String value) {
            addCriterion("surver_short_message <>", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageGreaterThan(String value) {
            addCriterion("surver_short_message >", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageGreaterThanOrEqualTo(String value) {
            addCriterion("surver_short_message >=", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageLessThan(String value) {
            addCriterion("surver_short_message <", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageLessThanOrEqualTo(String value) {
            addCriterion("surver_short_message <=", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageLike(String value) {
            addCriterion("surver_short_message like", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageNotLike(String value) {
            addCriterion("surver_short_message not like", value, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageIn(List<String> values) {
            addCriterion("surver_short_message in", values, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageNotIn(List<String> values) {
            addCriterion("surver_short_message not in", values, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageBetween(String value1, String value2) {
            addCriterion("surver_short_message between", value1, value2, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageNotBetween(String value1, String value2) {
            addCriterion("surver_short_message not between", value1, value2, "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andAppointmentIsNull() {
            addCriterion("appointment is null");
            return (Criteria) this;
        }

        public Criteria andAppointmentIsNotNull() {
            addCriterion("appointment is not null");
            return (Criteria) this;
        }

        public Criteria andAppointmentEqualTo(String value) {
            addCriterion("appointment =", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentNotEqualTo(String value) {
            addCriterion("appointment <>", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentGreaterThan(String value) {
            addCriterion("appointment >", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentGreaterThanOrEqualTo(String value) {
            addCriterion("appointment >=", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentLessThan(String value) {
            addCriterion("appointment <", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentLessThanOrEqualTo(String value) {
            addCriterion("appointment <=", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentLike(String value) {
            addCriterion("appointment like", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentNotLike(String value) {
            addCriterion("appointment not like", value, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentIn(List<String> values) {
            addCriterion("appointment in", values, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentNotIn(List<String> values) {
            addCriterion("appointment not in", values, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentBetween(String value1, String value2) {
            addCriterion("appointment between", value1, value2, "appointment");
            return (Criteria) this;
        }

        public Criteria andAppointmentNotBetween(String value1, String value2) {
            addCriterion("appointment not between", value1, value2, "appointment");
            return (Criteria) this;
        }

        public Criteria andBussAreaIsNull() {
            addCriterion("buss_area is null");
            return (Criteria) this;
        }

        public Criteria andBussAreaIsNotNull() {
            addCriterion("buss_area is not null");
            return (Criteria) this;
        }

        public Criteria andBussAreaEqualTo(String value) {
            addCriterion("buss_area =", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaNotEqualTo(String value) {
            addCriterion("buss_area <>", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaGreaterThan(String value) {
            addCriterion("buss_area >", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaGreaterThanOrEqualTo(String value) {
            addCriterion("buss_area >=", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaLessThan(String value) {
            addCriterion("buss_area <", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaLessThanOrEqualTo(String value) {
            addCriterion("buss_area <=", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaLike(String value) {
            addCriterion("buss_area like", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaNotLike(String value) {
            addCriterion("buss_area not like", value, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaIn(List<String> values) {
            addCriterion("buss_area in", values, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaNotIn(List<String> values) {
            addCriterion("buss_area not in", values, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaBetween(String value1, String value2) {
            addCriterion("buss_area between", value1, value2, "bussArea");
            return (Criteria) this;
        }

        public Criteria andBussAreaNotBetween(String value1, String value2) {
            addCriterion("buss_area not between", value1, value2, "bussArea");
            return (Criteria) this;
        }

        public Criteria andInstNoIsNull() {
            addCriterion("inst_no is null");
            return (Criteria) this;
        }

        public Criteria andInstNoIsNotNull() {
            addCriterion("inst_no is not null");
            return (Criteria) this;
        }

        public Criteria andInstNoEqualTo(String value) {
            addCriterion("inst_no =", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoNotEqualTo(String value) {
            addCriterion("inst_no <>", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoGreaterThan(String value) {
            addCriterion("inst_no >", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoGreaterThanOrEqualTo(String value) {
            addCriterion("inst_no >=", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoLessThan(String value) {
            addCriterion("inst_no <", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoLessThanOrEqualTo(String value) {
            addCriterion("inst_no <=", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoLike(String value) {
            addCriterion("inst_no like", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoNotLike(String value) {
            addCriterion("inst_no not like", value, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoIn(List<String> values) {
            addCriterion("inst_no in", values, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoNotIn(List<String> values) {
            addCriterion("inst_no not in", values, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoBetween(String value1, String value2) {
            addCriterion("inst_no between", value1, value2, "instNo");
            return (Criteria) this;
        }

        public Criteria andInstNoNotBetween(String value1, String value2) {
            addCriterion("inst_no not between", value1, value2, "instNo");
            return (Criteria) this;
        }

        public Criteria andLendNoIsNull() {
            addCriterion("lend_no is null");
            return (Criteria) this;
        }

        public Criteria andLendNoIsNotNull() {
            addCriterion("lend_no is not null");
            return (Criteria) this;
        }

        public Criteria andLendNoEqualTo(String value) {
            addCriterion("lend_no =", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoNotEqualTo(String value) {
            addCriterion("lend_no <>", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoGreaterThan(String value) {
            addCriterion("lend_no >", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoGreaterThanOrEqualTo(String value) {
            addCriterion("lend_no >=", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoLessThan(String value) {
            addCriterion("lend_no <", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoLessThanOrEqualTo(String value) {
            addCriterion("lend_no <=", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoLike(String value) {
            addCriterion("lend_no like", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoNotLike(String value) {
            addCriterion("lend_no not like", value, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoIn(List<String> values) {
            addCriterion("lend_no in", values, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoNotIn(List<String> values) {
            addCriterion("lend_no not in", values, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoBetween(String value1, String value2) {
            addCriterion("lend_no between", value1, value2, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNoNotBetween(String value1, String value2) {
            addCriterion("lend_no not between", value1, value2, "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNameIsNull() {
            addCriterion("lend_name is null");
            return (Criteria) this;
        }

        public Criteria andLendNameIsNotNull() {
            addCriterion("lend_name is not null");
            return (Criteria) this;
        }

        public Criteria andLendNameEqualTo(String value) {
            addCriterion("lend_name =", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameNotEqualTo(String value) {
            addCriterion("lend_name <>", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameGreaterThan(String value) {
            addCriterion("lend_name >", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameGreaterThanOrEqualTo(String value) {
            addCriterion("lend_name >=", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameLessThan(String value) {
            addCriterion("lend_name <", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameLessThanOrEqualTo(String value) {
            addCriterion("lend_name <=", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameLike(String value) {
            addCriterion("lend_name like", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameNotLike(String value) {
            addCriterion("lend_name not like", value, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameIn(List<String> values) {
            addCriterion("lend_name in", values, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameNotIn(List<String> values) {
            addCriterion("lend_name not in", values, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameBetween(String value1, String value2) {
            addCriterion("lend_name between", value1, value2, "lendName");
            return (Criteria) this;
        }

        public Criteria andLendNameNotBetween(String value1, String value2) {
            addCriterion("lend_name not between", value1, value2, "lendName");
            return (Criteria) this;
        }

        public Criteria andProductIdIsNull() {
            addCriterion("product_id is null");
            return (Criteria) this;
        }

        public Criteria andProductIdIsNotNull() {
            addCriterion("product_id is not null");
            return (Criteria) this;
        }

        public Criteria andProductIdEqualTo(String value) {
            addCriterion("product_id =", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotEqualTo(String value) {
            addCriterion("product_id <>", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdGreaterThan(String value) {
            addCriterion("product_id >", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdGreaterThanOrEqualTo(String value) {
            addCriterion("product_id >=", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdLessThan(String value) {
            addCriterion("product_id <", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdLessThanOrEqualTo(String value) {
            addCriterion("product_id <=", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdLike(String value) {
            addCriterion("product_id like", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotLike(String value) {
            addCriterion("product_id not like", value, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdIn(List<String> values) {
            addCriterion("product_id in", values, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotIn(List<String> values) {
            addCriterion("product_id not in", values, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdBetween(String value1, String value2) {
            addCriterion("product_id between", value1, value2, "productId");
            return (Criteria) this;
        }

        public Criteria andProductIdNotBetween(String value1, String value2) {
            addCriterion("product_id not between", value1, value2, "productId");
            return (Criteria) this;
        }

        public Criteria andProductNameIsNull() {
            addCriterion("product_name is null");
            return (Criteria) this;
        }

        public Criteria andProductNameIsNotNull() {
            addCriterion("product_name is not null");
            return (Criteria) this;
        }

        public Criteria andProductNameEqualTo(String value) {
            addCriterion("product_name =", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotEqualTo(String value) {
            addCriterion("product_name <>", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameGreaterThan(String value) {
            addCriterion("product_name >", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameGreaterThanOrEqualTo(String value) {
            addCriterion("product_name >=", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameLessThan(String value) {
            addCriterion("product_name <", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameLessThanOrEqualTo(String value) {
            addCriterion("product_name <=", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameLike(String value) {
            addCriterion("product_name like", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotLike(String value) {
            addCriterion("product_name not like", value, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameIn(List<String> values) {
            addCriterion("product_name in", values, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotIn(List<String> values) {
            addCriterion("product_name not in", values, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameBetween(String value1, String value2) {
            addCriterion("product_name between", value1, value2, "productName");
            return (Criteria) this;
        }

        public Criteria andProductNameNotBetween(String value1, String value2) {
            addCriterion("product_name not between", value1, value2, "productName");
            return (Criteria) this;
        }

        public Criteria andGrantTimeIsNull() {
            addCriterion("grant_time is null");
            return (Criteria) this;
        }

        public Criteria andGrantTimeIsNotNull() {
            addCriterion("grant_time is not null");
            return (Criteria) this;
        }

        public Criteria andGrantTimeEqualTo(Date value) {
            addCriterion("grant_time =", value, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeNotEqualTo(Date value) {
            addCriterion("grant_time <>", value, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeGreaterThan(Date value) {
            addCriterion("grant_time >", value, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("grant_time >=", value, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeLessThan(Date value) {
            addCriterion("grant_time <", value, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeLessThanOrEqualTo(Date value) {
            addCriterion("grant_time <=", value, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeIn(List<Date> values) {
            addCriterion("grant_time in", values, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeNotIn(List<Date> values) {
            addCriterion("grant_time not in", values, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeBetween(Date value1, Date value2) {
            addCriterion("grant_time between", value1, value2, "grantTime");
            return (Criteria) this;
        }

        public Criteria andGrantTimeNotBetween(Date value1, Date value2) {
            addCriterion("grant_time not between", value1, value2, "grantTime");
            return (Criteria) this;
        }

        public Criteria andBussAreanameIsNull() {
            addCriterion("buss_areaname is null");
            return (Criteria) this;
        }

        public Criteria andBussAreanameIsNotNull() {
            addCriterion("buss_areaname is not null");
            return (Criteria) this;
        }

        public Criteria andBussAreanameEqualTo(String value) {
            addCriterion("buss_areaname =", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameNotEqualTo(String value) {
            addCriterion("buss_areaname <>", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameGreaterThan(String value) {
            addCriterion("buss_areaname >", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameGreaterThanOrEqualTo(String value) {
            addCriterion("buss_areaname >=", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameLessThan(String value) {
            addCriterion("buss_areaname <", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameLessThanOrEqualTo(String value) {
            addCriterion("buss_areaname <=", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameLike(String value) {
            addCriterion("buss_areaname like", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameNotLike(String value) {
            addCriterion("buss_areaname not like", value, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameIn(List<String> values) {
            addCriterion("buss_areaname in", values, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameNotIn(List<String> values) {
            addCriterion("buss_areaname not in", values, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameBetween(String value1, String value2) {
            addCriterion("buss_areaname between", value1, value2, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andBussAreanameNotBetween(String value1, String value2) {
            addCriterion("buss_areaname not between", value1, value2, "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andInstNameIsNull() {
            addCriterion("inst_name is null");
            return (Criteria) this;
        }

        public Criteria andInstNameIsNotNull() {
            addCriterion("inst_name is not null");
            return (Criteria) this;
        }

        public Criteria andInstNameEqualTo(String value) {
            addCriterion("inst_name =", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameNotEqualTo(String value) {
            addCriterion("inst_name <>", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameGreaterThan(String value) {
            addCriterion("inst_name >", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameGreaterThanOrEqualTo(String value) {
            addCriterion("inst_name >=", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameLessThan(String value) {
            addCriterion("inst_name <", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameLessThanOrEqualTo(String value) {
            addCriterion("inst_name <=", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameLike(String value) {
            addCriterion("inst_name like", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameNotLike(String value) {
            addCriterion("inst_name not like", value, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameIn(List<String> values) {
            addCriterion("inst_name in", values, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameNotIn(List<String> values) {
            addCriterion("inst_name not in", values, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameBetween(String value1, String value2) {
            addCriterion("inst_name between", value1, value2, "instName");
            return (Criteria) this;
        }

        public Criteria andInstNameNotBetween(String value1, String value2) {
            addCriterion("inst_name not between", value1, value2, "instName");
            return (Criteria) this;
        }

        public Criteria andOrgNameIsNull() {
            addCriterion("org_name is null");
            return (Criteria) this;
        }

        public Criteria andOrgNameIsNotNull() {
            addCriterion("org_name is not null");
            return (Criteria) this;
        }

        public Criteria andOrgNameEqualTo(String value) {
            addCriterion("org_name =", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameNotEqualTo(String value) {
            addCriterion("org_name <>", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameGreaterThan(String value) {
            addCriterion("org_name >", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameGreaterThanOrEqualTo(String value) {
            addCriterion("org_name >=", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameLessThan(String value) {
            addCriterion("org_name <", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameLessThanOrEqualTo(String value) {
            addCriterion("org_name <=", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameLike(String value) {
            addCriterion("org_name like", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameNotLike(String value) {
            addCriterion("org_name not like", value, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameIn(List<String> values) {
            addCriterion("org_name in", values, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameNotIn(List<String> values) {
            addCriterion("org_name not in", values, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameBetween(String value1, String value2) {
            addCriterion("org_name between", value1, value2, "orgName");
            return (Criteria) this;
        }

        public Criteria andOrgNameNotBetween(String value1, String value2) {
            addCriterion("org_name not between", value1, value2, "orgName");
            return (Criteria) this;
        }

        public Criteria andIsBatchIsNull() {
            addCriterion("is_batch is null");
            return (Criteria) this;
        }

        public Criteria andIsBatchIsNotNull() {
            addCriterion("is_batch is not null");
            return (Criteria) this;
        }

        public Criteria andIsBatchEqualTo(String value) {
            addCriterion("is_batch =", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchNotEqualTo(String value) {
            addCriterion("is_batch <>", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchGreaterThan(String value) {
            addCriterion("is_batch >", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchGreaterThanOrEqualTo(String value) {
            addCriterion("is_batch >=", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchLessThan(String value) {
            addCriterion("is_batch <", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchLessThanOrEqualTo(String value) {
            addCriterion("is_batch <=", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchLike(String value) {
            addCriterion("is_batch like", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchNotLike(String value) {
            addCriterion("is_batch not like", value, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchIn(List<String> values) {
            addCriterion("is_batch in", values, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchNotIn(List<String> values) {
            addCriterion("is_batch not in", values, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchBetween(String value1, String value2) {
            addCriterion("is_batch between", value1, value2, "isBatch");
            return (Criteria) this;
        }

        public Criteria andIsBatchNotBetween(String value1, String value2) {
            addCriterion("is_batch not between", value1, value2, "isBatch");
            return (Criteria) this;
        }

        public Criteria andCardUsernameIsNull() {
            addCriterion("card_username is null");
            return (Criteria) this;
        }

        public Criteria andCardUsernameIsNotNull() {
            addCriterion("card_username is not null");
            return (Criteria) this;
        }

        public Criteria andCardUsernameEqualTo(String value) {
            addCriterion("card_username =", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameNotEqualTo(String value) {
            addCriterion("card_username <>", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameGreaterThan(String value) {
            addCriterion("card_username >", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameGreaterThanOrEqualTo(String value) {
            addCriterion("card_username >=", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameLessThan(String value) {
            addCriterion("card_username <", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameLessThanOrEqualTo(String value) {
            addCriterion("card_username <=", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameLike(String value) {
            addCriterion("card_username like", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameNotLike(String value) {
            addCriterion("card_username not like", value, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameIn(List<String> values) {
            addCriterion("card_username in", values, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameNotIn(List<String> values) {
            addCriterion("card_username not in", values, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameBetween(String value1, String value2) {
            addCriterion("card_username between", value1, value2, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardUsernameNotBetween(String value1, String value2) {
            addCriterion("card_username not between", value1, value2, "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardCertnoIsNull() {
            addCriterion("card_certno is null");
            return (Criteria) this;
        }

        public Criteria andCardCertnoIsNotNull() {
            addCriterion("card_certno is not null");
            return (Criteria) this;
        }

        public Criteria andCardCertnoEqualTo(String value) {
            addCriterion("card_certno =", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoNotEqualTo(String value) {
            addCriterion("card_certno <>", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoGreaterThan(String value) {
            addCriterion("card_certno >", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoGreaterThanOrEqualTo(String value) {
            addCriterion("card_certno >=", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoLessThan(String value) {
            addCriterion("card_certno <", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoLessThanOrEqualTo(String value) {
            addCriterion("card_certno <=", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoLike(String value) {
            addCriterion("card_certno like", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoNotLike(String value) {
            addCriterion("card_certno not like", value, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoIn(List<String> values) {
            addCriterion("card_certno in", values, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoNotIn(List<String> values) {
            addCriterion("card_certno not in", values, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoBetween(String value1, String value2) {
            addCriterion("card_certno between", value1, value2, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardCertnoNotBetween(String value1, String value2) {
            addCriterion("card_certno not between", value1, value2, "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardNumIsNull() {
            addCriterion("card_num is null");
            return (Criteria) this;
        }

        public Criteria andCardNumIsNotNull() {
            addCriterion("card_num is not null");
            return (Criteria) this;
        }

        public Criteria andCardNumEqualTo(String value) {
            addCriterion("card_num =", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumNotEqualTo(String value) {
            addCriterion("card_num <>", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumGreaterThan(String value) {
            addCriterion("card_num >", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumGreaterThanOrEqualTo(String value) {
            addCriterion("card_num >=", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumLessThan(String value) {
            addCriterion("card_num <", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumLessThanOrEqualTo(String value) {
            addCriterion("card_num <=", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumLike(String value) {
            addCriterion("card_num like", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumNotLike(String value) {
            addCriterion("card_num not like", value, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumIn(List<String> values) {
            addCriterion("card_num in", values, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumNotIn(List<String> values) {
            addCriterion("card_num not in", values, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumBetween(String value1, String value2) {
            addCriterion("card_num between", value1, value2, "cardNum");
            return (Criteria) this;
        }

        public Criteria andCardNumNotBetween(String value1, String value2) {
            addCriterion("card_num not between", value1, value2, "cardNum");
            return (Criteria) this;
        }

        public Criteria andBankIsNull() {
            addCriterion("bank is null");
            return (Criteria) this;
        }

        public Criteria andBankIsNotNull() {
            addCriterion("bank is not null");
            return (Criteria) this;
        }

        public Criteria andBankEqualTo(String value) {
            addCriterion("bank =", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankNotEqualTo(String value) {
            addCriterion("bank <>", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankGreaterThan(String value) {
            addCriterion("bank >", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankGreaterThanOrEqualTo(String value) {
            addCriterion("bank >=", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankLessThan(String value) {
            addCriterion("bank <", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankLessThanOrEqualTo(String value) {
            addCriterion("bank <=", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankLike(String value) {
            addCriterion("bank like", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankNotLike(String value) {
            addCriterion("bank not like", value, "bank");
            return (Criteria) this;
        }

        public Criteria andBankIn(List<String> values) {
            addCriterion("bank in", values, "bank");
            return (Criteria) this;
        }

        public Criteria andBankNotIn(List<String> values) {
            addCriterion("bank not in", values, "bank");
            return (Criteria) this;
        }

        public Criteria andBankBetween(String value1, String value2) {
            addCriterion("bank between", value1, value2, "bank");
            return (Criteria) this;
        }

        public Criteria andBankNotBetween(String value1, String value2) {
            addCriterion("bank not between", value1, value2, "bank");
            return (Criteria) this;
        }

        public Criteria andSubBankIsNull() {
            addCriterion("sub_bank is null");
            return (Criteria) this;
        }

        public Criteria andSubBankIsNotNull() {
            addCriterion("sub_bank is not null");
            return (Criteria) this;
        }

        public Criteria andSubBankEqualTo(String value) {
            addCriterion("sub_bank =", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankNotEqualTo(String value) {
            addCriterion("sub_bank <>", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankGreaterThan(String value) {
            addCriterion("sub_bank >", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankGreaterThanOrEqualTo(String value) {
            addCriterion("sub_bank >=", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankLessThan(String value) {
            addCriterion("sub_bank <", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankLessThanOrEqualTo(String value) {
            addCriterion("sub_bank <=", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankLike(String value) {
            addCriterion("sub_bank like", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankNotLike(String value) {
            addCriterion("sub_bank not like", value, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankIn(List<String> values) {
            addCriterion("sub_bank in", values, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankNotIn(List<String> values) {
            addCriterion("sub_bank not in", values, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankBetween(String value1, String value2) {
            addCriterion("sub_bank between", value1, value2, "subBank");
            return (Criteria) this;
        }

        public Criteria andSubBankNotBetween(String value1, String value2) {
            addCriterion("sub_bank not between", value1, value2, "subBank");
            return (Criteria) this;
        }

        public Criteria andProvinceNameIsNull() {
            addCriterion("province_name is null");
            return (Criteria) this;
        }

        public Criteria andProvinceNameIsNotNull() {
            addCriterion("province_name is not null");
            return (Criteria) this;
        }

        public Criteria andProvinceNameEqualTo(String value) {
            addCriterion("province_name =", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameNotEqualTo(String value) {
            addCriterion("province_name <>", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameGreaterThan(String value) {
            addCriterion("province_name >", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameGreaterThanOrEqualTo(String value) {
            addCriterion("province_name >=", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameLessThan(String value) {
            addCriterion("province_name <", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameLessThanOrEqualTo(String value) {
            addCriterion("province_name <=", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameLike(String value) {
            addCriterion("province_name like", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameNotLike(String value) {
            addCriterion("province_name not like", value, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameIn(List<String> values) {
            addCriterion("province_name in", values, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameNotIn(List<String> values) {
            addCriterion("province_name not in", values, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameBetween(String value1, String value2) {
            addCriterion("province_name between", value1, value2, "provinceName");
            return (Criteria) this;
        }

        public Criteria andProvinceNameNotBetween(String value1, String value2) {
            addCriterion("province_name not between", value1, value2, "provinceName");
            return (Criteria) this;
        }

        public Criteria andCityNameIsNull() {
            addCriterion("city_name is null");
            return (Criteria) this;
        }

        public Criteria andCityNameIsNotNull() {
            addCriterion("city_name is not null");
            return (Criteria) this;
        }

        public Criteria andCityNameEqualTo(String value) {
            addCriterion("city_name =", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameNotEqualTo(String value) {
            addCriterion("city_name <>", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameGreaterThan(String value) {
            addCriterion("city_name >", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameGreaterThanOrEqualTo(String value) {
            addCriterion("city_name >=", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameLessThan(String value) {
            addCriterion("city_name <", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameLessThanOrEqualTo(String value) {
            addCriterion("city_name <=", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameLike(String value) {
            addCriterion("city_name like", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameNotLike(String value) {
            addCriterion("city_name not like", value, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameIn(List<String> values) {
            addCriterion("city_name in", values, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameNotIn(List<String> values) {
            addCriterion("city_name not in", values, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameBetween(String value1, String value2) {
            addCriterion("city_name between", value1, value2, "cityName");
            return (Criteria) this;
        }

        public Criteria andCityNameNotBetween(String value1, String value2) {
            addCriterion("city_name not between", value1, value2, "cityName");
            return (Criteria) this;
        }

        public Criteria andCardUserNoIsNull() {
            addCriterion("card_user_no is null");
            return (Criteria) this;
        }

        public Criteria andCardUserNoIsNotNull() {
            addCriterion("card_user_no is not null");
            return (Criteria) this;
        }

        public Criteria andCardUserNoEqualTo(String value) {
            addCriterion("card_user_no =", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoNotEqualTo(String value) {
            addCriterion("card_user_no <>", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoGreaterThan(String value) {
            addCriterion("card_user_no >", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoGreaterThanOrEqualTo(String value) {
            addCriterion("card_user_no >=", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoLessThan(String value) {
            addCriterion("card_user_no <", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoLessThanOrEqualTo(String value) {
            addCriterion("card_user_no <=", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoLike(String value) {
            addCriterion("card_user_no like", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoNotLike(String value) {
            addCriterion("card_user_no not like", value, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoIn(List<String> values) {
            addCriterion("card_user_no in", values, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoNotIn(List<String> values) {
            addCriterion("card_user_no not in", values, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoBetween(String value1, String value2) {
            addCriterion("card_user_no between", value1, value2, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andCardUserNoNotBetween(String value1, String value2) {
            addCriterion("card_user_no not between", value1, value2, "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andTaskTypeIsNull() {
            addCriterion("task_type is null");
            return (Criteria) this;
        }

        public Criteria andTaskTypeIsNotNull() {
            addCriterion("task_type is not null");
            return (Criteria) this;
        }

        public Criteria andTaskTypeEqualTo(String value) {
            addCriterion("task_type =", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeNotEqualTo(String value) {
            addCriterion("task_type <>", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeGreaterThan(String value) {
            addCriterion("task_type >", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeGreaterThanOrEqualTo(String value) {
            addCriterion("task_type >=", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeLessThan(String value) {
            addCriterion("task_type <", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeLessThanOrEqualTo(String value) {
            addCriterion("task_type <=", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeLike(String value) {
            addCriterion("task_type like", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeNotLike(String value) {
            addCriterion("task_type not like", value, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeIn(List<String> values) {
            addCriterion("task_type in", values, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeNotIn(List<String> values) {
            addCriterion("task_type not in", values, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeBetween(String value1, String value2) {
            addCriterion("task_type between", value1, value2, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskTypeNotBetween(String value1, String value2) {
            addCriterion("task_type not between", value1, value2, "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeIsNull() {
            addCriterion("task_begintime is null");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeIsNotNull() {
            addCriterion("task_begintime is not null");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeEqualTo(String value) {
            addCriterion("task_begintime =", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeNotEqualTo(String value) {
            addCriterion("task_begintime <>", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeGreaterThan(String value) {
            addCriterion("task_begintime >", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeGreaterThanOrEqualTo(String value) {
            addCriterion("task_begintime >=", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeLessThan(String value) {
            addCriterion("task_begintime <", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeLessThanOrEqualTo(String value) {
            addCriterion("task_begintime <=", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeLike(String value) {
            addCriterion("task_begintime like", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeNotLike(String value) {
            addCriterion("task_begintime not like", value, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeIn(List<String> values) {
            addCriterion("task_begintime in", values, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeNotIn(List<String> values) {
            addCriterion("task_begintime not in", values, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeBetween(String value1, String value2) {
            addCriterion("task_begintime between", value1, value2, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeNotBetween(String value1, String value2) {
            addCriterion("task_begintime not between", value1, value2, "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskStatusIsNull() {
            addCriterion("task_status is null");
            return (Criteria) this;
        }

        public Criteria andTaskStatusIsNotNull() {
            addCriterion("task_status is not null");
            return (Criteria) this;
        }

        public Criteria andTaskStatusEqualTo(String value) {
            addCriterion("task_status =", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusNotEqualTo(String value) {
            addCriterion("task_status <>", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusGreaterThan(String value) {
            addCriterion("task_status >", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusGreaterThanOrEqualTo(String value) {
            addCriterion("task_status >=", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusLessThan(String value) {
            addCriterion("task_status <", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusLessThanOrEqualTo(String value) {
            addCriterion("task_status <=", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusLike(String value) {
            addCriterion("task_status like", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusNotLike(String value) {
            addCriterion("task_status not like", value, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusIn(List<String> values) {
            addCriterion("task_status in", values, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusNotIn(List<String> values) {
            addCriterion("task_status not in", values, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusBetween(String value1, String value2) {
            addCriterion("task_status between", value1, value2, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andTaskStatusNotBetween(String value1, String value2) {
            addCriterion("task_status not between", value1, value2, "taskStatus");
            return (Criteria) this;
        }

        public Criteria andCustNameIsNull() {
            addCriterion("cust_name is null");
            return (Criteria) this;
        }

        public Criteria andCustNameIsNotNull() {
            addCriterion("cust_name is not null");
            return (Criteria) this;
        }

        public Criteria andCustNameEqualTo(String value) {
            addCriterion("cust_name =", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameNotEqualTo(String value) {
            addCriterion("cust_name <>", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameGreaterThan(String value) {
            addCriterion("cust_name >", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameGreaterThanOrEqualTo(String value) {
            addCriterion("cust_name >=", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameLessThan(String value) {
            addCriterion("cust_name <", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameLessThanOrEqualTo(String value) {
            addCriterion("cust_name <=", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameLike(String value) {
            addCriterion("cust_name like", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameNotLike(String value) {
            addCriterion("cust_name not like", value, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameIn(List<String> values) {
            addCriterion("cust_name in", values, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameNotIn(List<String> values) {
            addCriterion("cust_name not in", values, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameBetween(String value1, String value2) {
            addCriterion("cust_name between", value1, value2, "custName");
            return (Criteria) this;
        }

        public Criteria andCustNameNotBetween(String value1, String value2) {
            addCriterion("cust_name not between", value1, value2, "custName");
            return (Criteria) this;
        }

        public Criteria andTaskNameIsNull() {
            addCriterion("task_name is null");
            return (Criteria) this;
        }

        public Criteria andTaskNameIsNotNull() {
            addCriterion("task_name is not null");
            return (Criteria) this;
        }

        public Criteria andTaskNameEqualTo(String value) {
            addCriterion("task_name =", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameNotEqualTo(String value) {
            addCriterion("task_name <>", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameGreaterThan(String value) {
            addCriterion("task_name >", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameGreaterThanOrEqualTo(String value) {
            addCriterion("task_name >=", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameLessThan(String value) {
            addCriterion("task_name <", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameLessThanOrEqualTo(String value) {
            addCriterion("task_name <=", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameLike(String value) {
            addCriterion("task_name like", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameNotLike(String value) {
            addCriterion("task_name not like", value, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameIn(List<String> values) {
            addCriterion("task_name in", values, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameNotIn(List<String> values) {
            addCriterion("task_name not in", values, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameBetween(String value1, String value2) {
            addCriterion("task_name between", value1, value2, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNameNotBetween(String value1, String value2) {
            addCriterion("task_name not between", value1, value2, "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNoIsNull() {
            addCriterion("task_no is null");
            return (Criteria) this;
        }

        public Criteria andTaskNoIsNotNull() {
            addCriterion("task_no is not null");
            return (Criteria) this;
        }

        public Criteria andTaskNoEqualTo(String value) {
            addCriterion("task_no =", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoNotEqualTo(String value) {
            addCriterion("task_no <>", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoGreaterThan(String value) {
            addCriterion("task_no >", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoGreaterThanOrEqualTo(String value) {
            addCriterion("task_no >=", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoLessThan(String value) {
            addCriterion("task_no <", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoLessThanOrEqualTo(String value) {
            addCriterion("task_no <=", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoLike(String value) {
            addCriterion("task_no like", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoNotLike(String value) {
            addCriterion("task_no not like", value, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoIn(List<String> values) {
            addCriterion("task_no in", values, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoNotIn(List<String> values) {
            addCriterion("task_no not in", values, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoBetween(String value1, String value2) {
            addCriterion("task_no between", value1, value2, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskNoNotBetween(String value1, String value2) {
            addCriterion("task_no not between", value1, value2, "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoIsNull() {
            addCriterion("task_per_no is null");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoIsNotNull() {
            addCriterion("task_per_no is not null");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoEqualTo(String value) {
            addCriterion("task_per_no =", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoNotEqualTo(String value) {
            addCriterion("task_per_no <>", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoGreaterThan(String value) {
            addCriterion("task_per_no >", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoGreaterThanOrEqualTo(String value) {
            addCriterion("task_per_no >=", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoLessThan(String value) {
            addCriterion("task_per_no <", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoLessThanOrEqualTo(String value) {
            addCriterion("task_per_no <=", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoLike(String value) {
            addCriterion("task_per_no like", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoNotLike(String value) {
            addCriterion("task_per_no not like", value, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoIn(List<String> values) {
            addCriterion("task_per_no in", values, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoNotIn(List<String> values) {
            addCriterion("task_per_no not in", values, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoBetween(String value1, String value2) {
            addCriterion("task_per_no between", value1, value2, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoNotBetween(String value1, String value2) {
            addCriterion("task_per_no not between", value1, value2, "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andUrgentBussIsNull() {
            addCriterion("urgent_buss is null");
            return (Criteria) this;
        }

        public Criteria andUrgentBussIsNotNull() {
            addCriterion("urgent_buss is not null");
            return (Criteria) this;
        }

        public Criteria andUrgentBussEqualTo(String value) {
            addCriterion("urgent_buss =", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussNotEqualTo(String value) {
            addCriterion("urgent_buss <>", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussGreaterThan(String value) {
            addCriterion("urgent_buss >", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussGreaterThanOrEqualTo(String value) {
            addCriterion("urgent_buss >=", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussLessThan(String value) {
            addCriterion("urgent_buss <", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussLessThanOrEqualTo(String value) {
            addCriterion("urgent_buss <=", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussLike(String value) {
            addCriterion("urgent_buss like", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussNotLike(String value) {
            addCriterion("urgent_buss not like", value, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussIn(List<String> values) {
            addCriterion("urgent_buss in", values, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussNotIn(List<String> values) {
            addCriterion("urgent_buss not in", values, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussBetween(String value1, String value2) {
            addCriterion("urgent_buss between", value1, value2, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andUrgentBussNotBetween(String value1, String value2) {
            addCriterion("urgent_buss not between", value1, value2, "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andBussChangeIsNull() {
            addCriterion("buss_change is null");
            return (Criteria) this;
        }

        public Criteria andBussChangeIsNotNull() {
            addCriterion("buss_change is not null");
            return (Criteria) this;
        }

        public Criteria andBussChangeEqualTo(String value) {
            addCriterion("buss_change =", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeNotEqualTo(String value) {
            addCriterion("buss_change <>", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeGreaterThan(String value) {
            addCriterion("buss_change >", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeGreaterThanOrEqualTo(String value) {
            addCriterion("buss_change >=", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeLessThan(String value) {
            addCriterion("buss_change <", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeLessThanOrEqualTo(String value) {
            addCriterion("buss_change <=", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeLike(String value) {
            addCriterion("buss_change like", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeNotLike(String value) {
            addCriterion("buss_change not like", value, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeIn(List<String> values) {
            addCriterion("buss_change in", values, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeNotIn(List<String> values) {
            addCriterion("buss_change not in", values, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeBetween(String value1, String value2) {
            addCriterion("buss_change between", value1, value2, "bussChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeNotBetween(String value1, String value2) {
            addCriterion("buss_change not between", value1, value2, "bussChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeIsNull() {
            addCriterion("status_change is null");
            return (Criteria) this;
        }

        public Criteria andStatusChangeIsNotNull() {
            addCriterion("status_change is not null");
            return (Criteria) this;
        }

        public Criteria andStatusChangeEqualTo(String value) {
            addCriterion("status_change =", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeNotEqualTo(String value) {
            addCriterion("status_change <>", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeGreaterThan(String value) {
            addCriterion("status_change >", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeGreaterThanOrEqualTo(String value) {
            addCriterion("status_change >=", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeLessThan(String value) {
            addCriterion("status_change <", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeLessThanOrEqualTo(String value) {
            addCriterion("status_change <=", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeLike(String value) {
            addCriterion("status_change like", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeNotLike(String value) {
            addCriterion("status_change not like", value, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeIn(List<String> values) {
            addCriterion("status_change in", values, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeNotIn(List<String> values) {
            addCriterion("status_change not in", values, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeBetween(String value1, String value2) {
            addCriterion("status_change between", value1, value2, "statusChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeNotBetween(String value1, String value2) {
            addCriterion("status_change not between", value1, value2, "statusChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdIsNull() {
            addCriterion("buss_change_flow_id is null");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdIsNotNull() {
            addCriterion("buss_change_flow_id is not null");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdEqualTo(String value) {
            addCriterion("buss_change_flow_id =", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdNotEqualTo(String value) {
            addCriterion("buss_change_flow_id <>", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdGreaterThan(String value) {
            addCriterion("buss_change_flow_id >", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdGreaterThanOrEqualTo(String value) {
            addCriterion("buss_change_flow_id >=", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdLessThan(String value) {
            addCriterion("buss_change_flow_id <", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdLessThanOrEqualTo(String value) {
            addCriterion("buss_change_flow_id <=", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdLike(String value) {
            addCriterion("buss_change_flow_id like", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdNotLike(String value) {
            addCriterion("buss_change_flow_id not like", value, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdIn(List<String> values) {
            addCriterion("buss_change_flow_id in", values, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdNotIn(List<String> values) {
            addCriterion("buss_change_flow_id not in", values, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdBetween(String value1, String value2) {
            addCriterion("buss_change_flow_id between", value1, value2, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdNotBetween(String value1, String value2) {
            addCriterion("buss_change_flow_id not between", value1, value2, "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andHouseIdIsNull() {
            addCriterion("house_id is null");
            return (Criteria) this;
        }

        public Criteria andHouseIdIsNotNull() {
            addCriterion("house_id is not null");
            return (Criteria) this;
        }

        public Criteria andHouseIdEqualTo(String value) {
            addCriterion("house_id =", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdNotEqualTo(String value) {
            addCriterion("house_id <>", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdGreaterThan(String value) {
            addCriterion("house_id >", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdGreaterThanOrEqualTo(String value) {
            addCriterion("house_id >=", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdLessThan(String value) {
            addCriterion("house_id <", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdLessThanOrEqualTo(String value) {
            addCriterion("house_id <=", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdLike(String value) {
            addCriterion("house_id like", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdNotLike(String value) {
            addCriterion("house_id not like", value, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdIn(List<String> values) {
            addCriterion("house_id in", values, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdNotIn(List<String> values) {
            addCriterion("house_id not in", values, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdBetween(String value1, String value2) {
            addCriterion("house_id between", value1, value2, "houseId");
            return (Criteria) this;
        }

        public Criteria andHouseIdNotBetween(String value1, String value2) {
            addCriterion("house_id not between", value1, value2, "houseId");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberIsNull() {
            addCriterion("appointments_number is null");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberIsNotNull() {
            addCriterion("appointments_number is not null");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberEqualTo(String value) {
            addCriterion("appointments_number =", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberNotEqualTo(String value) {
            addCriterion("appointments_number <>", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberGreaterThan(String value) {
            addCriterion("appointments_number >", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberGreaterThanOrEqualTo(String value) {
            addCriterion("appointments_number >=", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberLessThan(String value) {
            addCriterion("appointments_number <", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberLessThanOrEqualTo(String value) {
            addCriterion("appointments_number <=", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberLike(String value) {
            addCriterion("appointments_number like", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberNotLike(String value) {
            addCriterion("appointments_number not like", value, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberIn(List<String> values) {
            addCriterion("appointments_number in", values, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberNotIn(List<String> values) {
            addCriterion("appointments_number not in", values, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberBetween(String value1, String value2) {
            addCriterion("appointments_number between", value1, value2, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberNotBetween(String value1, String value2) {
            addCriterion("appointments_number not between", value1, value2, "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusIsNull() {
            addCriterion("appointments_status is null");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusIsNotNull() {
            addCriterion("appointments_status is not null");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusEqualTo(String value) {
            addCriterion("appointments_status =", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusNotEqualTo(String value) {
            addCriterion("appointments_status <>", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusGreaterThan(String value) {
            addCriterion("appointments_status >", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusGreaterThanOrEqualTo(String value) {
            addCriterion("appointments_status >=", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusLessThan(String value) {
            addCriterion("appointments_status <", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusLessThanOrEqualTo(String value) {
            addCriterion("appointments_status <=", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusLike(String value) {
            addCriterion("appointments_status like", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusNotLike(String value) {
            addCriterion("appointments_status not like", value, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusIn(List<String> values) {
            addCriterion("appointments_status in", values, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusNotIn(List<String> values) {
            addCriterion("appointments_status not in", values, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusBetween(String value1, String value2) {
            addCriterion("appointments_status between", value1, value2, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusNotBetween(String value1, String value2) {
            addCriterion("appointments_status not between", value1, value2, "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountIsNull() {
            addCriterion("min_loan_amount is null");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountIsNotNull() {
            addCriterion("min_loan_amount is not null");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountEqualTo(BigDecimal value) {
            addCriterion("min_loan_amount =", value, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountNotEqualTo(BigDecimal value) {
            addCriterion("min_loan_amount <>", value, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountGreaterThan(BigDecimal value) {
            addCriterion("min_loan_amount >", value, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountGreaterThanOrEqualTo(BigDecimal value) {
            addCriterion("min_loan_amount >=", value, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountLessThan(BigDecimal value) {
            addCriterion("min_loan_amount <", value, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountLessThanOrEqualTo(BigDecimal value) {
            addCriterion("min_loan_amount <=", value, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountIn(List<BigDecimal> values) {
            addCriterion("min_loan_amount in", values, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountNotIn(List<BigDecimal> values) {
            addCriterion("min_loan_amount not in", values, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("min_loan_amount between", value1, value2, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanAmountNotBetween(BigDecimal value1, BigDecimal value2) {
            addCriterion("min_loan_amount not between", value1, value2, "minLoanAmount");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationIsNull() {
            addCriterion("min_loan_duration is null");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationIsNotNull() {
            addCriterion("min_loan_duration is not null");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationEqualTo(String value) {
            addCriterion("min_loan_duration =", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationNotEqualTo(String value) {
            addCriterion("min_loan_duration <>", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationGreaterThan(String value) {
            addCriterion("min_loan_duration >", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationGreaterThanOrEqualTo(String value) {
            addCriterion("min_loan_duration >=", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationLessThan(String value) {
            addCriterion("min_loan_duration <", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationLessThanOrEqualTo(String value) {
            addCriterion("min_loan_duration <=", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationLike(String value) {
            addCriterion("min_loan_duration like", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationNotLike(String value) {
            addCriterion("min_loan_duration not like", value, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationIn(List<String> values) {
            addCriterion("min_loan_duration in", values, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationNotIn(List<String> values) {
            addCriterion("min_loan_duration not in", values, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationBetween(String value1, String value2) {
            addCriterion("min_loan_duration between", value1, value2, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationNotBetween(String value1, String value2) {
            addCriterion("min_loan_duration not between", value1, value2, "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqIsNull() {
            addCriterion("hope_pledge_seq is null");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqIsNotNull() {
            addCriterion("hope_pledge_seq is not null");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqEqualTo(String value) {
            addCriterion("hope_pledge_seq =", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqNotEqualTo(String value) {
            addCriterion("hope_pledge_seq <>", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqGreaterThan(String value) {
            addCriterion("hope_pledge_seq >", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqGreaterThanOrEqualTo(String value) {
            addCriterion("hope_pledge_seq >=", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqLessThan(String value) {
            addCriterion("hope_pledge_seq <", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqLessThanOrEqualTo(String value) {
            addCriterion("hope_pledge_seq <=", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqLike(String value) {
            addCriterion("hope_pledge_seq like", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqNotLike(String value) {
            addCriterion("hope_pledge_seq not like", value, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqIn(List<String> values) {
            addCriterion("hope_pledge_seq in", values, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqNotIn(List<String> values) {
            addCriterion("hope_pledge_seq not in", values, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqBetween(String value1, String value2) {
            addCriterion("hope_pledge_seq between", value1, value2, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqNotBetween(String value1, String value2) {
            addCriterion("hope_pledge_seq not between", value1, value2, "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andPauperTimeIsNull() {
            addCriterion("pauper_time is null");
            return (Criteria) this;
        }

        public Criteria andPauperTimeIsNotNull() {
            addCriterion("pauper_time is not null");
            return (Criteria) this;
        }

        public Criteria andPauperTimeEqualTo(Date value) {
            addCriterion("pauper_time =", value, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeNotEqualTo(Date value) {
            addCriterion("pauper_time <>", value, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeGreaterThan(Date value) {
            addCriterion("pauper_time >", value, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("pauper_time >=", value, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeLessThan(Date value) {
            addCriterion("pauper_time <", value, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeLessThanOrEqualTo(Date value) {
            addCriterion("pauper_time <=", value, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeIn(List<Date> values) {
            addCriterion("pauper_time in", values, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeNotIn(List<Date> values) {
            addCriterion("pauper_time not in", values, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeBetween(Date value1, Date value2) {
            addCriterion("pauper_time between", value1, value2, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andPauperTimeNotBetween(Date value1, Date value2) {
            addCriterion("pauper_time not between", value1, value2, "pauperTime");
            return (Criteria) this;
        }

        public Criteria andCancelReasonIsNull() {
            addCriterion("cancel_reason is null");
            return (Criteria) this;
        }

        public Criteria andCancelReasonIsNotNull() {
            addCriterion("cancel_reason is not null");
            return (Criteria) this;
        }

        public Criteria andCancelReasonEqualTo(String value) {
            addCriterion("cancel_reason =", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonNotEqualTo(String value) {
            addCriterion("cancel_reason <>", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonGreaterThan(String value) {
            addCriterion("cancel_reason >", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonGreaterThanOrEqualTo(String value) {
            addCriterion("cancel_reason >=", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonLessThan(String value) {
            addCriterion("cancel_reason <", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonLessThanOrEqualTo(String value) {
            addCriterion("cancel_reason <=", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonLike(String value) {
            addCriterion("cancel_reason like", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonNotLike(String value) {
            addCriterion("cancel_reason not like", value, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonIn(List<String> values) {
            addCriterion("cancel_reason in", values, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonNotIn(List<String> values) {
            addCriterion("cancel_reason not in", values, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonBetween(String value1, String value2) {
            addCriterion("cancel_reason between", value1, value2, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andCancelReasonNotBetween(String value1, String value2) {
            addCriterion("cancel_reason not between", value1, value2, "cancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonIsNull() {
            addCriterion("appoint_cancel_reason is null");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonIsNotNull() {
            addCriterion("appoint_cancel_reason is not null");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonEqualTo(String value) {
            addCriterion("appoint_cancel_reason =", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonNotEqualTo(String value) {
            addCriterion("appoint_cancel_reason <>", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonGreaterThan(String value) {
            addCriterion("appoint_cancel_reason >", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonGreaterThanOrEqualTo(String value) {
            addCriterion("appoint_cancel_reason >=", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonLessThan(String value) {
            addCriterion("appoint_cancel_reason <", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonLessThanOrEqualTo(String value) {
            addCriterion("appoint_cancel_reason <=", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonLike(String value) {
            addCriterion("appoint_cancel_reason like", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonNotLike(String value) {
            addCriterion("appoint_cancel_reason not like", value, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonIn(List<String> values) {
            addCriterion("appoint_cancel_reason in", values, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonNotIn(List<String> values) {
            addCriterion("appoint_cancel_reason not in", values, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonBetween(String value1, String value2) {
            addCriterion("appoint_cancel_reason between", value1, value2, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonNotBetween(String value1, String value2) {
            addCriterion("appoint_cancel_reason not between", value1, value2, "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andVersionIsNull() {
            addCriterion("version is null");
            return (Criteria) this;
        }

        public Criteria andVersionIsNotNull() {
            addCriterion("version is not null");
            return (Criteria) this;
        }

        public Criteria andVersionEqualTo(Integer value) {
            addCriterion("version =", value, "version");
            return (Criteria) this;
        }

        public Criteria andVersionNotEqualTo(Integer value) {
            addCriterion("version <>", value, "version");
            return (Criteria) this;
        }

        public Criteria andVersionGreaterThan(Integer value) {
            addCriterion("version >", value, "version");
            return (Criteria) this;
        }

        public Criteria andVersionGreaterThanOrEqualTo(Integer value) {
            addCriterion("version >=", value, "version");
            return (Criteria) this;
        }

        public Criteria andVersionLessThan(Integer value) {
            addCriterion("version <", value, "version");
            return (Criteria) this;
        }

        public Criteria andVersionLessThanOrEqualTo(Integer value) {
            addCriterion("version <=", value, "version");
            return (Criteria) this;
        }

        public Criteria andVersionIn(List<Integer> values) {
            addCriterion("version in", values, "version");
            return (Criteria) this;
        }

        public Criteria andVersionNotIn(List<Integer> values) {
            addCriterion("version not in", values, "version");
            return (Criteria) this;
        }

        public Criteria andVersionBetween(Integer value1, Integer value2) {
            addCriterion("version between", value1, value2, "version");
            return (Criteria) this;
        }

        public Criteria andVersionNotBetween(Integer value1, Integer value2) {
            addCriterion("version not between", value1, value2, "version");
            return (Criteria) this;
        }

        public Criteria andCreaterIsNull() {
            addCriterion("creater is null");
            return (Criteria) this;
        }

        public Criteria andCreaterIsNotNull() {
            addCriterion("creater is not null");
            return (Criteria) this;
        }

        public Criteria andCreaterEqualTo(String value) {
            addCriterion("creater =", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterNotEqualTo(String value) {
            addCriterion("creater <>", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterGreaterThan(String value) {
            addCriterion("creater >", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterGreaterThanOrEqualTo(String value) {
            addCriterion("creater >=", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterLessThan(String value) {
            addCriterion("creater <", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterLessThanOrEqualTo(String value) {
            addCriterion("creater <=", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterLike(String value) {
            addCriterion("creater like", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterNotLike(String value) {
            addCriterion("creater not like", value, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterIn(List<String> values) {
            addCriterion("creater in", values, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterNotIn(List<String> values) {
            addCriterion("creater not in", values, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterBetween(String value1, String value2) {
            addCriterion("creater between", value1, value2, "creater");
            return (Criteria) this;
        }

        public Criteria andCreaterNotBetween(String value1, String value2) {
            addCriterion("creater not between", value1, value2, "creater");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNull() {
            addCriterion("create_time is null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIsNotNull() {
            addCriterion("create_time is not null");
            return (Criteria) this;
        }

        public Criteria andCreateTimeEqualTo(Date value) {
            addCriterion("create_time =", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotEqualTo(Date value) {
            addCriterion("create_time <>", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThan(Date value) {
            addCriterion("create_time >", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("create_time >=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThan(Date value) {
            addCriterion("create_time <", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeLessThanOrEqualTo(Date value) {
            addCriterion("create_time <=", value, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeIn(List<Date> values) {
            addCriterion("create_time in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotIn(List<Date> values) {
            addCriterion("create_time not in", values, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeBetween(Date value1, Date value2) {
            addCriterion("create_time between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andCreateTimeNotBetween(Date value1, Date value2) {
            addCriterion("create_time not between", value1, value2, "createTime");
            return (Criteria) this;
        }

        public Criteria andEditorIsNull() {
            addCriterion("editor is null");
            return (Criteria) this;
        }

        public Criteria andEditorIsNotNull() {
            addCriterion("editor is not null");
            return (Criteria) this;
        }

        public Criteria andEditorEqualTo(String value) {
            addCriterion("editor =", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotEqualTo(String value) {
            addCriterion("editor <>", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorGreaterThan(String value) {
            addCriterion("editor >", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorGreaterThanOrEqualTo(String value) {
            addCriterion("editor >=", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorLessThan(String value) {
            addCriterion("editor <", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorLessThanOrEqualTo(String value) {
            addCriterion("editor <=", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorLike(String value) {
            addCriterion("editor like", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotLike(String value) {
            addCriterion("editor not like", value, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorIn(List<String> values) {
            addCriterion("editor in", values, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotIn(List<String> values) {
            addCriterion("editor not in", values, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorBetween(String value1, String value2) {
            addCriterion("editor between", value1, value2, "editor");
            return (Criteria) this;
        }

        public Criteria andEditorNotBetween(String value1, String value2) {
            addCriterion("editor not between", value1, value2, "editor");
            return (Criteria) this;
        }

        public Criteria andEditTimeIsNull() {
            addCriterion("edit_time is null");
            return (Criteria) this;
        }

        public Criteria andEditTimeIsNotNull() {
            addCriterion("edit_time is not null");
            return (Criteria) this;
        }

        public Criteria andEditTimeEqualTo(Date value) {
            addCriterion("edit_time =", value, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeNotEqualTo(Date value) {
            addCriterion("edit_time <>", value, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeGreaterThan(Date value) {
            addCriterion("edit_time >", value, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeGreaterThanOrEqualTo(Date value) {
            addCriterion("edit_time >=", value, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeLessThan(Date value) {
            addCriterion("edit_time <", value, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeLessThanOrEqualTo(Date value) {
            addCriterion("edit_time <=", value, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeIn(List<Date> values) {
            addCriterion("edit_time in", values, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeNotIn(List<Date> values) {
            addCriterion("edit_time not in", values, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeBetween(Date value1, Date value2) {
            addCriterion("edit_time between", value1, value2, "editTime");
            return (Criteria) this;
        }

        public Criteria andEditTimeNotBetween(Date value1, Date value2) {
            addCriterion("edit_time not between", value1, value2, "editTime");
            return (Criteria) this;
        }

        public Criteria andRemarkIsNull() {
            addCriterion("remark is null");
            return (Criteria) this;
        }

        public Criteria andRemarkIsNotNull() {
            addCriterion("remark is not null");
            return (Criteria) this;
        }

        public Criteria andRemarkEqualTo(String value) {
            addCriterion("remark =", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotEqualTo(String value) {
            addCriterion("remark <>", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkGreaterThan(String value) {
            addCriterion("remark >", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkGreaterThanOrEqualTo(String value) {
            addCriterion("remark >=", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkLessThan(String value) {
            addCriterion("remark <", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkLessThanOrEqualTo(String value) {
            addCriterion("remark <=", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkLike(String value) {
            addCriterion("remark like", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotLike(String value) {
            addCriterion("remark not like", value, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkIn(List<String> values) {
            addCriterion("remark in", values, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotIn(List<String> values) {
            addCriterion("remark not in", values, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkBetween(String value1, String value2) {
            addCriterion("remark between", value1, value2, "remark");
            return (Criteria) this;
        }

        public Criteria andRemarkNotBetween(String value1, String value2) {
            addCriterion("remark not between", value1, value2, "remark");
            return (Criteria) this;
        }

        public Criteria andCreaterIdIsNull() {
            addCriterion("creater_id is null");
            return (Criteria) this;
        }

        public Criteria andCreaterIdIsNotNull() {
            addCriterion("creater_id is not null");
            return (Criteria) this;
        }

        public Criteria andCreaterIdEqualTo(String value) {
            addCriterion("creater_id =", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdNotEqualTo(String value) {
            addCriterion("creater_id <>", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdGreaterThan(String value) {
            addCriterion("creater_id >", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdGreaterThanOrEqualTo(String value) {
            addCriterion("creater_id >=", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdLessThan(String value) {
            addCriterion("creater_id <", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdLessThanOrEqualTo(String value) {
            addCriterion("creater_id <=", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdLike(String value) {
            addCriterion("creater_id like", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdNotLike(String value) {
            addCriterion("creater_id not like", value, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdIn(List<String> values) {
            addCriterion("creater_id in", values, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdNotIn(List<String> values) {
            addCriterion("creater_id not in", values, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdBetween(String value1, String value2) {
            addCriterion("creater_id between", value1, value2, "createrId");
            return (Criteria) this;
        }

        public Criteria andCreaterIdNotBetween(String value1, String value2) {
            addCriterion("creater_id not between", value1, value2, "createrId");
            return (Criteria) this;
        }

        public Criteria andEditorIdIsNull() {
            addCriterion("editor_id is null");
            return (Criteria) this;
        }

        public Criteria andEditorIdIsNotNull() {
            addCriterion("editor_id is not null");
            return (Criteria) this;
        }

        public Criteria andEditorIdEqualTo(String value) {
            addCriterion("editor_id =", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdNotEqualTo(String value) {
            addCriterion("editor_id <>", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdGreaterThan(String value) {
            addCriterion("editor_id >", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdGreaterThanOrEqualTo(String value) {
            addCriterion("editor_id >=", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdLessThan(String value) {
            addCriterion("editor_id <", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdLessThanOrEqualTo(String value) {
            addCriterion("editor_id <=", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdLike(String value) {
            addCriterion("editor_id like", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdNotLike(String value) {
            addCriterion("editor_id not like", value, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdIn(List<String> values) {
            addCriterion("editor_id in", values, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdNotIn(List<String> values) {
            addCriterion("editor_id not in", values, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdBetween(String value1, String value2) {
            addCriterion("editor_id between", value1, value2, "editorId");
            return (Criteria) this;
        }

        public Criteria andEditorIdNotBetween(String value1, String value2) {
            addCriterion("editor_id not between", value1, value2, "editorId");
            return (Criteria) this;
        }

        public Criteria andCreditLevelIsNull() {
            addCriterion("credit_level is null");
            return (Criteria) this;
        }

        public Criteria andCreditLevelIsNotNull() {
            addCriterion("credit_level is not null");
            return (Criteria) this;
        }

        public Criteria andCreditLevelEqualTo(String value) {
            addCriterion("credit_level =", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelNotEqualTo(String value) {
            addCriterion("credit_level <>", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelGreaterThan(String value) {
            addCriterion("credit_level >", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelGreaterThanOrEqualTo(String value) {
            addCriterion("credit_level >=", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelLessThan(String value) {
            addCriterion("credit_level <", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelLessThanOrEqualTo(String value) {
            addCriterion("credit_level <=", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelLike(String value) {
            addCriterion("credit_level like", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelNotLike(String value) {
            addCriterion("credit_level not like", value, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelIn(List<String> values) {
            addCriterion("credit_level in", values, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelNotIn(List<String> values) {
            addCriterion("credit_level not in", values, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelBetween(String value1, String value2) {
            addCriterion("credit_level between", value1, value2, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andCreditLevelNotBetween(String value1, String value2) {
            addCriterion("credit_level not between", value1, value2, "creditLevel");
            return (Criteria) this;
        }

        public Criteria andIdLikeInsensitive(String value) {
            addCriterion("upper(id) like", value.toUpperCase(), "id");
            return (Criteria) this;
        }

        public Criteria andBussNoLikeInsensitive(String value) {
            addCriterion("upper(buss_no) like", value.toUpperCase(), "bussNo");
            return (Criteria) this;
        }

        public Criteria andGuaIdLikeInsensitive(String value) {
            addCriterion("upper(gua_id) like", value.toUpperCase(), "guaId");
            return (Criteria) this;
        }

        public Criteria andChanManIdLikeInsensitive(String value) {
            addCriterion("upper(chan_man_id) like", value.toUpperCase(), "chanManId");
            return (Criteria) this;
        }

        public Criteria andChannelNoLikeInsensitive(String value) {
            addCriterion("upper(channel_no) like", value.toUpperCase(), "channelNo");
            return (Criteria) this;
        }

        public Criteria andCreatCnoLikeInsensitive(String value) {
            addCriterion("upper(creat_cno) like", value.toUpperCase(), "creatCno");
            return (Criteria) this;
        }

        public Criteria andMainCidLikeInsensitive(String value) {
            addCriterion("upper(main_cid) like", value.toUpperCase(), "mainCid");
            return (Criteria) this;
        }

        public Criteria andStatusLikeInsensitive(String value) {
            addCriterion("upper(`status`) like", value.toUpperCase(), "status");
            return (Criteria) this;
        }

        public Criteria andChanManNameLikeInsensitive(String value) {
            addCriterion("upper(chan_man_name) like", value.toUpperCase(), "chanManName");
            return (Criteria) this;
        }

        public Criteria andLoanAmountLikeInsensitive(String value) {
            addCriterion("upper(loan_amount) like", value.toUpperCase(), "loanAmount");
            return (Criteria) this;
        }

        public Criteria andDeadlineLikeInsensitive(String value) {
            addCriterion("upper(deadline) like", value.toUpperCase(), "deadline");
            return (Criteria) this;
        }

        public Criteria andGuarantyWayLikeInsensitive(String value) {
            addCriterion("upper(guaranty_way) like", value.toUpperCase(), "guarantyWay");
            return (Criteria) this;
        }

        public Criteria andRepayWayLikeInsensitive(String value) {
            addCriterion("upper(repay_way) like", value.toUpperCase(), "repayWay");
            return (Criteria) this;
        }

        public Criteria andInterestRateLikeInsensitive(String value) {
            addCriterion("upper(interest_rate) like", value.toUpperCase(), "interestRate");
            return (Criteria) this;
        }

        public Criteria andTermUnitLikeInsensitive(String value) {
            addCriterion("upper(term_unit) like", value.toUpperCase(), "termUnit");
            return (Criteria) this;
        }

        public Criteria andLoanUseLikeInsensitive(String value) {
            addCriterion("upper(loan_use) like", value.toUpperCase(), "loanUse");
            return (Criteria) this;
        }

        public Criteria andOpStatusLikeInsensitive(String value) {
            addCriterion("upper(op_status) like", value.toUpperCase(), "opStatus");
            return (Criteria) this;
        }

        public Criteria andLoanTypeLikeInsensitive(String value) {
            addCriterion("upper(loan_type) like", value.toUpperCase(), "loanType");
            return (Criteria) this;
        }

        public Criteria andClientFromLikeInsensitive(String value) {
            addCriterion("upper(client_from) like", value.toUpperCase(), "clientFrom");
            return (Criteria) this;
        }

        public Criteria andChanManNoLikeInsensitive(String value) {
            addCriterion("upper(chan_man_no) like", value.toUpperCase(), "chanManNo");
            return (Criteria) this;
        }

        public Criteria andBrokersIdLikeInsensitive(String value) {
            addCriterion("upper(brokers_id) like", value.toUpperCase(), "brokersId");
            return (Criteria) this;
        }

        public Criteria andBrokersLikeInsensitive(String value) {
            addCriterion("upper(brokers) like", value.toUpperCase(), "brokers");
            return (Criteria) this;
        }

        public Criteria andBrokersMobileLikeInsensitive(String value) {
            addCriterion("upper(brokers_mobile) like", value.toUpperCase(), "brokersMobile");
            return (Criteria) this;
        }

        public Criteria andChaNameLikeInsensitive(String value) {
            addCriterion("upper(cha_name) like", value.toUpperCase(), "chaName");
            return (Criteria) this;
        }

        public Criteria andLoanHideLikeInsensitive(String value) {
            addCriterion("upper(loan_hide) like", value.toUpperCase(), "loanHide");
            return (Criteria) this;
        }

        public Criteria andHideCauseLikeInsensitive(String value) {
            addCriterion("upper(hide_cause) like", value.toUpperCase(), "hideCause");
            return (Criteria) this;
        }

        public Criteria andLoanSupportLikeInsensitive(String value) {
            addCriterion("upper(loan_support) like", value.toUpperCase(), "loanSupport");
            return (Criteria) this;
        }

        public Criteria andNoSupportCauseLikeInsensitive(String value) {
            addCriterion("upper(no_support_cause) like", value.toUpperCase(), "noSupportCause");
            return (Criteria) this;
        }

        public Criteria andLoanRelationLikeInsensitive(String value) {
            addCriterion("upper(loan_relation) like", value.toUpperCase(), "loanRelation");
            return (Criteria) this;
        }

        public Criteria andRepaymentSourceLikeInsensitive(String value) {
            addCriterion("upper(repayment_source) like", value.toUpperCase(), "repaymentSource");
            return (Criteria) this;
        }

        public Criteria andSurverRemarkLikeInsensitive(String value) {
            addCriterion("upper(surver_remark) like", value.toUpperCase(), "surverRemark");
            return (Criteria) this;
        }

        public Criteria andHopeLoanTimeLikeInsensitive(String value) {
            addCriterion("upper(hope_loan_time) like", value.toUpperCase(), "hopeLoanTime");
            return (Criteria) this;
        }

        public Criteria andLenderTypeLikeInsensitive(String value) {
            addCriterion("upper(lender_type) like", value.toUpperCase(), "lenderType");
            return (Criteria) this;
        }

        public Criteria andSurverShortMessageLikeInsensitive(String value) {
            addCriterion("upper(surver_short_message) like", value.toUpperCase(), "surverShortMessage");
            return (Criteria) this;
        }

        public Criteria andAppointmentLikeInsensitive(String value) {
            addCriterion("upper(appointment) like", value.toUpperCase(), "appointment");
            return (Criteria) this;
        }

        public Criteria andBussAreaLikeInsensitive(String value) {
            addCriterion("upper(buss_area) like", value.toUpperCase(), "bussArea");
            return (Criteria) this;
        }

        public Criteria andInstNoLikeInsensitive(String value) {
            addCriterion("upper(inst_no) like", value.toUpperCase(), "instNo");
            return (Criteria) this;
        }

        public Criteria andLendNoLikeInsensitive(String value) {
            addCriterion("upper(lend_no) like", value.toUpperCase(), "lendNo");
            return (Criteria) this;
        }

        public Criteria andLendNameLikeInsensitive(String value) {
            addCriterion("upper(lend_name) like", value.toUpperCase(), "lendName");
            return (Criteria) this;
        }

        public Criteria andProductIdLikeInsensitive(String value) {
            addCriterion("upper(product_id) like", value.toUpperCase(), "productId");
            return (Criteria) this;
        }

        public Criteria andProductNameLikeInsensitive(String value) {
            addCriterion("upper(product_name) like", value.toUpperCase(), "productName");
            return (Criteria) this;
        }

        public Criteria andBussAreanameLikeInsensitive(String value) {
            addCriterion("upper(buss_areaname) like", value.toUpperCase(), "bussAreaname");
            return (Criteria) this;
        }

        public Criteria andInstNameLikeInsensitive(String value) {
            addCriterion("upper(inst_name) like", value.toUpperCase(), "instName");
            return (Criteria) this;
        }

        public Criteria andOrgNameLikeInsensitive(String value) {
            addCriterion("upper(org_name) like", value.toUpperCase(), "orgName");
            return (Criteria) this;
        }

        public Criteria andIsBatchLikeInsensitive(String value) {
            addCriterion("upper(is_batch) like", value.toUpperCase(), "isBatch");
            return (Criteria) this;
        }

        public Criteria andCardUsernameLikeInsensitive(String value) {
            addCriterion("upper(card_username) like", value.toUpperCase(), "cardUsername");
            return (Criteria) this;
        }

        public Criteria andCardCertnoLikeInsensitive(String value) {
            addCriterion("upper(card_certno) like", value.toUpperCase(), "cardCertno");
            return (Criteria) this;
        }

        public Criteria andCardNumLikeInsensitive(String value) {
            addCriterion("upper(card_num) like", value.toUpperCase(), "cardNum");
            return (Criteria) this;
        }

        public Criteria andBankLikeInsensitive(String value) {
            addCriterion("upper(bank) like", value.toUpperCase(), "bank");
            return (Criteria) this;
        }

        public Criteria andSubBankLikeInsensitive(String value) {
            addCriterion("upper(sub_bank) like", value.toUpperCase(), "subBank");
            return (Criteria) this;
        }

        public Criteria andProvinceNameLikeInsensitive(String value) {
            addCriterion("upper(province_name) like", value.toUpperCase(), "provinceName");
            return (Criteria) this;
        }

        public Criteria andCityNameLikeInsensitive(String value) {
            addCriterion("upper(city_name) like", value.toUpperCase(), "cityName");
            return (Criteria) this;
        }

        public Criteria andCardUserNoLikeInsensitive(String value) {
            addCriterion("upper(card_user_no) like", value.toUpperCase(), "cardUserNo");
            return (Criteria) this;
        }

        public Criteria andTaskTypeLikeInsensitive(String value) {
            addCriterion("upper(task_type) like", value.toUpperCase(), "taskType");
            return (Criteria) this;
        }

        public Criteria andTaskBegintimeLikeInsensitive(String value) {
            addCriterion("upper(task_begintime) like", value.toUpperCase(), "taskBegintime");
            return (Criteria) this;
        }

        public Criteria andTaskStatusLikeInsensitive(String value) {
            addCriterion("upper(task_status) like", value.toUpperCase(), "taskStatus");
            return (Criteria) this;
        }

        public Criteria andCustNameLikeInsensitive(String value) {
            addCriterion("upper(cust_name) like", value.toUpperCase(), "custName");
            return (Criteria) this;
        }

        public Criteria andTaskNameLikeInsensitive(String value) {
            addCriterion("upper(task_name) like", value.toUpperCase(), "taskName");
            return (Criteria) this;
        }

        public Criteria andTaskNoLikeInsensitive(String value) {
            addCriterion("upper(task_no) like", value.toUpperCase(), "taskNo");
            return (Criteria) this;
        }

        public Criteria andTaskPerNoLikeInsensitive(String value) {
            addCriterion("upper(task_per_no) like", value.toUpperCase(), "taskPerNo");
            return (Criteria) this;
        }

        public Criteria andUrgentBussLikeInsensitive(String value) {
            addCriterion("upper(urgent_buss) like", value.toUpperCase(), "urgentBuss");
            return (Criteria) this;
        }

        public Criteria andBussChangeLikeInsensitive(String value) {
            addCriterion("upper(buss_change) like", value.toUpperCase(), "bussChange");
            return (Criteria) this;
        }

        public Criteria andStatusChangeLikeInsensitive(String value) {
            addCriterion("upper(status_change) like", value.toUpperCase(), "statusChange");
            return (Criteria) this;
        }

        public Criteria andBussChangeFlowIdLikeInsensitive(String value) {
            addCriterion("upper(buss_change_flow_id) like", value.toUpperCase(), "bussChangeFlowId");
            return (Criteria) this;
        }

        public Criteria andHouseIdLikeInsensitive(String value) {
            addCriterion("upper(house_id) like", value.toUpperCase(), "houseId");
            return (Criteria) this;
        }

        public Criteria andAppointmentsNumberLikeInsensitive(String value) {
            addCriterion("upper(appointments_number) like", value.toUpperCase(), "appointmentsNumber");
            return (Criteria) this;
        }

        public Criteria andAppointmentsStatusLikeInsensitive(String value) {
            addCriterion("upper(appointments_status) like", value.toUpperCase(), "appointmentsStatus");
            return (Criteria) this;
        }

        public Criteria andMinLoanDurationLikeInsensitive(String value) {
            addCriterion("upper(min_loan_duration) like", value.toUpperCase(), "minLoanDuration");
            return (Criteria) this;
        }

        public Criteria andHopePledgeSeqLikeInsensitive(String value) {
            addCriterion("upper(hope_pledge_seq) like", value.toUpperCase(), "hopePledgeSeq");
            return (Criteria) this;
        }

        public Criteria andCancelReasonLikeInsensitive(String value) {
            addCriterion("upper(cancel_reason) like", value.toUpperCase(), "cancelReason");
            return (Criteria) this;
        }

        public Criteria andAppointCancelReasonLikeInsensitive(String value) {
            addCriterion("upper(appoint_cancel_reason) like", value.toUpperCase(), "appointCancelReason");
            return (Criteria) this;
        }

        public Criteria andCreaterLikeInsensitive(String value) {
            addCriterion("upper(creater) like", value.toUpperCase(), "creater");
            return (Criteria) this;
        }

        public Criteria andEditorLikeInsensitive(String value) {
            addCriterion("upper(editor) like", value.toUpperCase(), "editor");
            return (Criteria) this;
        }

        public Criteria andRemarkLikeInsensitive(String value) {
            addCriterion("upper(remark) like", value.toUpperCase(), "remark");
            return (Criteria) this;
        }

        public Criteria andCreaterIdLikeInsensitive(String value) {
            addCriterion("upper(creater_id) like", value.toUpperCase(), "createrId");
            return (Criteria) this;
        }

        public Criteria andEditorIdLikeInsensitive(String value) {
            addCriterion("upper(editor_id) like", value.toUpperCase(), "editorId");
            return (Criteria) this;
        }

        public Criteria andCreditLevelLikeInsensitive(String value) {
            addCriterion("upper(credit_level) like", value.toUpperCase(), "creditLevel");
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