CREATE ROLE 'manual';
CREATE ROLE 'insert';

GRANT SELECT, INSERT, UPDATE, DELETE
On timestampdb.*
TO 'manual';

GRANT SELECT, INSERT, UPDATE
On timestampdb.*
TO 'insert';
