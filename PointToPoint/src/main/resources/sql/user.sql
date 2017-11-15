CREATE TABLE `my_user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL COMMENT '姓名',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_index` (`name`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;