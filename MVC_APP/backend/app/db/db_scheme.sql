/*
Ask Me Anything - Team 8:
~Stelios Kandylakis
~Kitsos     Orfanopoulos
~Vasilis    Papalexis


SaaS, ECE NTUA, 2021
*/

-- ---<<SQL code for creating our database schema>>--------------

DROP DATABASE IF EXISTS ama_mvc;


-- ------------<DATABASE CREATION>--------------

CREATE DATABASE IF NOT EXISTS ama_mvc;
USE ama_mvc;

-- ------------<ENTITIES CREATION>--------------

-- ------------<USER>--------------

CREATE TABLE user (
  userID       int NOT NULL AUTO_INCREMENT, 
  email        varchar(255) NOT NULL UNIQUE CHECK (Email LIKE '%_@_%._%'), 
  password     varchar(255) NOT NULL, 
  PRIMARY KEY (userID), 
  INDEX (email));

-- ------------<QUESTION>--------------

CREATE TABLE question (
  questionID     int NOT NULL AUTO_INCREMENT, 
  title          varchar(255) NOT NULL, 
  qtext          varchar(5000) NOT NULL, 
  submissionTime datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  userID         int NOT NULL, 
  PRIMARY KEY (questionID),  
  INDEX (title),
  FOREIGN KEY (userID) REFERENCES user(userID) 
  ON UPDATE CASCADE ON DELETE CASCADE); -- if user is deleted, his questions are deleted too

-- ------------<QUESTION TAG>--------------

CREATE TABLE questionTag (
  id      int NOT NULL, 
  tag     varchar(255) NOT NULL, 
  PRIMARY KEY (id),
  INDEX (tag));

-- ------------<HAS TAGS>--------------

CREATE TABLE hasTags (
  questionID     int NOT NULL,
  tagID          int NOT NULL,
  PRIMARY KEY (questionID, tagID),
  FOREIGN KEY (questionID) REFERENCES question(questionID)
  ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (tagID) REFERENCES questionTag(id)
  ON UPDATE CASCADE ON DELETE CASCADE);

-- ------------<ANSWER>--------------

CREATE TABLE answer (
  answerID         int NOT NULL AUTO_INCREMENT, 
  atext           varchar(10000) NOT NULL, 
  submissionTime  datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  questionID      int NOT NULL, 
  userID           int NOT NULL, 
  PRIMARY KEY (answerID),
  FOREIGN KEY (questionID) REFERENCES question(questionID)
  ON UPDATE CASCADE ON DELETE CASCADE); -- if question is deleted then the answer will deleted too
