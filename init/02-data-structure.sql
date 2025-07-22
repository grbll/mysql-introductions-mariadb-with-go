USE timestampdb;

CREATE TABLE IF NOT EXISTS users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_total INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS active_sessions (
  session_id INT AUTO_INCREMENT PRIMARY KEY,
  login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  session_user INT,
  FOREIGN KEY (session_user) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS closed_sessions (
  session_id INT PRIMARY KEY,
  login_time TIMESTAMP,
  logout_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (session_user) REFERENCES users(user_id)
);
