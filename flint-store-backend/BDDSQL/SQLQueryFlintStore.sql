﻿CREATE DATABASE flintStore 
GO
CREATE TABLE Category (
categoryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
categoryName VARCHAR(100) NOT NULL, 
);
GO
CREATE TABLE SubCategory (
subCategoryId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
subCategoryName VARCHAR(100) NOT NULL,
FK_categoryId INT FOREIGN KEY REFERENCES [Category](categoryId) NOT NULL
);
GO
CREATE TABLE Item (
itemId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
itemName VARCHAR(100) NOT NULL,
itemDescription VARCHAR(300),
itemPrice FLOAT,
itemImg NVARCHAR(500), 
FK_subCategoryId INT FOREIGN KEY REFERENCES [SubCategory](subCategoryId) NOT NULL,
FK_categoryId INT FOREIGN KEY REFERENCES [Category](categoryId) NOT NULL,
);