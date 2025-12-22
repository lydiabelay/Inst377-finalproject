# Developer Manual

## Overview

This report is provided for the future developers who will be assigned to possibly enhance the Outdoor Safety Checker application. This section describes how to setup the project, run it locally, list out API endpoints and known issues (if any) and improvements planned ahead. This application is a full stack web app built on Node. js backend, a Supabase database and a plain static frontend with HTML/CSS/JavaScript.

## Installation

Prerequisites

-Node. js (latest LTS version recommended)

-npm (comes with Node.js)

-Supabase project with a quotes table

-Set environment variables for Supabase.

## Clone the Repository

git clone https://github.com/lydiabelay/Inst377-finalproject.git

cd Inst377-finalproject

## Install Dependencies

```bash

npm install
```

Running the Application Locally

Backend (Server)

API requests and database access in the backend server.

bash

npm start

After, the server will run locally (default port is 3000 unless specified e.g. keystone -p 4000).

## Frontend

Frontend files are statically-served from the public/client directory.

If the server is running, in a web browser, go to:



http://localhost:3000

## API Endpoints

GET /api/quotes

## Description:

Getting safety tips from Supabase database.

## Usage:

Feature page, in order to present outdoor safety advice to their users.

## Data Source:

Supabase quotes table.

GET /api/outdoor?city={city}

## Description:

For a specific city retrieves up-to-date outdoor info.

## Functionality:

Converts the city name to coordinates with Open-Meteo Geocoding API

Retrieves current temperature data

Retrieves air quality (AQI) data

Outputs nice, formatted weather and aqi summaries

## External APIs Used:

Open-Meteo Weather API

Open-Meteo Air Quality API

## Usage:

Used by the Feature page when user submit a city name.

## Testing

Project has no automated tests.

In future, it can also be enhanced with a unit test case for API endpoints and frontend functionality.

## Known Issues

The app doesn't understand city names that are misspelled or not valid well.

The UI is targetted at being useful from a desktop web browser, not mobile.

The look is nothing to rave about and should be much better as a user experience.

## Future Development Roadmap

Add visualizations (like charts for AQI history) using a javaScript drawing/plotting library

Enhance frontend style using modern CSS and animations

And maybe even allow to add to favorite cities user accounts

Setup automated testing for your backend APIs

Enhance error handling and messages to the user

## Project Structure Overview

/public/client – HTML, CSS and JS files for the frontend

/api – Serverless API routes to use when deploying.

/server – Local backend server logic If you are on different system.

/docs – Project documentation (the same that you are currently reading!).

## Summary

This app is an exemplar of full stack web development using third party APIs, a cloud database and serverside logic. New developers can contribute by enhancing the UI and adding functions, as well as refining the backend.
