
# WhatsApp Messaging UI with Green-API

Welcome to the **WhatsApp Messaging UI** project. This is a responsive React-based application that enables users to send and receive text messages on WhatsApp using the Green API service. It consists of two main pages: Chat and Login, hosted on GitHub Pages.

## Project Overview

This project was developed to create a user interface for interacting with WhatsApp messages through the Green API service.

### Features
- User Authentication:** Log in with your Green API credentials (`idInstance` and `apiTokenInstance`).
- Message Sending & Receiving:** Send and receive text messages with WhatsApp contacts.
- Simple Design: Mimics [web.whatsapp.com](https://web.whatsapp.com/) with minimal features for ease of use.

## Requirements
- Use the Green API service: [Green API](https://green-api.com/).
- Implement text message sending via [SendMessage](https://green-api.com/docs/api/sending/SendMessage/).
- Receive messages using the provided method: [Receiving](https://green-api.com/docs/api/receiving/technology-http-api/).
- Developed with React technology.

## Expected Results
- Log in using Green API credentials.
- Enter a recipient's phone number to start a new chat.
- Type and send messages to recipients on WhatsApp.
- Recipients can reply through WhatsApp Messenger.

## Installation and Setup
Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/OTH21DEV/green_api

2. Navigate to the project directory:
   ```bash
    cd green_api

3. Install dependencies:
   ```bash
    npm install

4. Start the development server:
   ```bash
    npm run dev

5. Access the application:
   ```bash
    Open your browser to http://localhost:5173.

## Features and Technologies Used

- React.js: A JavaScript library for building user interfaces.
- CSS: Used for styling the components.
- BEM (Block Element Modifier): A methodology for naming and organizing CSS classes.
- Green - API
