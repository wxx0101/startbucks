/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50542
 Source Host           : localhost:3306
 Source Schema         : bpm_db

 Target Server Type    : MySQL
 Target Server Version : 50542
 File Encoding         : 65001

 Date: 05/06/2019 15:38:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for overtime
-- ----------------------------
DROP TABLE IF EXISTS `overtime`;
CREATE TABLE `overtime` (
  `applicationNumber` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '申请单号',
  `uid` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '申请人id',
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '申请类型 ()',
  `startTime` datetime DEFAULT NULL COMMENT '开始日期',
  `endTime` datetime DEFAULT NULL COMMENT '结束日期',
  `describes` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '描述',
  `annex` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '附件',
  `status` enum('0','1','2','3') COLLATE utf8_unicode_ci DEFAULT '0' COMMENT '处理状态',
  `auditor` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '审核信息',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  `list_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'overtime' COMMENT '数据类型',
  PRIMARY KEY (`applicationNumber`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of overtime
-- ----------------------------
BEGIN;
INSERT INTO `overtime` VALUES ('1jo1h0bv0ew0', '3a9f12z1ey200003a9f12z1ey20000', '2', '2019-05-23 00:00:00', '2019-05-24 00:00:00', 'adasdasd', '[\"/uploads/img-1558536899548.jpg\",\"/uploads/img-1558536903953.jpg\"]', '1', '[{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1}]', '2019-05-22 22:55:05', 'overtime');
INSERT INTO `overtime` VALUES ('1nfitmyzf1k0', '3a9f12z1ey200003a9f12z1ey20000', '1', '2019-05-25 00:00:00', '2019-05-26 00:00:00', '111', '[\"/uploads/img-1558533917618.png\"]', '1', '[{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1}]', '2019-05-22 22:05:19', 'overtime');
INSERT INTO `overtime` VALUES ('2j48j5k3yz20', '21ma84sk2tkw00021ma84sk2tkw000', '1', '2019-05-22 00:00:00', '2019-05-24 00:00:00', '好好补补', '[]', '2', '[{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1}]', '2019-05-22 23:29:19', 'overtime');
INSERT INTO `overtime` VALUES ('2k906ou92go0', '21ma84sk2tkw00021ma84sk2tkw000', '2', '2019-05-22 00:00:00', '2019-05-31 00:00:00', '干活', '[]', '2', '[{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1},{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1}]', '2019-05-22 23:38:27', 'overtime');
INSERT INTO `overtime` VALUES ('2mbn5gbylmy0', '21ma84sk2tkw00021ma84sk2tkw000', '3', '2019-05-22 00:00:00', '2019-05-25 00:00:00', '不知道', '[\"/uploads/img-1558515845020.png\"]', '0', NULL, '2019-05-22 17:04:06', 'overtime');
INSERT INTO `overtime` VALUES ('2o6qcbgt4v00', '21ma84sk2tkw00021ma84sk2tkw000', '2', '2019-05-23 00:00:00', '2019-05-31 00:00:00', '结婚', '[\"/uploads/img-1558515936862.jpg\"]', '0', NULL, '2019-05-22 17:05:38', 'overtime');
INSERT INTO `overtime` VALUES ('2ptphwmotx40', '3a9f12z1ey200003a9f12z1ey20000', '2', '2019-05-22 00:00:00', '2019-05-25 00:00:00', '此时间段休年假，望批准。', '[\"/uploads/img-1558516171136.jpg\",\"/uploads/img-1558516176894.jpg\"]', '1', '[{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1}]', '2019-05-22 17:09:38', 'overtime');
INSERT INTO `overtime` VALUES ('2r3pcvdpx7o0', '3a9f12z1ey200003a9f12z1ey20000', '1', '2019-05-22 00:00:00', '2019-05-31 00:00:00', '去远方旅游', '[\"/uploads/img-1558516355293.jpg\",\"/uploads/img-1558516359265.jpg\",\"/uploads/img-1558516364831.jpg\"]', '1', '[{\"avatar\":\"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg\",\"nickname\":\"刘大雨\",\"email\":null,\"phone\":\"13683599382\",\"wechat\":null,\"remark\":\"同意\",\"status\":1}]', '2019-05-22 17:12:46', 'overtime');
INSERT INTO `overtime` VALUES ('3b08jakw2ry0', '21ma84sk2tkw00021ma84sk2tkw000', '2', '2019-05-21 00:00:00', '2019-05-23 00:00:00', '吃饭', '[]', '1', NULL, '2019-05-21 10:44:54', 'overtime');
INSERT INTO `overtime` VALUES ('3gvn7916rwg0', '21ma84sk2tkw00021ma84sk2tkw000', '3', '2019-05-23 00:00:00', '2019-05-24 00:00:00', '做不完了加班做', '[]', '0', NULL, '2019-05-21 10:56:26', 'overtime');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户id',
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) CHARACTER SET latin1 DEFAULT NULL COMMENT '用户头像',
  `nickname` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '用户昵称',
  `sex` enum('0','1') CHARACTER SET latin1 DEFAULT NULL COMMENT '性别',
  `age` int(3) DEFAULT NULL COMMENT '年龄',
  `phone` varchar(11) CHARACTER SET latin1 DEFAULT NULL COMMENT '手机号',
  `email` varchar(255) CHARACTER SET latin1 DEFAULT NULL COMMENT '邮箱',
  `wechat` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT '微信号',
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `created_at` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('21ma84sk2tkw00021ma84sk2tkw000', '123456', 'https://mirror-gold-cdn.xitu.io/168e08f3f4e1518c26d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1', '刘宇', '1', NULL, '13683599380', NULL, NULL, '2019-05-20 16:24:59', NULL);
INSERT INTO `user` VALUES ('3a9f12z1ey200003a9f12z1ey20000', '123456', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg', '刘大雨', NULL, NULL, '13683599382', NULL, NULL, '2019-05-22 17:07:48', NULL);
COMMIT;

-- ----------------------------
-- Table structure for vacation
-- ----------------------------
DROP TABLE IF EXISTS `vacation`;
CREATE TABLE `vacation` (
  `applicationNumber` varchar(100) COLLATE utf8_unicode_ci NOT NULL COMMENT '申请单号',
  `uid` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '申请人id',
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '申请类型 ()',
  `startTime` datetime DEFAULT NULL COMMENT '开始日期',
  `endTime` datetime DEFAULT NULL COMMENT '结束日期',
  `describes` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '描述',
  `annex` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '附件',
  `status` enum('0','1','2') COLLATE utf8_unicode_ci DEFAULT '0' COMMENT '处理状态',
  `auditor` varchar(2000) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '审核信息',
  `list_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'vacation' COMMENT '数据类型',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`applicationNumber`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of vacation
-- ----------------------------
BEGIN;
INSERT INTO `vacation` VALUES ('2q12qr6y9880', '21ma84sk2tkw00021ma84sk2tkw000', '1', '2019-05-29 00:00:00', '2019-05-31 00:00:00', '5555555566', '[]', '0', NULL, 'vacation', '2019-05-22 23:46:12');
INSERT INTO `vacation` VALUES ('2r6rhka9uty0', '21ma84sk2tkw00021ma84sk2tkw000', '2', '2019-05-22 00:00:00', '2019-05-31 00:00:00', '哈哈哈今年', '[]', '0', NULL, 'vacation', '2019-05-22 23:42:01');
INSERT INTO `vacation` VALUES ('347fr4d3boc0', '3a9f12z1ey200003a9f12z1ey20000', '2', '2019-05-22 00:00:00', '2019-05-24 00:00:00', '回家娶媳妇', '[\"/uploads/img-1558537910425.jpg\"]', '0', NULL, 'vacation', '2019-05-22 23:11:51');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
