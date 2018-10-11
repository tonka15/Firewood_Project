Drop TABLE IF EXISTS [Orders]
Drop TABLE IF EXISTS [Employee]
Drop TABLE IF EXISTS [Customer]
Drop TABLE IF EXISTS [Account_Information]

go

CREATE TABLE [dbo].Account_Information
(
	[Account_Number] INT NOT NULL PRIMARY KEY IDENTITY,
	[User_Name] NCHAR(10) NOT NULL,
	[Password] NCHAR(20) NOT NULL
)

go

CREATE TABLE [dbo].Customer (
    [Customer_Id] INT NOT NULL IDENTITY,
    [Account_Number] INT NOT NULL, 
    [First_Name] NCHAR(10) NOT NULL, 
    [Last_Name] NCHAR(10) NOT NULL, 
    [Zip_Code] NCHAR(10) NOT NULL, 
    [Phone_Number] NCHAR(10) NOT NULL, 
    [Email_Address] NCHAR(10) NOT NULL, 
    CONSTRAINT [PK_Customer] PRIMARY KEY ([Customer_Id]), 
    CONSTRAINT [FK_Customer_To_Account_Information] FOREIGN KEY ([Account_Number]) REFERENCES [Account_Information]([Account_Number])
)

go

CREATE TABLE [dbo].Employee
(
	[Employee_Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [First_Name] NCHAR(10) NULL, 
    [Last_Name] NCHAR(10) NULL, 
    [Phone_Number] NCHAR(10) NULL, 
    [Email_Address] NVARCHAR(50) NULL
)

go


CREATE TABLE [dbo].Orders
(
	[Order_Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Customer_Id] INT NOT NULL, 
    [Employee_Id] INT NOT NULL, 
    [Order_Date] DATE NOT NULL, 
    [Shipped_Date] DATE NOT NULL, 
    [Shipping_Address] NCHAR(50) NULL, 
    [City] NCHAR(25) NULL, 
    [State] NCHAR(25) NULL, 
    [Zip_Code] NCHAR(10) NULL,
	CONSTRAINT [FK_Orders_To_Customer] FOREIGN KEY ([Customer_Id]) REFERENCES [Customer]([Customer_Id]),
	CONSTRAINT [FK_Orders_To_Employee] FOREIGN KEY ([Employee_Id]) REFERENCES [Employee]([Employee_Id])
)

go

