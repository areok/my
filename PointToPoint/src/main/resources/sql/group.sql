CREATE TABLE `my_group` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(30) DEFAULT NULL COMMENT '组命称',
  `group_num` bigint(20) DEFAULT NULL COMMENT '组成员数目',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;