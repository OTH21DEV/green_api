
# WhatsApp Messaging UI with Green-API

Welcome to the **WhatsApp Messaging UI** project. This is a responsive React-based application that enables users to send and receive text messages on WhatsApp using the Green API service. It consists of two main pages: Chat and Login, hosted on GitHub Pages.

LIVE LINK : https://greenapi-4819e028c1ab.herokuapp.com/

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

## Testing

This project includes unit and integration tests using Jest and React Testing Library to ensure the functionality of individual components and their interactions.

- Jest: A JavaScript testing framework for creating, running, and structuring tests.
- React Testing Library: A set of utilities to test React components without relying on implementation details.


## Running Tests 

The tests will check various aspects of the components such as rendering, user interactions, and expected outputs.

1. To execute the test suite, run the following command:
   ```bash 
   npm run test:watch

2. To check the coverage, run the following command:
    ```bash
   npm run test:coverage
