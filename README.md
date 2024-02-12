# ImageAIGenerator

Image Generator AI is an application that allows users to generate images from text descriptions using AI.

## Team

- [Oleksandra](https://github.com/oleksandra-github)
- [Ali](https://github.com/NULL0M)
- [Alejandro](https://github.com/neptuneboy666)
- [Deolindo](https://github.com/Deobap73)

![Logo](https://github.com/NULL0M/image-gen/blob/3c9fb09ec928902a150f532077f6510499b25659/client/src/assets/imageAIGeneratorLogo.png)

# Server Documentation

## Introduction

This is the server responsible for providing an API to interact with the image generation service and user management. It is built using Node.js, Express.js, and MongoDB, integrating services such as OpenAI and Cloudinary.

## Configuration and Installation

1. Clone the server repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root of the server and configure the environment variables.

## Project Architecture

The server follows an MVC (Model-View-Controller) architecture, with routing logic in separate files and data manipulation in MongoDB models.

## Environment Configuration

- Express.js: Used as the web framework for Node.js.
- dotenv: For loading environment variables from the `.env` file.
- MongoDB: NoSQL database used for storing user and post data.
- OpenAI: Artificial intelligence service used for image generation.
- Cloudinary: Image hosting service in the cloud.

## Key Features

1. **Image Generation (DALL-E)**

   - `GET /api/v1/dalle`: Returns a welcome message.
   - `POST /api/v1/dalle`: Generates an image based on the provided prompt.

2. **Post Management**

   - `GET /api/v1/post/user/:userId`: Returns all posts of a specific user.
   - `GET /api/v1/post`: Returns all posts.
   - `POST /api/v1/post`: Creates a new post.

3. **User Authentication**
   - `POST /api/v1/user/register`: Registers a new user.
   - `POST /api/v1/user/login`: Authenticates a user and generates a JWT token.
   - `GET /api/v1/user/users/:username`: Returns information about a specific user.
   - `POST /api/v1/reset-password/forgot-password`: Sends a password reset token to the user's email.
   - `POST /api/v1/reset-password/reset-password`: Resets the user's password based on the provided token.

## Code Structure

- `index.js`: Entry point of the server, configures Express and defines routes.
- `middleware/auth.js`: Middleware to verify JWT authentication tokens.
- `mongodb/connect.js`: Establishes connection with MongoDB.
- `mongodb/models/post.js` and `mongodb/models/Users.js`: MongoDB data models for posts and users.
- `routes/*.js`: Route files for different server functionalities.

## Security

- The server uses JWT tokens for user authentication.
- User passwords are securely stored in the database after being encrypted using bcrypt.

## Error Handling

- The server returns appropriate HTTP status codes and descriptive messages in case of errors.
- Errors are handled appropriately in each route and middleware.

## License

This project is licensed under the ISC License.

![Screenshots](https://github.com/NULL0M/image-gen/blob/636990df5b7e0895168db1aa2a6690376795350a/client/src/assets/ImageAIGeneratorHomePage.png)
