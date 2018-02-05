/*
Navicat MySQL Data Transfer

Source Server         : 开发环境
Source Server Version : 50638
Source Host           : 172.18.1.112:3306
Source Database       : vegetable

Target Server Type    : MYSQL
Target Server Version : 50638
File Encoding         : 65001

Date: 2018-02-05 09:28:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `v_address`
-- ----------------------------
DROP TABLE IF EXISTS `v_address`;
CREATE TABLE `v_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `user_name` varchar(500) DEFAULT NULL COMMENT '收货人姓名',
  `user_phone` varchar(20) DEFAULT NULL COMMENT '收获人电话',
  `user_address` varchar(500) DEFAULT NULL COMMENT '收货人地址',
  `status` varchar(10) DEFAULT NULL COMMENT '地址状态01-默认',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of v_address
-- ----------------------------
INSERT INTO `v_address` VALUES ('1', '1', '马宇驰', '18334534388', 'BEIJIG', '01');
INSERT INTO `v_address` VALUES ('2', '1', 'myc', '12365478998', 'SSDDS', '00');
INSERT INTO `v_address` VALUES ('3', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('4', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('5', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('6', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('7', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('8', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('9', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('10', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('11', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('12', null, '', '', '', null);
INSERT INTO `v_address` VALUES ('13', null, '111', '222', '333', '00');
INSERT INTO `v_address` VALUES ('14', '1', '111', '222', '333', '00');
INSERT INTO `v_address` VALUES ('15', '1', '222', '2222', '22222', '00');

-- ----------------------------
-- Table structure for `v_business`
-- ----------------------------
DROP TABLE IF EXISTS `v_business`;
CREATE TABLE `v_business` (
  `b_id` int(11) NOT NULL DEFAULT '0',
  `b_name` varchar(50) DEFAULT NULL,
  `b_remark` varchar(300) DEFAULT NULL COMMENT '备注',
  `b_url` varchar(300) DEFAULT NULL COMMENT '图片地址',
  `b_type` varchar(10) DEFAULT NULL COMMENT '类型',
  `b_price` decimal(10,4) DEFAULT NULL COMMENT '价格',
  `b_todaycommend` varchar(10) NOT NULL DEFAULT '',
  `b_create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`b_id`,`b_todaycommend`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of v_business
-- ----------------------------
INSERT INTO `v_business` VALUES ('1', 'aa', '充足', 'http://pic36.photophoto.cn/20150805/0035035572454259_b.jpg', '1', '12.0000', '1', null);
INSERT INTO `v_business` VALUES ('2', 'bb', '紧张', 'http://pic.58pic.com/58pic/13/88/43/42y58PICtHu_1024.jpg', '1', '13.0000', '1', null);
INSERT INTO `v_business` VALUES ('3', 'cc', '售罄', 'http://pic.58pic.com/58pic/13/88/43/42y58PICtHu_1024.jpg', '1', '11.0000', '1', null);

-- ----------------------------
-- Table structure for `v_order`
-- ----------------------------
DROP TABLE IF EXISTS `v_order`;
CREATE TABLE `v_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL COMMENT '用户id',
  `address_id` int(11) DEFAULT NULL COMMENT '收货地址id',
  `order_state` varchar(50) DEFAULT NULL COMMENT '订单状态 1  待处理，2  配送中，3 已完成，4 退货中，5 退货完成',
  `order_num` varchar(50) DEFAULT NULL COMMENT '订单编号',
  `order_total` decimal(10,3) DEFAULT NULL COMMENT '订单价值',
  `order_create_time` datetime DEFAULT NULL COMMENT '订单创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of v_order
-- ----------------------------
INSERT INTO `v_order` VALUES ('1', '1', '1', '1', '2', '73.000', '2018-01-05 15:23:12');
INSERT INTO `v_order` VALUES ('2', '1', '1', '1', '3', '86.000', '2018-01-05 11:14:20');
INSERT INTO `v_order` VALUES ('3', '1', '1', '1', '4', '35.000', '2018-01-05 12:18:25');
INSERT INTO `v_order` VALUES ('4', '1', '1', '1', '1', '35.000', '2018-01-05 12:18:47');
INSERT INTO `v_order` VALUES ('5', '1', '1', '1', '2', '98.000', '2018-01-05 14:22:50');

-- ----------------------------
-- Table structure for `v_user`
-- ----------------------------
DROP TABLE IF EXISTS `v_user`;
CREATE TABLE `v_user` (
  `u_id` int(11) NOT NULL DEFAULT '0',
  `u_name` varchar(50) DEFAULT NULL,
  `u_type` varchar(10) DEFAULT NULL,
  `u_password` varchar(50) DEFAULT NULL,
  `u_create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of v_user
-- ----------------------------
INSERT INTO `v_user` VALUES ('1', 'myc', '1', '123456', '2018-01-03 15:22:02');
