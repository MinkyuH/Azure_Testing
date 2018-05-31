CREATE USER testUser WITH PASSWORD='Test2013'

EXECUTE sp_addrolemember db_datareader, "testUser"
EXECUTE sp_addrolemember db_datawriter, "testUser"

CREATE TABLE users
(
    id INT IDENTITY PRIMARY KEY,
    name NVARCHAR(255),
    email NVARCHAR(255)
)

select * from users