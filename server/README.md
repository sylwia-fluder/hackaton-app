## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server.

Endpoints:

User: 
    Get users - my date            -> /api/users/user
    Post - registration            -> /api/users

        Body {
            name: string                (optional)
            email: string
            password: string
        }

    Post - login                   -> /api/auth

        Body {
            email: string
            password: string
        }
    