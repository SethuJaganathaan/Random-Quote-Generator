SELECT * FROM Quotes
SELECT * FROM Role
SELECT * FROM Users

CREATE TABLE Users
(
UserId UNIQUEIDENTIFIER PRIMARY KEY,
Username VARCHAR(255),
Email VARCHAR(255),
Password VARCHAR(255),
ProfilePicture VARBINARY(MAX),
RoleId UNIQUEIDENTIFIER FOREIGN KEY (RoleId) REFERENCES Role(RoleId)
)

SELECT * FROM Users

CREATE TABLE Role
(
RoleId UNIQUEIDENTIFIER PRIMARY KEY,
Rolename VARCHAR(255),
)
SELECT * FROM Role


DECLARE @UseriId UNIQUEIDENTIFIER = NEWID();
DECLARE @Username NVARCHAR(50) = 'Sanji';
DECLARE @Email NVARCHAR(100) = 'sanji@quote.com'
DECLARE @Password NVARCHAR(50) = 'Sanji123'
DECLARE @Roleid UNIQUEIDENTIFIER = 'D65A97D5-CC3A-4E0D-A73A-8CCECDCB0611'
DECLARE @ProfilePicture VARBINARY(MAX);

SET @ProfilePicture = (SELECT BulkColumn FROM OPENROWSET(BULK N'D:\sanji.png', SINGLE_BLOB) AS x);

IF SUBSTRING(@ProfilePicture, 1, 2) = 0x8950
    OR SUBSTRING(@ProfilePicture, 1, 2) = 0xFFD8
BEGIN
	INSERT INTO [Users] (UserId, Username, Email, Password, RoleId, ProfilePicture) 
	VALUES (@UseriId, @Username, @Email, @Password, @Roleid, @ProfilePicture)
END
ELSE
BEGIN
    PRINT 'Only PNG and JPG formats are allowed.';
END;

ALTER TABLE Quotes
ADD UserId UNIQUEIDENTIFIER;

ALTER TABLE Users
ADD Status SMALLINT;

ALTER TABLE [Quote].[dbo].[Quotes]
ADD CONSTRAINT FK_Quotes_Users
FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users]([UserId]);

--SP For UserSignUp
CREATE PROCEDURE UserSignup
    @username VARCHAR(255),
    @email VARCHAR(255),
    @password VARCHAR(255),
    @profilepicture VARBINARY(MAX),
    @status SMALLINT,
    @roleid UNIQUEIDENTIFIER,
    @profilepic_extension VARCHAR(5)
AS
BEGIN
    IF @profilepic_extension IN ('.png', '.jpg', '.jpeg')
    BEGIN
        IF NOT EXISTS (SELECT 1 FROM Users WHERE email = @email)
        BEGIN
            INSERT INTO Users (Userid, Username, Email, Password, Profilepicture, Status, RoleId)
            VALUES (NEWID(), @username, @email, @password, @profilepicture, @status, @roleid)

            SELECT 'Signup successful.' AS Result
        END
        ELSE
        BEGIN
            SELECT 'Email already exists.' AS Result
        END
    END
    ELSE
    BEGIN
        SELECT 'Invalid picture extension.' AS Result
    END
END;

DECLARE @name VARCHAR(50) = 'Zoro';
DECLARE @mail VARCHAR(50) = 'zoro@gmail.com';
DECLARE @pass VARCHAR(50) = 'Zoro123';
DECLARE @stat SMALLINT = 1;
DECLARE @Rid UNIQUEIDENTIFIER = 'D65A97D5-CC3A-4E0D-A73A-8CCECDCB0611';
DECLARE @extension VARCHAR(5) = '.jpg';

DECLARE @profilepicture VARBINARY(MAX); 
SELECT @profilepicture = BulkColumn
FROM OPENROWSET(BULK 'D:\zoro.jpg', SINGLE_BLOB) AS img;

EXEC UserSignup @name, @mail, @pass, @profilepicture, @stat, @Rid, @extension;

--SP For UserLogin
CREATE PROC UserLogin
	@email VARCHAR(20),
	@Password VARCHAR(20)
AS
BEGIN
	IF EXISTS (SELECT * FROM Users WHERE email = @email AND Password = @Password)
	BEGIN
		SELECT 'LOGIN SUCCESSFUL' AS Result
	END
	ELSE
	BEGIN
		SELECT 'INVALID EMAIL OR PASSWORD' AS Result
	END
END

DECLARE @email VARCHAR(255) = 'sanji@quote.com';
DECLARE @password VARCHAR(255) = 'Sanji12';
EXEC UserLogin  @email, @password;

