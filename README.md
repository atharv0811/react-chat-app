# Chat App

A real-time chat application built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (Sign up, Login, Logout)
- Real-time messaging
- One-on-one chats
- Group chats

## Tech Stack

- **Frontend:** React, React Router, Axios, Socket.IO Client
- **Backend:** Node.js, Express, Socket.IO, JWT Authentication
- **Database:** MongoDB

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

#### 2. Install dependencies

##### Backend

```sh
cd server
npm install
```

##### Frontend

```sh
cd client
npm install
```

#### 3. Configure the database

- Create a MongoDB database
- Update the `.env` file in the `server` directory with your MongoDB credentials:

  ```env
  PORT = 3000
  MONGODB_URL = 'connection_string'
  JWT_SECRET = 'your_jwt_secret'
  ```

#### 4. Start the application

##### Start the backend server

```sh
cd server
npm start
```

##### Start the frontend

```sh
cd client
npm start
```

## API Endpoints

### Authentication

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/user/signup | User registration |
| POST   | /api/user/signin | User login        |

<br>  
<br>

> 🚧 **Project Under Development** 🚧  
> This project is currently a work in progress and not yet complete.
