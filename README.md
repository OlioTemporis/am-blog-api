# Academind Blog API

## About

Truncated version of the project from 100 Days of WebDev (Day 24). Only API perserved to be used as a model. Uses PSQL with the npm library pg.

COMPLETED.

## PSQL

```
sudo -u postgres -i
psql
```

Once in the shell:

```
CREATE DATABASE "am_blog";
\c am_blog

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id INT NOT NULL
);

INSERT INTO authors (name, email)
VALUES ('Jane Doe', 'ranchrobe23@gmail.com');

INSERT INTO posts (title, summary, body, author_id)
VALUES ('dummy title', 'dummy summary', 'dummy body', 1);
```
