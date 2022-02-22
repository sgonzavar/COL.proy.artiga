CREATE DATABASE stockDB

CREATE TABLE stock(
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) UNIQUE,
    description VARCHAR(225),
    category VARCHAR(225),
    volume VARCHAR(225),
);