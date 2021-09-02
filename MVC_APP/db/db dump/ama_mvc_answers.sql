-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ama_mvc
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `answerID` int NOT NULL AUTO_INCREMENT,
  `atext` varchar(10000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userID` int DEFAULT NULL,
  `questionID` int DEFAULT NULL,
  PRIMARY KEY (`answerID`),
  KEY `userID` (`userID`),
  KEY `questionID` (`questionID`),
  CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`questionID`) REFERENCES `questions` (`questionID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (1,'Test answering!','2021-07-30 23:12:58','2021-07-30 23:12:58',2,28),(2,'In some areas,  yes. In others not.','2021-07-30 23:15:02','2021-07-30 23:15:02',2,19),(3,'Very nice question. I don\'t know the answer! :)','2021-08-06 22:31:07','2021-08-06 22:31:07',2,28),(4,'Yes it pretty much is.','2021-08-08 11:23:24','2021-08-08 11:23:24',2,32),(5,'Skopelos or Andros.','2021-08-08 11:23:45','2021-08-08 11:23:45',2,29),(6,'Hello you!\n','2021-08-08 11:23:55','2021-08-08 11:23:55',2,24),(7,'It\'s all because of the Islamic ideology. The afghan troops had  nothing to believe in so the didn\'t fight. The president just wanted the money. The USA had no more profit. That\'s it. ','2021-08-21 13:42:14','2021-08-21 13:42:14',2,33),(8,'Yes I think it is.','2021-08-21 15:31:41','2021-08-21 15:31:41',1,32),(9,'Βασικά η Κίνα χρηματοδοτεί κρυφά τους Ταλιμπάν για  να αυξήσει την επιρροή της στην Ταϊβάν.','2021-08-21 21:22:35','2021-08-21 21:22:35',1,33);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-02 12:54:16
