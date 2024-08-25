CREATE DATABASE Quote

CREATE TABLE Quotes (
    QuoteId UNIQUEIDENTIFIER PRIMARY KEY,
    QuoteText NVARCHAR(MAX) NOT NULL,
    Author NVARCHAR(100),
    CreatedAt DATETIME DEFAULT GETDATE()
);

INSERT INTO Quotes (QuoteId ,QuoteText, Author)
VALUES 
(NEWID(),'Hardest Choice requires the strongest will', 'Thanos'), 
(NEWID(),'Be Loyal to what Matters', 'Arthur Morgan'),
(NEWID(),'Men are Brave', 'The Batman')

INSERT INTO Quotes (QuoteId ,QuoteText, Author)
VALUES 
(NEWID(),'Men are Brave', 'The Batman');

SELECT * FROM Quotes


