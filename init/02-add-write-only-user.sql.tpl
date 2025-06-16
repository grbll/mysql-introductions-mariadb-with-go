CREATE ROLE IF NOT EXISTS 'insert';

GRANT SELECT, INSERT, UPDATE
ON *.*
TO 'insert';

CREATE USER IF NOT EXISTS 'goapp'@'%' IDENTIFIED BY 'goapp';
GRANT insert ON *.* TO 'goapp'@'%';
SET DEFAULT ROLE insert TO 'goapp'@'%';
