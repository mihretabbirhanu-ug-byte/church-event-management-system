# Church Event Management System

A comprehensive NestJS application for managing church events with authentication, using Prisma and Neon DB.

## Features

- **User Authentication**: JWT-based authentication with role-based access (ADMIN, MEMBER, VOLUNTEER)
- **Event Management**: Create and manage church events with goals, notes, and invite links
- **Task Management**: Assign and track tasks with updates and status tracking
- **Registration System**: Event registration with attendance marking
- **Input Validation**: Comprehensive validation using class-validator
- **Security**: Password hashing, JWT tokens, and protected routes

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up the database:
   - Create a Neon DB database
   - Update the `DATABASE_URL` in `.env` with your Neon DB connection string
   - Update `JWT_SECRET` in `.env` with a secure secret

3. Generate Prisma client (when database is connected):
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. Start the application:
   ```bash
   npm run start:dev
   ```

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login and get JWT token
- `POST /auth/profile` - Get current user profile (requires JWT)

### Users (requires JWT)
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create user
- `PATCH /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Events (requires JWT)
- `GET /events` - Get all events with relations
- `GET /events/:id` - Get event by ID
- `POST /events` - Create event
- `PATCH /events/:id` - Update event
- `DELETE /events/:id` - Delete event

### Registrations (requires JWT)
- `GET /registrations` - Get all registrations
- `GET /registrations/:id` - Get registration by ID
- `POST /registrations` - Create registration
- `PATCH /registrations/:id` - Update registration
- `DELETE /registrations/:id` - Delete registration

### Tasks (requires JWT)
- `GET /tasks` - Get all tasks with relations
- `GET /tasks/:id` - Get task by ID
- `POST /tasks` - Create task
- `PATCH /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

### Additional Endpoints (all require JWT)
- `/event-invite-links` - Manage event invite links
- `/task-assignments` - Manage task assignments
- `/task-updates` - Manage task updates
- `/event-goals` - Manage event goals
- `/event-notes` - Manage event notes

## Usage Examples

### Register a User
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "password": "password123",
    "role": "MEMBER"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Create an Event (with JWT token)
```bash
curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Church Picnic",
    "description": "Annual church picnic",
    "startDate": "2026-04-01T10:00:00Z",
    "location": "Central Park",
    "createdById": "USER_ID"
  }'
```

## Architecture

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL (Neon DB)
- **ORM**: Prisma
- **Authentication**: JWT with Passport
- **Validation**: class-validator
- **Password Hashing**: bcryptjs

## Security Features

- JWT authentication for all protected routes
- Password hashing with bcrypt
- Input validation and sanitization
- CORS enabled
- Role-based access control structure
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
