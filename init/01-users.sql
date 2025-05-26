CREATE ROLE IF NOT EXISTS 'manual';
CREATE ROLE IF NOT EXISTS 'insert';

GRANT SELECT, INSERT, UPDATE, DELETE
ON *.*
TO 'manual';

GRANT SELECT, INSERT, UPDATE
ON *.*
TO 'insert';

CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'pass';
GRANT 'manual' TO 'user'@'%';
SET DEFAULT ROLE 'manual' TO 'user'@'%';

CREATE USER IF NOT EXISTS 'goapp'@'%' IDENTIFIED BY 'goapp';
GRANT 'insert' TO 'goapp'@'%';
SET DEFAULT ROLE 'insert' TO 'goapp'@'%';
