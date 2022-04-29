-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: te19
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `meeps`
--

DROP TABLE IF EXISTS `meeps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeps` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `body` varchar(140) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int unsigned DEFAULT NULL,
  `expiration_date` timestamp NULL DEFAULT NULL,
  `phonenumber` varchar(12) DEFAULT ' ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeps`
--

LOCK TABLES `meeps` WRITE;
/*!40000 ALTER TABLE `meeps` DISABLE KEYS */;
INSERT INTO `meeps` VALUES (10,'Gordon Pärenen','2022-03-23 11:38:10','2022-03-23 11:38:10',4,NULL,' '),(11,'Gordon Pärenen 3','2022-03-23 11:42:19','2022-03-23 11:42:19',5,NULL,' '),(12,'Gordon Pärenen 2','2022-03-23 11:42:21','2022-03-23 11:42:21',6,NULL,' '),(17,'Gordon Pärenen 0','2022-03-28 08:15:36','2022-03-28 08:15:36',4,NULL,' '),(68,'Gordon Pärenen 5','2022-04-04 09:04:55','2022-04-04 09:04:55',4,NULL,' '),(69,'Gordon Pärenen 18','2022-04-04 09:15:06','2022-04-04 09:15:06',7,NULL,' '),(70,'Jerker Sigge','2022-04-25 14:13:16','2022-04-25 14:13:16',NULL,NULL,' '),(71,'Jerker Sigge','2022-04-25 14:13:25','2022-04-25 14:13:25',4,NULL,' '),(72,'Teodor Daniel','2022-04-25 14:13:37','2022-04-25 14:13:37',4,NULL,' '),(73,'Per Söderberg','2022-04-25 14:14:23','2022-04-25 14:14:23',4,NULL,' '),(74,'Albin Svensson','2022-04-25 14:14:28','2022-04-25 14:14:28',4,NULL,' '),(75,'Håkan Birch','2022-04-25 14:14:39','2022-04-25 14:14:39',4,NULL,' '),(76,'Emanuel Jansson','2022-04-25 14:14:42','2022-04-25 14:14:42',4,NULL,' '),(77,'Björn Karlsson','2022-04-25 14:14:45','2022-04-25 14:14:45',4,NULL,' '),(78,'Andreas Eliasson','2022-04-25 14:14:48','2022-04-25 14:14:48',4,NULL,' '),(79,'Sven Larsson','2022-04-25 14:14:52','2022-04-25 14:14:52',4,NULL,' '),(80,'Claes Gunnarsson','2022-04-25 14:14:55','2022-04-25 14:14:55',4,NULL,' '),(81,'John Gustafsson','2022-04-25 14:14:57','2022-04-25 14:14:57',4,NULL,' '),(82,'Thomas Axelsson','2022-04-25 14:15:08','2022-04-25 14:15:08',4,NULL,' '),(87,NULL,'2022-04-29 07:25:37','2022-04-29 07:25:37',NULL,NULL,' '),(88,NULL,'2022-04-29 07:25:57','2022-04-29 07:25:57',NULL,NULL,' '),(89,NULL,'2022-04-29 07:29:49','2022-04-29 07:29:49',NULL,NULL,' '),(90,NULL,'2022-04-29 07:29:56','2022-04-29 07:29:56',NULL,NULL,' '),(91,NULL,'2022-04-29 07:31:12','2022-04-29 07:31:12',NULL,NULL,' '),(92,NULL,'2022-04-29 07:34:30','2022-04-29 07:34:30',NULL,NULL,' '),(93,NULL,'2022-04-29 07:34:47','2022-04-29 07:34:47',NULL,NULL,' '),(94,NULL,'2022-04-29 07:34:55','2022-04-29 07:34:55',NULL,NULL,' '),(95,NULL,'2022-04-29 07:35:10','2022-04-29 07:35:10',NULL,NULL,' '),(96,NULL,'2022-04-29 07:35:37','2022-04-29 07:35:37',NULL,NULL,' '),(97,NULL,'2022-04-29 07:36:39','2022-04-29 07:36:39',NULL,NULL,' ');
/*!40000 ALTER TABLE `meeps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(140) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Yows1234','$2b$10$jrQyAQ9.2N0eAhCNfyFMjeLSk6mzXY3oSQuc.vfCyGKawl26xNSvi'),(5,'Pows1234','$2b$10$.nzWXSUXjmlU103GqZSTvu5YYdkKYe6RLCqEGPRYduJ0HbIuhoBUa'),(6,'Flute1234','$2b$10$ZWag06iKHzGWOV.YOBra7e1OkdS6fw1NVGehvQMT4p79NPiuv2.Qm'),(7,'Booger','$2b$10$9OmXKUaARmjjYUSRIMwt9.Ffuzln4Gi4x2WfurcA9HNCACrVvBriO'),(8,'Admin1234','$2b$10$V5XaARjTaq4rFz9OUZCuz.nRQ5XD0zV1Q/JAzVf8HORIbl0hxQsM.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29 19:35:03
