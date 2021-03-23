CREATE TABLE `articles` (
    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `title` varchar(128) NOT NULL DEFAULT '' COMMENT '标题',
    `summary` varchar(1024) NOT NULL DEFAULT '' COMMENT '概要',
    `context` text COMMENT '内容',
    `view` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '查看次数',
    `like` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '点赞次数',
    `comment` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '查看次数',
    `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态：0：草稿；1：已发布；-1：已删除',
    `create_time` datetime NOT NULL DEFAULT '1000-01-01 00:00:00' COMMENT '创建时间',
    `update_time` datetime NOT NULL DEFAULT '1000-01-01 00:00:00' COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文章表';

CREATE TABLE `users` (
    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `email` varchar(128) NOT NULL DEFAULT '' COMMENT '邮箱',
    `nickname` varchar(64) NOT NULL DEFAULT '' COMMENT '呢称',
    `avatar` varchar(128) NOT NULL DEFAULT '' COMMENT '头像',
    `signature` varchar(128) NOT NULL DEFAULT '' COMMENT '个性签名',
    `password` varchar(128) NOT NULL DEFAULT '' COMMENT '密码',
    `mobile` bigint(20) NOT NULL DEFAULT '0' COMMENT '手机号码',
    `province` varchar(64) NOT NULL DEFAULT '' COMMENT '省市',
    `address` varchar(128) NOT NULL DEFAULT '' COMMENT '详细地址',
    `type` varchar(20) NOT NULL DEFAULT '1' COMMENT '用户类型：super:超级管理员；admin:管理员；user;',
    `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态：0：未激活；1：已激活；-1：已删除',
    `create_time` datetime NOT NULL DEFAULT '1000-01-01 00:00:00' COMMENT '创建时间',
    `update_time` datetime NOT NULL DEFAULT '1000-01-01 00:00:00' COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `k_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

CREATE TABLE `tags` (
    `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '类型：1：文章；2：用户；',
    `id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '文章/用户ID',
    `tag` varchar(32) NOT NULL DEFAULT '' COMMENT '标签',
    PRIMARY KEY (`type`, `id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='标签表';

CREATE TABLE `comments` (
    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    `article_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '文章ID',
    `user_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '用户ID',
    `context` text COMMENT '内容',
    `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态：0：未审核；1：已审核；-1：已删除',
    `create_time` datetime NOT NULL DEFAULT '1000-01-01 00:00:00' COMMENT '创建时间',
    PRIMARY KEY (`id`),
    KEY `k_article` (`article_id`, `status`, `create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='评论表';

CREATE TABLE `visits` (
    `time` varchar(32) NOT NULL DEFAULT '' COMMENT '时间',
    `count` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '次数',
    PRIMARY KEY (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='访问次数表';
