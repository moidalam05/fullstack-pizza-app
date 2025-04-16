# Full Stack Pizza App

This project is a full-stack pizza ordering application built using the **MERN** stack (MongoDB, Express, React, Node.js). The app allows users to place orders for pizzas, manage their profiles, and make payments. The application also features a secure authentication system and an admin panel to manage the pizza menu, orders, and customer details.

## Features

- **User Authentication**: Using JWT (JSON Web Token) for secure login and registration.
- **Pizza Menu**: Dynamic menu generation using data from the MongoDB database.
- **Order Management**: Users can add pizzas to the cart, modify orders, and proceed with checkout.
- **Admin Panel**: Admin users can manage pizza menu items, view orders, and manage customer information.
- **Payment Integration**: Payment gateway integration for seamless transactions.
- **Cloudinary Integration**: Pizza images are uploaded and served via Cloudinary.
- **Environment Variables**: Managed using the `dotenv` library for secure API keys and environment-specific settings.

## Tech Stack

- **Frontend**: 
  - React.js
  - Tailwind CSS (for responsive UI design)
  - Axios (for making API calls)
  
- **Backend**:
  - Node.js (Express)
  - MongoDB (for storing user, pizza, and order data)
  - JWT (JSON Web Tokens) for user authentication
  - CookieParser (for handling cookies in the backend)
  - Cloudinary (for image management and hosting)
  - dotenv (for environment variables)

## Libraries/Packages Used

- `jsonwebtoken` for secure authentication and token management
- `cookie-parser` for cookie handling
- `dotenv` for environment variable management
- `cloudinary` for image uploads and storage
- `axios` for API communication between frontend and backend

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js installed
- MongoDB running locally or use MongoDB Atlas
- Cloudinary account (for image hosting)

### Clone the repository

```bash
https://github.com/moidalam05/fullstack-pizza-app.git
