<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Planner App Backend

This is the backend of the Planner App, a task management application with features such as user registration, authorization, and task management.
The backend is built with [Nest.js](https://nestjs.com/) framework TypeScript starter repository, [Prisma](https://www.prisma.io/), and [PostgreSQL](https://www.postgresql.org/).

## Features

- User registration and authorization.
- Task management with features to create, edit, delete, and mark tasks as complete.
- Task fields include date, priority, name, and completion status.
- A Pomodoro timer with customizable intervals for work and breaks.
- Time block scheduling to organize tasks throughout the day.

## Future Plans

- **Diary Feature**: Users will be able to write daily entries, set a mood for the day, and reflect on their experiences.
- **Enhanced Timer**: The timer will be moved to the header for constant visibility.
- **Test covering**: The application will be covered with tests.

## Demo

You can open demo on [Render](https://planner-frontend-0xte.onrender.com/auth).
ATTENTION! For the demo hosting, I'm using the free plan. The first request on the server might take 1-2 minutes because it launches the server and needs some time to be ready. The following requests should be quicker.

Also, I ask you to note that this demo is the static version of the Next.js app because the free plan of the Render service doesn't allow the installation of the non-static version of the Next.js app.
I used the Render service because it needs to have the same domain for frontend and backend repos, and the free plan of the Render service provides it.
So, on this demo, it doesn't work middleware, redirects and some other features of the Next.js app (e.g., the redirect to the auth page doesn't happen when tokens are expired).

## API Documentation

The backend API is hosted on Render and can be accessed at:
[Planner App API](https://planner-backend-p4ab.onrender.com/api)

## Installation

To get started with the backend, clone the repository and install the dependencies:

```bash
$ yarn install
```

## Running the app

You can run the application in different modes

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

The backend is hosted on [Render](https://render.com/). The PostgreSQL database is hosted on [Railway](https://railway.app/).

## Contributing

If you have suggestions for improvements or want to contribute to the project, feel free to fork the repository and create a pull request.
