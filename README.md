# Rural Library Management App

A web app for managing a small library’s books, authors, genres, customers, and checkouts. Built for Oregon State University CS 340 (Group 39ers: Nguyen Thao & Drew Cochran).

## Features

- **Books** — view, add, update, and delete book records
- **Authors** — manage author information
- **Genres** — manage genre categories
- **Customers** — create and maintain customer accounts
- **Checked Out** — track borrowed books and return status
- **Intersection tables** — manage books–authors, books–genres, and authors–genres relationships
- **Database reset** — restore sample data via `/reset`

## Tech stack

- Node.js / Express
- Express Handlebars (`.hbs` views)
- MySQL (`mysql2`)
- `dotenv` for local database credentials

## Setup

1. **Clone the repo**

   ```bash
   git clone https://github.com/ngthaong/final-code.git
   cd final-code
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure the database**

   Copy the example env file and fill in your MySQL credentials:

   ```bash
   cp .env.example .env
   ```

   `.env` should look like:

   ```
   DB_HOST=your_host
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   ```

   Make sure the MySQL schema and stored procedures used by the app are already set up on that database.

4. **Run the app**

   Development (auto-reload with nodemon):

   ```bash
   npm run development
   ```

   Production-style (forever):

   ```bash
   npm run production
   ```

   Stop production:

   ```bash
   npm run stop_production
   ```

5. Open [http://localhost:2010](http://localhost:2010)

## Project structure

```
├── app.js                 # Express server and routes
├── database/
│   └── db-connector.js    # MySQL pool (reads .env)
├── public/                # CSS, JS, images
├── views/                 # Handlebars templates
├── .env.example           # Env variable template
└── package.json
```

## Notes

- Database credentials stay in a local `.env` file and are not committed to git.
- The server listens on port **2010**.
