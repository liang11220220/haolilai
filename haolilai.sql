/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306_copy
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : haolilai

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-15 09:17:39
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `things`
-- ----------------------------
DROP TABLE IF EXISTS `things`;
CREATE TABLE `things` (
  `id` int(12) NOT NULL auto_increment,
  `name` varchar(20) NOT NULL,
  `type` int(5) NOT NULL,
  `price1` float(10,0) NOT NULL,
  `price2` float(10,0) NOT NULL,
  `des` varchar(30) default NULL,
  `spe1` varchar(30) NOT NULL,
  `spe2` varchar(30) NOT NULL,
  `img` varchar(30) NOT NULL,
  `ximg1` varchar(30) NOT NULL,
  `ximg2` varchar(30) NOT NULL,
  `bimg1` varchar(30) NOT NULL,
  `bimg2` varchar(30) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of things
-- ----------------------------
INSERT INTO `things` VALUES ('1', '浪漫甜心', '1', '229', '389', 'ROMANTIC SWEETHEART', '14cm*14cm', '18cm*18cm', '/images/img/1.jpg', '/images/ximg/1.jpg', '/images/ximg/1-1.jpg', '/images/bimg/1.jpg', '/images/bimg/1-1.jpg');
INSERT INTO `things` VALUES ('2', '玫瑰物语', '1', '229', '389', 'STORY OF ROSES', '14cm*14cm', '18cm*18cm', '/images/img/2.jpg', '/images/ximg/2.jpg', '/images/ximg/2-2.jpg', '/images/bimg/2.jpg', '/images/bimg/2-2.jpg');
INSERT INTO `things` VALUES ('3', '玫瑰花园', '1', '229', '389', '沈阳需提前3小时以上预定', '14cm*14cm', '18cm*18cm', '/images/img/3.jpg', '/images/ximg/3.jpg', '/images/ximg/3-3.jpg', '/images/bimg/3.jpg', '/images/bimg/3-3.jpg');
INSERT INTO `things` VALUES ('4', '玫瑰之爱', '1', '229', '389', '沈阳需提前3小时以上预定', '14cm*14cm', '18cm*18cm', '/images/img/4.jpg', '/images/ximg/4.jpg', '/images/ximg/4-4.jpg', '/images/bimg/4.jpg', '/images/bimg/4-4.jpg');
INSERT INTO `things` VALUES ('5', '美丽人生', '1', '229', '389', ' ', '14cm*14cm', '18cm*18cm', '/images/img/5.jpg', '/images/ximg/5.jpg', '/images/ximg/5-5.jpg', '/images/bimg/5.jpg', '/images/bimg/5-5.jpg');
INSERT INTO `things` VALUES ('6', '甜蜜花舞', '1', '229', '389', ' ', '14cm*14cm', '18cm*18cm', '/images/img/6.jpg', '/images/ximg/6.jpg', '/images/ximg/6-6.jpg', '/images/bimg/6.jpg', '/images/bimg/6-6.jpg');
INSERT INTO `things` VALUES ('7', '好运连连', '1', '229', '389', '温馨提示此款蛋糕需提前24小时订购', '14cm*14cm', '18cm*18cm', '/images/img/7.jpg', '/images/ximg/7.jpg', '/images/ximg/7-7.jpg', '/images/bimg/7.jpg', '/images/bimg/7-7.jpg');
INSERT INTO `things` VALUES ('8', '心意满满', '1', '269', '429', '温馨提示此款蛋糕需提前24小时订购', '14cm*14cm', '18cm*18cm', '/images/img/8.jpg', '/images/ximg/8.jpg', '/images/ximg/8-8.jpg', '/images/bimg/8.jpg', '/images/bimg/8-8.jpg');
INSERT INTO `things` VALUES ('9', '珍情', '1', '239', '399', ' ', '14cm*14cm', '18cm*18cm', '/images/img/9.jpg', '/images/ximg/9.jpg', '/images/ximg/9-9.jpg', '/images/bimg/9.jpg', '/images/bimg/9-9.jpg');
INSERT INTO `things` VALUES ('10', '臻爱礼盒', '1', '239', '399', 'BOTE -CADEAU POUR AMOUR PARFAI', '14cm*14cm', '18cm*18cm', '/images/img/10.jpg', '/images/ximg/10.jpg', '/images/ximg/10-10.jpg', '/images/bimg/10.jpg', '/images/bimg/10-10.jpg');
INSERT INTO `things` VALUES ('11', '圆满', '1', '299', '459', ' ', '14cm*14cm', '18cm*18cm', '/images/img/11.jpg', '/images/ximg/11.jpg', '/images/ximg/11-11.jpg', '/images/bimg/11.jpg', '/images/bimg/11-11.jpg');
INSERT INTO `things` VALUES ('12', '提拉米苏', '1', '199', '359', '温馨提示此款蛋糕需提前2天订购', '14cm*14cm', '18cm*18cm', '/images/img/12.jpg', '/images/ximg/12.jpg', '/images/ximg/12-12.jpg', '/images/bimg/12.jpg', '/images/bimg/12-12.jpg');
INSERT INTO `things` VALUES ('13', '生巧克力', '2', '25', '40', '不支持7天无理由退货', '小份', '大份', '/images/img/13.jpg', '/images/ximg/13.jpg', '/images/ximg/13-13.jpg', '/images/bimg/13.jpg', '/images/bimg/13-13.jpg');
INSERT INTO `things` VALUES ('14', '雪糕', '2', '16', '30', ' ', '小份', '大份', '/images/img/14.jpg', '/images/ximg/14.jpg', '/images/ximg/14-14.jpg', '/images/bimg/14.jpg', '/images/bimg/14-14.jpg');
INSERT INTO `things` VALUES ('15', '冰山熔岩', '2', '28', '45', ' ', '小份', '大份', '/images/img/15.jpg', '/images/ximg/15.jpg', '/images/ximg/15-15.jpg', '/images/bimg/15.jpg', '/images/bimg/15-15.jpg');
INSERT INTO `things` VALUES ('16', '丹麦式酸奶', '2', '39', '60', ' ', '小份', '大份', '/images/img/16.jpg', '/images/ximg/16.jpg', '/images/ximg/16-16.jpg', '/images/bimg/16.jpg', '/images/bimg/16-16.jpg');
INSERT INTO `things` VALUES ('17', '空气巧克力', '2', '38', '60', '不支持7天无理由退货', '小份', '大份', '/images/img/17.jpg', '/images/ximg/17.jpg', '/images/ximg/17-17.jpg', '/images/bimg/17.jpg', '/images/bimg/17-17.jpg');
INSERT INTO `things` VALUES ('18', '白桃', '2', '22', '40', '不支持7天无理由退货', '小份', '大份', '/images/img/18.jpg', '/images/ximg/18.jpg', '/images/ximg/18-18.jpg', '/images/bimg/18.jpg', '/images/bimg/18-18.jpg');
INSERT INTO `things` VALUES ('19', '北海道芝士牧场', '2', '20', '40', ' 满150包邮顺丰发货', '小份', '大份', '/images/img/19.jpg', '/images/ximg/19.jpg', '/images/ximg/19-19.jpg', '/images/bimg/19.jpg', '/images/bimg/19-19.jpg');
INSERT INTO `things` VALUES ('20', '花笺日记', '2', '58', '68', ' 满150包邮顺丰发货', '小份', '大份', '/images/img/20.jpg', '/images/ximg/20.jpg', '/images/ximg/20-20.jpg', '/images/bimg/20.jpg', '/images/bimg/20-20.jpg');
INSERT INTO `things` VALUES ('21', '蛋黄水滴饼干', '2', '39', '75', '不支持7天无理由退货', '小份', '大份', '/images/img/21.jpg', '/images/ximg/21.jpg', '/images/ximg/21-21.jpg', '/images/bimg/21.jpg', '/images/bimg/21-21.jpg');
INSERT INTO `things` VALUES ('22', '半熟芝士挞', '2', '45', '85', ' 满150包邮顺丰发货', '小份', '大份', '/images/img/22.jpg', '/images/ximg/22.jpg', '/images/ximg/22-22.jpg', '/images/bimg/22.jpg', '/images/bimg/22-22.jpg');
INSERT INTO `things` VALUES ('23', '甜霜', '2', '46', '85', ' 满150包邮顺丰发货', '小份', '大份', '/images/img/23.jpg', '/images/ximg/23.jpg', '/images/ximg/23-23.jpg', '/images/bimg/23.jpg', '/images/bimg/23-23.jpg');
INSERT INTO `things` VALUES ('24', '蜂蜜蛋糕', '2', '39', '70', ' 满150包邮顺丰发货', '小份', '大份', '/images/img/24.jpg', '/images/ximg/24.jpg', '/images/ximg/24-24.jpg', '/images/bimg/24.jpg', '/images/bimg/24-24.jpg');

-- ----------------------------
-- Table structure for `yonghu`
-- ----------------------------
DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu` (
  `tel` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY  (`tel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yonghu
-- ----------------------------
INSERT INTO `yonghu` VALUES ('15082387417', '602320948@qq.com', '96e79218965eb72c92a549dd5a330112');
INSERT INTO `yonghu` VALUES ('15082387418', '2200204345@qq.com', '96e79218965eb72c92a549dd5a330112');
