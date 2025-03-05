-- Active: 1741055181846@@127.0.0.1@5432@event_backend@public
Drop table users;
CREATE TABLE users (
    email VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);


Drop table events;
CREATE TABLE events (  
   id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    date DATE NOT NULL,
    location VARCHAR NOT NULL,
    email VARCHAR REFERENCES users(email)
);

 
CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES events(id) ,
    attendee_name VARCHAR,
    attendance_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM Users;

SELECT * FROM Events;

SELECT * FROM Attendance;
