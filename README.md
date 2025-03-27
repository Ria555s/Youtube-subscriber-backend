# YouTube Subscriber API Documentation

# Introduction
Welcome to the YouTube Subscribers API Project! This project is designed to provide a simple API for managing and retrieving information about YouTube subscribers. It allows you to perform operations such as getting a list of subscribers, adding new subscribers, and fetching subscriber details.This document provides information on how to use the YouTube Subscriber API, a simple API built with Node.js and MongoDB.

## Overview

The API allows you to retrieve subscribers information from a database. It exposes three main endpoints:

* `/subscribers`: Retrieves a list of all subscribers.
* `/subscribers/names`: Retrieves a list of subscriber names and their subscribed channels.
* `/subscribers/:id`: Retrieves subscriber information by ID.

## Getting Started
https://youtube-subscriber-backend-v3rx.onrender.com/

### Base URL
The base URL for the API is: https://documenter.getpostman.com/view/42662818/2sAYkLmwsW

## Installation
# To run this project on your local machine, follow these steps:
1. Clone the project repository from GitHub:
   git clone <repository-url>
2. Install the project dependencies by running:
   npm inatall
3. Ensure you have MongoDB installed and running on your local machine.
4. Start the application
   node app.js
This application will start and listen on port 3000. You can access the API through the provided endpoints.

## API endpoints
* GET /subscribers: Get a list of all subscribers.

* POST /subscribers: Add a new subscriber.

* GET /subscribers/name: Get a list of subscribers with only the name and subscribedChannel fields.

* POST /subscribers/name: Add a new subscriber with name and subscribedChannel fields.

* GET /subscribers/:id: Get details of a subscriber by their ID.

* POST /subscribers/:id: Add a new subscriber by providing name and subscribedChannel.

If a subscriber with the specified :id is not found, the API will return an error message with a status code of 400.


      
