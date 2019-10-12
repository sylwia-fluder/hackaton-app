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
Sprint:
    Get sprint by project id        -> /api/sprint/browserProject/:projectId
    Post - sprint create            -> /api/sprint/



Project: 
    Post - poject create            -> /api/project

        Body {
            projectManagerId: ObjectId,
    		title: string,
    		members: Array {"memberId":objectId}]
        }
