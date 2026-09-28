# Employee Management System (EMS)

A simple full-stack Employee Management System that lets you add, view, update, and delete employee records. Built with React on the frontend, Express on the backend, and MySQL as the database.

## Features

- View all employees
- Add a new employee
- Edit an existing employee's details
- Delete an employee
- Navbar with Home and About pages

## Tech Stack

Frontend: React (Vite), React Router, Tailwind CSS
Backend: Node.js, Express
Database: MySQL 

## 3-Tier Architecture

This project follows a classic 3-tier architecture, where each tier has one clear responsibility and only talks to the tier directly next to it.


1. Presentation Tier, React frontend
Everything the user sees and clicks: the navbar, the employee list, and the add/edit form. This tier never talks to the database directly — it only calls functions in `services/employeeApi.js`, which send HTTP requests to the backend.

2. Application Tier, Express backend
Receives HTTP requests, decides what they mean, and applies the actual logic and checks are all required fields filled in?. Split into two parts:
- Routes (`routes/employeeRoutes.js`) — map an incoming URL + HTTP method to the right function.
- Controllers (`controllers/employeeControllers.js`) — contain the actual logic and talk to the database.

3. Data Tier, MySQL database
Stores the employee data permanently in a table called employee_details. Only the backend is allowed to connect to it directly via connectDB.js... the frontend has no access to the database at all.

How a request flows, end to end (example: deleting an employee):
`EmployeeCard.jsx` (click delete) → `employeeApi.js` (sends `DELETE` request) → `employeeRoutes.js` (matches the route) → `employeeControllers.js` (`deleteEmployee` runs the SQL) → MySQL (row removed) → response travels back up the same chain to update the screen.

## Project Structure


Employee Management
├── backend/
│   ├── controllers/
│   │   └── employeeControllers.js
│   ├── routes/
│   │   └── employeeRoutes.js
│   ├── utils/
│   │   ├── connectDB.js
│   │   └── sqlQuery.js
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── EmployeeList.jsx
│   │   │   ├── EmployeeCard.jsx
│   │   │   └── EmployeeForm.jsx
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   └── About.jsx
│   │   ├── services/
│   │   │   └── employeeApi.js
│   │   └── App.jsx
│   └── package.json
└── README.md




## Prerequisites

- [Node.js](https://nodejs.org/)  and npm
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) installed and running locally

## Setup Instructions

### 1. Database

Open a MySQL client and create the database:

CREATE DATABASE employee_management;

The employee_details table is created automatically by the backend the first time it runs — you don't need to create it manually.
2. Backend
npm install

Create a env file inside backend with your own MySQL credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_PORT=3306
DB_DATABASE=employee_management


Start the server:
node app.js


The backend runs at `http://localhost:4000`.

### 3. Frontend

In a separate terminal:

cd frontend
npm install
npm run dev

The app opens at `http://localhost:5173`. Make sure the backend is already running before using the app, since the frontend fetches data from it.

## API Endpoints

| Method | Endpoint             | Description            |
|--------|----------------------|-------------------------|
| GET    | /api/employee        | Get all employees       |
| GET    | /api/employee/:id    | Get one employee by ID  |
| POST   | /api/employee        | Add a new employee      |
| PUT    | /api/employee/:id    | Update an employee      |
| DELETE | /api/employee/:id    | Delete an employee      |


