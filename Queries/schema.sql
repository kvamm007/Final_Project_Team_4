-- Creating tables for Shark_Attacks_db
CREATE TABLE shark_attacks (
	incident_no INT NOT NULL,
	incident_date DATE NOT NULL,
	incident_year INT NOT NULL,
	incident_type VARCHAR,
	country VARCHAR NOT NULL,
	ISO VARCHAR NOT NULL,
	area VARCHAR,
	incident_location VARCHAR,
	activity VARCHAR,
	gender VARCHAR,
	age INT,
	fatal VARCHAR NOT NULL,
	incident_time TIME,
    species VARCHAR,
	reference VARCHAR,
	PRIMARY KEY (incident_no),
	FOREIGN KEY (incident_year) REFERENCES world_population (year)
);

CREATE TABLE world_population (
     year int NOT NULL,
	 population_no DATE NOT NULL,
     PRIMARY KEY (year)
);

