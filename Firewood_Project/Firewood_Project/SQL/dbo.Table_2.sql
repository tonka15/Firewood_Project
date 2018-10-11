CREATE TABLE [dbo].Employee
(
	[Employee_Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [First_Name] NCHAR(10) NULL, 
    [Last_Name] NCHAR(10) NULL, 
    [Phone_Number] NCHAR(10) NULL, 
    [Email_Address] NVARCHAR(50) NULL
)
