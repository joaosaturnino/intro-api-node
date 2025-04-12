-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 10.67.22.216    Database: bd_tcc_infonet_224_farmacia
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `farmacia`
--

DROP TABLE IF EXISTS `farmacia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmacia` (
  `farm_id` int(11) NOT NULL AUTO_INCREMENT,
  `farm_nome` varchar(50) NOT NULL,
  `farm_endereco` varchar(200) NOT NULL,
  `farm_telefone` varchar(15) DEFAULT NULL,
  `farm_email` varchar(80) NOT NULL,
  `farm_senha` varchar(48) NOT NULL,
  `cnpj` char(14) NOT NULL,
  `farm_logo` varchar(255) DEFAULT NULL,
  `func_id` int(11) DEFAULT NULL,
  `cid_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`farm_id`),
  UNIQUE KEY `cnpj` (`cnpj`),
  KEY `func_id` (`func_id`),
  KEY `cid_id` (`cid_id`),
  CONSTRAINT `farmacia_ibfk_1` FOREIGN KEY (`func_id`) REFERENCES `funcionarios` (`func_id`),
  CONSTRAINT `farmacia_ibfk_2` FOREIGN KEY (`cid_id`) REFERENCES `cidade` (`cidade_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmacia`
--

LOCK TABLES `farmacia` WRITE;
/*!40000 ALTER TABLE `farmacia` DISABLE KEYS */;
/*!40000 ALTER TABLE `farmacia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-11 22:10:22
