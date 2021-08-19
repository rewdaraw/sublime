# ************************************************************
# Sequel Ace SQL dump
# バージョン 3038
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# ホスト: localhost (MySQL 5.7.35)
# データベース: sublime
# Generation Time: 2021-08-19 16:08:21 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# テーブルのダンプ join_requests
# ------------------------------------------------------------

DROP TABLE IF EXISTS `join_requests`;

CREATE TABLE `join_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `projectId` (`projectId`),
  CONSTRAINT `join_requests_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `join_requests_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `join_requests` WRITE;
/*!40000 ALTER TABLE `join_requests` DISABLE KEYS */;

INSERT INTO `join_requests` (`id`, `userId`, `projectId`, `status`, `updatedAt`, `createdAt`)
VALUES
	(1,1,1,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(2,2,1,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(3,3,1,0,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(4,2,2,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(5,3,2,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(6,1,2,0,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(7,2,3,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065');

/*!40000 ALTER TABLE `join_requests` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ likes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `likes`;

CREATE TABLE `likes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `projectId` (`projectId`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;

INSERT INTO `likes` (`id`, `userId`, `projectId`, `updatedAt`, `createdAt`)
VALUES
	(2,1,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(3,2,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(4,3,2,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(5,2,3,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065');

/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ progress_statuses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `progress_statuses`;

CREATE TABLE `progress_statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `progress_statuses` WRITE;
/*!40000 ALTER TABLE `progress_statuses` DISABLE KEYS */;

INSERT INTO `progress_statuses` (`id`, `rate`, `updatedAt`, `createdAt`)
VALUES
	(1,'10%','2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(2,'20%','2021-08-16 19:23:22.078','2021-08-16 19:23:22.078'),
	(3,'30%','2021-08-16 19:23:22.084','2021-08-16 19:23:22.084'),
	(4,'40%','2021-08-16 19:23:22.091','2021-08-16 19:23:22.091'),
	(5,'50%','2021-08-16 19:23:22.097','2021-08-16 19:23:22.097'),
	(6,'60%','2021-08-16 19:23:22.103','2021-08-16 19:23:22.103'),
	(7,'70%','2021-08-16 19:23:22.109','2021-08-16 19:23:22.109'),
	(8,'80%','2021-08-16 19:23:22.115','2021-08-16 19:23:22.115'),
	(9,'90%','2021-08-16 19:23:22.121','2021-08-16 19:23:22.121');

/*!40000 ALTER TABLE `progress_statuses` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ project_features
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_features`;

CREATE TABLE `project_features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `project_features` WRITE;
/*!40000 ALTER TABLE `project_features` DISABLE KEYS */;

INSERT INTO `project_features` (`id`, `description`, `updatedAt`, `createdAt`)
VALUES
	(1,'企業案件','2021-08-16 19:23:22.127','2021-08-16 19:23:22.127'),
	(2,'報酬あり','2021-08-16 19:23:22.135','2021-08-16 19:23:22.135'),
	(3,'実務経験者在籍','2021-08-16 19:23:22.141','2021-08-16 19:23:22.141'),
	(4,'エンジニア募集中','2021-08-16 19:23:22.147','2021-08-16 19:23:22.147'),
	(5,'デザイナー募集中','2021-08-16 19:23:22.153','2021-08-16 19:23:22.153');

/*!40000 ALTER TABLE `project_features` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ project_types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_types`;

CREATE TABLE `project_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `project_types` WRITE;
/*!40000 ALTER TABLE `project_types` DISABLE KEYS */;

INSERT INTO `project_types` (`id`, `description`, `updatedAt`, `createdAt`)
VALUES
	(1,'SNS','2021-08-16 19:23:22.159','2021-08-16 19:23:22.159'),
	(2,'ECサイト','2021-08-16 19:23:22.167','2021-08-16 19:23:22.167'),
	(3,'ブログサイト','2021-08-16 19:23:22.174','2021-08-16 19:23:22.174'),
	(4,'ホームページ','2021-08-16 19:23:22.180','2021-08-16 19:23:22.180'),
	(5,'一部機能のみ','2021-08-16 19:23:22.186','2021-08-16 19:23:22.186'),
	(6,'その他','2021-08-16 19:23:22.192','2021-08-16 19:23:22.192');

/*!40000 ALTER TABLE `project_types` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skillDescription` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `featureDescription` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `projectTypeId` int(11) NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `projectTypeId` (`projectTypeId`),
  CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`projectTypeId`) REFERENCES `project_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `title`, `description`, `skillDescription`, `featureDescription`, `projectTypeId`, `updatedAt`, `createdAt`)
VALUES
	(1,'project_name1','engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。\nもし経験ない場合はご相談ください、教えますので一緒にスキルアップしていきましょう！\nフロントエンドエンジニア / デザイナー絶賛募集中です。','engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。\nもし経験ない場合はご相談ください、教えますので一緒にスキルアップしていきましょう！\nフロントエンドエンジニア / デザイナー絶賛募集中です。','engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。\nもし経験ない場合はご相談ください、教えますので一緒にスキルアップしていきましょう！\nフロントエンドエンジニア / デザイナー絶賛募集中です。',1,'2021-08-16 19:24:47.093','2021-08-16 19:24:47.093'),
	(2,'project_name2','project2\'s description','project2\'s skill description','project2\'s feature description',1,'2021-08-16 19:24:47.106','2021-08-16 19:24:47.106'),
	(3,'project_name3','project3\'s description','project3\'s skill description','project3\'s feature description',2,'2021-08-16 19:24:47.113','2021-08-16 19:24:47.113');

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ projectstoprogress_statuses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projectstoprogress_statuses`;

CREATE TABLE `projectstoprogress_statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `progressStatusId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `progressStatusId` (`progressStatusId`),
  KEY `projectId` (`projectId`),
  CONSTRAINT `projectstoprogress_statuses_ibfk_1` FOREIGN KEY (`progressStatusId`) REFERENCES `progress_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `projectstoprogress_statuses_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `projectstoprogress_statuses` WRITE;
/*!40000 ALTER TABLE `projectstoprogress_statuses` DISABLE KEYS */;

INSERT INTO `projectstoprogress_statuses` (`id`, `progressStatusId`, `projectId`, `description`, `updatedAt`, `createdAt`)
VALUES
	(1,1,1,'プロジェクト設定','2021-08-17 20:51:36.412','2021-08-17 20:51:36.412'),
	(2,2,1,'少し進んだ','2021-08-17 20:51:36.412','2021-08-17 20:51:36.412'),
	(3,3,1,'さらに少し進んだ','2021-08-17 20:51:36.412','2021-08-17 20:51:36.412'),
	(4,1,2,'はじめたばっか','2021-08-17 20:51:36.412','2021-08-17 20:51:36.412'),
	(5,1,3,'ドラフト状態','2021-08-17 20:51:36.412','2021-08-17 20:51:36.412');

/*!40000 ALTER TABLE `projectstoprogress_statuses` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ projectstoproject_features
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projectstoproject_features`;

CREATE TABLE `projectstoproject_features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) NOT NULL,
  `projectFeatureId` int(11) NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `projectId` (`projectId`),
  KEY `projectFeatureId` (`projectFeatureId`),
  CONSTRAINT `projectstoproject_features_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `projectstoproject_features_ibfk_2` FOREIGN KEY (`projectFeatureId`) REFERENCES `project_features` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `projectstoproject_features` WRITE;
/*!40000 ALTER TABLE `projectstoproject_features` DISABLE KEYS */;

INSERT INTO `projectstoproject_features` (`id`, `projectId`, `projectFeatureId`, `updatedAt`, `createdAt`)
VALUES
	(1,1,1,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(2,1,2,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(3,2,3,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(4,2,4,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(5,3,5,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065');

/*!40000 ALTER TABLE `projectstoproject_features` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ projectstoskills
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projectstoskills`;

CREATE TABLE `projectstoskills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) NOT NULL,
  `skillId` int(11) NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `projectId` (`projectId`),
  KEY `skillId` (`skillId`),
  CONSTRAINT `projectstoskills_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `projectstoskills_ibfk_2` FOREIGN KEY (`skillId`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `projectstoskills` WRITE;
/*!40000 ALTER TABLE `projectstoskills` DISABLE KEYS */;

INSERT INTO `projectstoskills` (`id`, `projectId`, `skillId`, `updatedAt`, `createdAt`)
VALUES
	(1,1,2,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(2,2,3,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065'),
	(3,3,4,'2021-08-16 19:23:22.065','2021-08-16 19:23:22.065');

/*!40000 ALTER TABLE `projectstoskills` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ qas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `qas`;

CREATE TABLE `qas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `projectId` (`projectId`),
  CONSTRAINT `qas_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `qas_ibfk_2` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `qas` WRITE;
/*!40000 ALTER TABLE `qas` DISABLE KEYS */;

INSERT INTO `qas` (`id`, `userId`, `projectId`, `description`, `updatedAt`, `createdAt`)
VALUES
	(1,2,1,'userId2のデザイナーの質問','2021-08-18 02:49:33.333','2021-08-18 02:49:33.333'),
	(2,1,1,'userId2のデザイナーの質問に対するuserId1のエンジニア(発起人)の回答','2021-08-18 03:49:33.333','2021-08-18 03:49:33.333'),
	(3,3,1,'userId3のエンジニアの質問','2021-08-18 02:49:33.333','2021-08-18 02:49:33.333'),
	(4,1,2,'userId1のエンジニアの質問','2021-08-18 02:49:33.333','2021-08-18 02:49:33.333'),
	(5,2,3,'userId2のデザイナーの質問','2021-08-18 02:49:33.333','2021-08-18 02:49:33.333');

/*!40000 ALTER TABLE `qas` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ skills
# ------------------------------------------------------------

DROP TABLE IF EXISTS `skills`;

CREATE TABLE `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;

INSERT INTO `skills` (`id`, `description`, `updatedAt`, `createdAt`)
VALUES
	(1,'HTML','2021-08-16 19:18:14.700','2021-08-16 19:18:14.700'),
	(2,'CSS','2021-08-16 19:18:14.720','2021-08-16 19:18:14.720'),
	(3,'JavaScript','2021-08-16 19:18:14.726','2021-08-16 19:18:14.726'),
	(4,'TypeScript','2021-08-16 19:18:14.732','2021-08-16 19:18:14.732'),
	(5,'PHP','2021-08-16 19:18:14.738','2021-08-16 19:18:14.738'),
	(6,'Ruby','2021-08-16 19:18:14.744','2021-08-16 19:18:14.744'),
	(7,'Python','2021-08-16 19:18:14.750','2021-08-16 19:18:14.750'),
	(8,'Go','2021-08-16 19:18:14.755','2021-08-16 19:18:14.755'),
	(9,'Laravel','2021-08-16 19:18:14.761','2021-08-16 19:18:14.761'),
	(10,'Git','2021-08-16 19:18:14.767','2021-08-16 19:18:14.767'),
	(11,'Docker','2021-08-16 19:18:14.773','2021-08-16 19:18:14.773'),
	(12,'Figma','2021-08-16 19:18:14.779','2021-08-16 19:18:14.779'),
	(13,'XD','2021-08-16 19:18:14.785','2021-08-16 19:18:14.785'),
	(14,'Sketch','2021-08-16 19:18:14.790','2021-08-16 19:18:14.790');

/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;


# テーブルのダンプ skillstousers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `skillstousers`;

CREATE TABLE `skillstousers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `skillId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  KEY `skillId` (`skillId`),
  KEY `userId` (`userId`),
  CONSTRAINT `skillstousers_ibfk_1` FOREIGN KEY (`skillId`) REFERENCES `skills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `skillstousers_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# テーブルのダンプ users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `github_account_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_account_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `experience` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `users.email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `user_name`, `email`, `github_account_url`, `twitter_account_url`, `image_url`, `type`, `experience`, `description`, `updatedAt`, `createdAt`)
VALUES
	(1,'user_name1','user1@example.com','user1_github_url','user1_twitter_url','https://bit.ly/ryan-florence','デザイナー','2年くらい','はじめまして、user_name1です。','2021-08-16 19:18:14.796','2021-08-16 19:18:14.796'),
	(2,'user_name2','user2@example.com','user2_github_url','user2_twitter_url','https://bit.ly/dan-abramov','エンジニア','2年くらい','はじめまして、user_name2です。','2021-08-16 19:18:14.804','2021-08-16 19:18:14.804'),
	(3,'user_name3','user3@example.com','user3_github_url','user3_twitter_url','https://bit.ly/dan-abramov','エンジニア','2年くらい','はじめまして、user_name3です。','2021-08-16 19:18:14.804','2021-08-16 19:18:14.804');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
