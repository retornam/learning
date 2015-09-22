CREATE DATABASE database_name;

CREATE TABLE author (
	id SERIAL primary key,
	firstName VARCHAR(255)
	year_of_birth INTEGER,
	year_of_death INTEGER DEFAULT 'NaN',
	description TEXT,
	created_at TIMESTAMP NOT NULL DEFAULT now()
);
