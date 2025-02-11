---

# Contact Management APPLICATION

This is a **Contact Management Application** built with **Node.js** and **MongoDB** that allows you to manage contacts, including **creating**, **updating**, **deleting**, **fetching**, and **searching** contacts. The application utilizes **Express.js** for routing, **Mongoose** for MongoDB interaction, and has basic **input validation** and **error handling**.

---

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Setup and Installation](#setup-and-installation)
    - [Cloning the Repository](#cloning-the-repository)
    - [Installing Dependencies](#installing-dependencies)
    - [Environment Variables](#environment-variables)
    - [Running the Application](#running-the-application)
  - [Testing the API](#testing-the-api)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)
    - [Create Contact](#create-contact)
    - [Get All Contacts](#get-all-contacts)
    - [Get Contact by ID](#get-contact-by-id)
    - [Update Contact](#update-contact)
    - [Delete Contact](#delete-contact)
    - [Search for Contact](#search-for-contact)
  - [Validation](#validation)
  - [Error Handling](#error-handling)
  - [License](#license)

---

## Project Overview

The Contact Management API is a RESTful web service that allows users to manage their contacts. This application provides an interface to **add**, **update**, **delete**, ""fetch**, and **search** contacts. All contact data is stored in a **MongoDB database** and is validated using **Express Validator**.

---

## Features

- **CRUD Operations**:
  - **Create** a contact with details like name, email, phone number, and address.
  - **Retrieve** all contacts or a specific contact by ID.
  - **Update** contact details by ID.
  - **Delete** a contact by ID.
  
- **Search**:
  - Search for contacts by name or email.

- **Validation**:
  - Name, email, and phone number fields are validated before saving or updating contacts.

- **Error Handling**:
  - The app provides meaningful error responses and messages for invalid inputs or operations.

---

## Tech Stack

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing contacts.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Express Validator**: For validating input data (e.g., name, email, phone number).
- **dotenv**: For managing environment variables.

---

## Setup and Installation

### Cloning the Repository

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/MMALLIKARJUN2312/Contact_Management_Application.git
   cd Contact_Management_Application/backend
   ```

### Installing Dependencies

2. Install all the required dependencies by running the following command inside the `backend/` directory:
   ```
   npm install
   ```

### Environment Variables

3. Create a `.env` file in the root directory of `backend/` and add the following environment variables:
   ```
   MONGO_URI=mongodb://localhost:27017/contacts
   PORT=5000
   ```

   Replace `mongodb://localhost:27017/contacts` with your actual MongoDB URI if you are using a remote MongoDB instance.

### Running the Application

4. To start the application, run the following command:
   ```
   npm start
   ```

   The server will start and be available at `http://localhost:5000`.

---

## Testing the API

To test the API, you can use **Postman** or any other API testing tool.

Here are the available API endpoints that you can test.

---

## Project Structure

The project structure is organized as follows:

```
contact-management-app/
├── backend/
│   ├── config/
│   │   └── db.js            # MongoDB connection logic
│   ├── controllers/
│   │   └── contactController.js # Controller for handling contact operations
│   ├── models/
│   │   └── contactModel.js   # Mongoose schema for Contact model
│   ├── routes/
│   │   └── contactRoutes.js   # Routes for Contact API
│   ├── middleware/
│   │   └── validation.js      # Validation logic for input data
│   ├── utils/
│   │   └── errorHandler.js    # Error handling utilities
│   ├── app.js                 # Main application file
│   ├── package.json           # Project metadata and dependencies
│   └── .env                   # Environment variables
└── README.md                  # This file
```

---

## API Documentation

### Create Contact

- **Endpoint**: `POST /api/contacts/create`
- **Description**: Creates a new contact.
- **Request Body**:
  ```json
  {
    "name": "Mallikarjun",
    "email": "mallikarjun1234@gmail.com",
    "phoneNumber": "9912345678",
    "address": "Madhapur, Hyderabad"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Contact created successfully",
    "contact": {
        "_id": "67aaf60e8f3c2e325626e245",
        "name": "Mallikarjun",
        "email": "mallikarjun1234@gmail.com",
        "phoneNumber": "9912345678",
        "address": "Madhapur, Hyderabad",
        "createdAt": "2025-02-11T07:02:38.702Z",
        "__v": 0
    }
  }
  ```

### Get All Contacts

- **Endpoint**: `GET /api/contacts`
- **Description**: Retrieves all contacts from the database.
- **Response**:
  ```json
  [
    {
        "_id": "67aaf60e8f3c2e325626e245",
        "name": "Mallikarjun",
        "email": "mallikarjun1234@gmail.com",
        "phoneNumber": "9912345678",
        "address": "Madhapur, Hyderabad",
        "createdAt": "2025-02-11T07:02:38.702Z",
        "__v": 0
    },
    ...
  ]
  ```

### Get Contact by ID

- **Endpoint**: `GET /api/contacts/:id`
- **Description**: Retrieves a contact by ID.
- **Request URL**: `/api/contacts/67aaf60e8f3c2e325626e245`
- **Response**:
  ```json
  {
        "_id": "67aaf60e8f3c2e325626e245",
        "name": "Mallikarjun",
        "email": "mallikarjun1234@gmail.com",
        "phoneNumber": "9912345678",
        "address": "Madhapur, Hyderabad",
        "createdAt": "2025-02-11T07:02:38.702Z",
        "__v": 0
  }
  ```

### Update Contact

- **Endpoint**: `PUT /api/contacts/:id`
- **Description**: Updates an existing contact.
- **Request Body**:
  ```json
  {
    "name" : "Tarun",
    "email" : "tarun0510@gmail.com",
    "phoneNumber" : "9977334568",
    "address" : "Holiday Street, Goa"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Contact updated successfully",
    "contact": {
        "_id": "67aafa648f3c2e325626e258",
        "name": "Tarun",
        "email": "tarun0510@gmail.com",
        "phoneNumber": "9977334568",
        "address": "Holiday Street, Goa",
        "createdAt": "2025-02-11T07:21:08.226Z",
        "__v": 0
    }
  }
  ```

### Delete Contact

- **Endpoint**: `DELETE /api/contacts/:id`
- **Description**: Deletes a contact by ID.
- **Request URL**: `/api/contacts/unique_contact_id`
- **Response**:
  ```json
  {
    "message": "Contact deleted successfully"
  }
  ```

### Search for Contact

- **Endpoint**: `GET /api/contacts/search`
- **Description**: Searches for contacts by name or email.
- **Request URL**: `/api/contacts/search?query=Arjun`
- **Response**:
  ```json
  {
    "contacts": [
    {
        "_id": "67aaf60e8f3c2e325626e245",
        "name": "Mallikarjun",
        "email": "mallikarjun1234@gmail.com",
        "phoneNumber": "9912345678",
        "address": "Madhapur, Hyderabad",
        "createdAt": "2025-02-11T07:02:38.702Z",
        "__v": 0
    },
    {
        "_id": "67aaf7e98f3c2e325626e24b",
        "name": "Arjun",
        "email": "arjun1234@gmail.com",
        "phoneNumber": "7799123456",
        "address": "Koramangala, Bangalore",
        "createdAt": "2025-02-11T07:10:33.293Z",
        "__v": 0
    }
    ]
  }
  ```

---

## Validation

This application uses **Express Validator** to validate the incoming data for creating or updating contacts. The following validations are applied:

- **Name**: Required, cannot be empty.
- **Email**: Required, must be a valid email format.
- **Phone Number**: Required, must be a valid phone number format.
- **Address**: Optional.

If the validation fails, the API will return a `400` status with error messages.

---

## Error Handling

The application uses **custom error handling** for different scenarios:

- **Validation errors**: If the input does not pass validation, it returns a `400` status with an appropriate error message.
- **404 Errors**: If a contact is not found by ID or no contacts match the search query, a `404` error is returned.
- **Server Errors**: If an internal server error occurs (e.g., database issue), it returns a `500` error.

---

## License

This project is licensed under the MIT License.

---
