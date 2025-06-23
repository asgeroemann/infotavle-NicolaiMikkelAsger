-- Database setup script.
-- *** WARNING *** If the database is already set up: deleates everything.
USE master;
GO

IF EXISTS(SELECT * FROM sys.databases WHERE "name" = 'InfoscreenDB')
BEGIN
	ALTER DATABASE InfoscreenDB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
	DROP DATABASE InfoscreenDB;
END;
GO

-- DB setup.
CREATE DATABASE InfoscreenDB;
GO

USE InfoscreenDB;
GO

-- Tables setup.
CREATE TABLE slides (
	slidesID INT IDENTITY(1,1) PRIMARY KEY,
	componentName NVARCHAR(255) NOT NULL,
	expirationDate DATE,
	isActive BIT NOT NULL
);

CREATE TABLE calendarEvents (
	eventID INT IDENTITY(1,1) PRIMARY KEY,
	theDate DATE NOT NULL,
	theMessage NVARCHAR(255) NOT NULL,
	slideID INT FOREIGN KEY REFERENCES slides(slidesID)
);