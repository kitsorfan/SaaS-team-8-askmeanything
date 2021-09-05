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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`userID`)
) DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'kitsos@mail.com','$2a$08$wwU707FGW4xEj/w.mv8ZuuJi7uD4H/FxHJ2Je/C4ohsU2HFAqZYE6','2021-07-28 12:23:17','2021-07-28 12:23:17'),(2,'stelios@mail.com','$2a$08$xpkvgqMR5EmqbfCgW7U2b.mcfLt3ki0woMbBibrQjN4iw1WbOYJQS','2021-07-28 12:23:17','2021-07-28 12:23:17'),(3,'vasilis@mail.com','$2a$08$QzP8wzhWWIC5IBmOOa4Q.eIlr4.cE/wibh.0247VNzQd/JIhr2KoC','2021-07-28 12:23:17','2021-07-28 12:23:17'),(4,'giorgos@mail.com','$2a$08$s5ioaQQ15N4aeMVodvfEY.W0GDu86G4gd/A1vDDxZo7/xR7Hx7URy','2021-07-28 20:32:52','2021-07-28 20:32:52'),(5,'kitsorfan@gmail.com','$2a$08$fvFBRiSAwJsqQwY2d5ywzONxjc454uu9zwscx2i8OH.Q6smvNYKBe','2021-07-30 09:24:58','2021-07-30 09:24:58');
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

-- Dump completed on 2021-09-02 12:54:17



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
-- Table structure for table `questiontags`
--

DROP TABLE IF EXISTS `questiontags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questiontags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questiontags`
--

