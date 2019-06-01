CREATE TABLE users (
  id INT AUTO_INCREMENT,
  f_name VARCHAR(40) NOT NULL,
  l_name VARCHAR(25) NOT NULL,
  password varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  date_created DATE NOT NULL
);

CREATE TABLE pitchers (
  id INT,
  pitcherNumber INT,
  name VARCHAR(150) NOT NULL,
  FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
);

-- INSERT into pitchers (id, name) value (1, "Trevor Bauer");
