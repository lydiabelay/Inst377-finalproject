# Inst377-finalproject

## Purpose

The purpose of the outdoor safety checker web application is to help users have better decision-making skills when it comes to leaving outdoors. This web application works by allowing users to enter the city name their looking into in order to get real time weather and air quality information about that state. This will application also gives us safety tips, and this comes from a supabase database. Using API’s and safety guidance status stored the application is able to provide recommendations and data.

This project incorporates web development, front end data fetching, cloud deployment, server ApIs, and database use. 

## The target browsers 
This application is able to run on any desktop browser (latest version) , including: 

- Google chrome 
- Firefox 
- Safari 
- Microsoft edge


## Live Application

The Deployed website:

inst377-finalproject-git-main-lydia-belays-projects.vercel.app


## GitHub Repository

Repository:

https://github.com/lydiabelay/Inst377-finalproject

## Developer Manual
## This will run the application locally 

```bash
npm install
npm start
```

## Environment Variables

Created a `.env` file in the root directory and addd:

SUPABASE_URL=LydiaBelay_supabase_project_url  
SUPABASE_ANON_KEY=:LydiaBelay_supabase_anon_key

The purpose of the  Node.js server is :

1. maintains API requests
2. connects to the Supabase database
3. fetches external weather and air quality data. 
## Overview

This portion is for the developers who may come behind and elevate this project. It details setting up the application locally, how the APIs function and how things are organised.

Installation & Setup

## Clone the repository:

git clone https://github.com/lydiabelay/Inst377-finalproject.git

cd Inst377-finalproject

## API

This web application essentially uses two API in which the front end uses. The first end point is GET/api/outdoor?city={cityName}. This endpoint is used when the user enters a city and gets the real time outdoor information. This endpoint returns the temperature of the city in Fahrenheit, the city’s name, air quality level, and the air quality index. This information comes from other external weather and air quality API. This is shown in the feature page after the user enters a city.

The second endpoint is GET/api/quotes . This endpoint essentially uses the supabase database to retrieve safety tips. The safety tips are shown in the feature page. The purpose of the safety tips is to give the users advice before heading outside. This advice is typically about weather conditions, air quality, and ensuring their safety.


## Issues and improvements

There are a few limitations to this application. One thing that can be improved is better CSS styling. I had a limited amount of time to complete this project so if I had more time, I can make it more visually appealing to users. Another thing I can add is more AQI values instead of one at a time so users can see a trend.

In the future, I want to add more advanced styling, for example, animations. I believe that comparing the air quality between multiple cities can be informative for users and expanding on that is something I want to do.