LOCK TABLES `questiontags` WRITE;
/*!40000 ALTER TABLE `questiontags` DISABLE KEYS */;
INSERT INTO `questiontags` VALUES (1,'sports','2021-07-28 12:23:17','2021-07-28 12:23:17'),(2,'programming','2021-07-28 12:23:17','2021-07-28 12:23:17'),(3,'social life','2021-07-28 12:23:17','2021-07-28 12:23:17'),(4,'military','2021-07-28 12:23:17','2021-07-28 12:23:17'),(5,'religion','2021-07-28 12:23:17','2021-07-28 12:23:17'),(6,'politics','2021-07-28 12:23:17','2021-07-28 12:23:17'),(7,'school','2021-07-28 12:23:17','2021-07-28 12:23:17');
/*!40000 ALTER TABLE `questiontags` ENABLE KEYS */;
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
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `questionID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `qtext` varchar(5000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userID` int DEFAULT NULL,
  `tagID` int DEFAULT NULL,
  PRIMARY KEY (`questionID`),
  KEY `userID` (`userID`),
  KEY `tagID` (`tagID`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`tagID`) REFERENCES `questiontags` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,'Best programming language','I think that C is perhaps the best programming language ever! But I heard javascript is very popular. Which is the best?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,1),(2,'Worst nightmare for a programmer','What is your worst nightmare as a programmer?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,1),(3,'Pointers in Java','Does Java has pointers?','2021-07-28 12:23:17','2021-07-28 12:23:17',2,1),(4,'Football or Soccer','Should I say that I am a soccer player or a football player?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,2),(5,'Gym or track?','Should I run on the gym or its better outside?','2021-07-28 12:23:17','2021-07-28 12:23:17',3,2),(6,'Programming and relationships?','Is a programmer the ideal husband?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,3),(7,'42 Religion?','Why so many people think 42 is a holy number?','2021-07-28 12:23:17','2021-07-28 12:23:17',3,4),(8,'Best lazy military carreer','Best military for someone who don\'t want to be get tired?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,5),(9,'Paratrooper or marine?','Which is the best special force? How about hard training?','2021-07-28 12:23:17','2021-07-28 12:23:17',2,5),(10,'What is Obama Care?','What is the Obama Care program? Did it helped the american people?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,6),(11,'Merkel, Makron or Johnson?','Which of these three handle best the pandemic?','2021-07-28 12:23:17','2021-07-28 12:23:17',3,6),(12,'Does Iraq has nuclear weapons?','Should we get worried about secret nuclear programs in Iraq? Does ISS has scientists is its ranks?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,6),(13,'Is Covid19 a chinish biological weapon?','Did  China created coronavirus on purpose?','2021-07-28 12:23:17','2021-07-28 12:23:17',2,6),(14,'Quit Shool','Can I quit school?','2021-07-28 12:23:17','2021-07-28 12:23:17',3,6),(15,'NTUA or UoA','Should I attend informatics at UoA or ECE at NTUA?','2021-07-28 12:23:17','2021-07-28 12:23:17',1,6),(16,'Teacher career','Will I make a lot of money as a teacher?','2021-07-28 14:29:58','2021-07-28 14:29:58',1,6),(17,'How helpfull is school?','Will I learn something that will help in my life?','2021-07-28 14:33:06','2021-07-28 14:33:06',1,7),(18,'Nigeria School','Do Nigeria has schools for girls?','2021-07-28 14:59:10','2021-07-28 14:59:10',1,7),(19,'Schools during WW2','Did schools work during WW2?','2021-07-29 16:09:26','2021-07-29 16:09:26',1,7),(20,'Snow Fight','Is snowfight an olympic game?','2021-07-29 16:15:57','2021-07-29 16:15:57',1,3),(21,'Drink after gym','Should I drink alcohool after working out?','2021-07-29 16:16:37','2021-07-29 16:16:37',1,2),(22,'Lebron James or Giannis Antetokounmpo','Lebron James or Giannis Antetokounmpo','2021-07-29 16:17:34','2021-07-29 16:17:34',1,1),(23,'Lose weight','Best way to lose weight?','2021-07-29 16:52:39','2021-07-29 16:52:39',1,1),(24,'Hello World?','Why everyone uses hello world as a phrase?','2021-07-29 23:34:10','2021-07-29 23:34:10',1,2),(25,'SOA vs Microservices','What are the main differences between SOA and MS architectures?\nI summon Mr. Veskoukis to answer this!','2021-07-30 00:15:38','2021-07-30 00:15:38',1,2),(26,'Alexandra','Am I beautiful?','2021-07-30 20:40:25','2021-07-30 20:40:25',1,3),(27,'This is a really big question. We need to test our website so I am writing nonsense. Do you think that I will make it? I need to write down 1000 words...! Just kidding, 100 will be fine. What tag should I choose?','I will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\nI will never ask a silly question again. I promise. This is not a dummy question.\n','2021-07-30 20:50:01','2021-07-30 20:50:01',2,4),(28,'Second dummy question!','I will follow the rules!\nI promise I will!\nI will follow the rules!\nI promise I will!\nI will follow the rules!\nI promise I will!\nI will follow the rules!\nI promise I will!\nI will follow the rules!\nI promise I will!\nI will follow the rules!\nI promise I will!\nI will follow the rules!\nI promise I will!\n','2021-07-30 20:51:16','2021-07-30 20:51:16',2,6),(29,'Best island for family vacations?','Is Paros the best island for family vacations?\nHow about Andros?\nHas anyone been to Crete?','2021-07-30 23:38:24','2021-07-30 23:38:24',3,3),(30,'Daring today aren\'t we?','Programming at 4am?\nWanna get a heart attack at 35?','2021-07-31 00:47:35','2021-07-31 00:47:35',3,2),(31,'Best outfit for a wedding?','Should I wear a tie in my cousin\'s wedding?','2021-08-07 09:12:28','2021-08-07 09:12:28',1,3),(32,'HBO-Band of Brothers','Is  BoB historically accurate?','2021-08-08 11:22:52','2021-08-08 11:22:52',3,4),(33,'Why USA lost in Afganistan?','How this could happen? Didn\'t Biden expect the Talibans could take over the country in just a single week?','2021-08-21 13:39:44','2021-08-21 13:39:44',3,4),(34,'Λέτε να περάσουμε το μάθημα;','Πόσο πιθανό λέτε είναι να περάσουμε με καλό βαθμό τα SaaS;\nΓια τα προηγμένα αρχιτεκτονικής έχουμε κάποια ελπίδα;\nΤι θα γίνει επιτέλους με τα Πεδία Β & τα ΣΑΕ;','2021-08-22 17:34:04','2021-08-22 17:34:04',1,7);
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
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
) DEFAULT CHARSET=utf8mb4;
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
