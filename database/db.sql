CREATE DATABASE stockDB

CREATE TABLE stock(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225),
    description VARCHAR(225),
    category VARCHAR(225),
    volume INTEGER,
);