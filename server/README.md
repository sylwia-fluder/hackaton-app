## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server.

Endpoints:

User: 
    Get user project               -> /api/users/getProjects/:userId'
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

        startDate: date,
        endDate: date,
        number: number,
        members: Array {"memberId":objectId}]
        projectId: objectId


Project: 
    Get project by id                -> /api/getMembers/project/:projectId
    Get members by project id        -> /api/project/:projectId
    Post - project create            -> /api/project

        Body {
            projectManagerId: ObjectId,
    		title: string,
    		members: Array {"memberId":objectId}]
        }
feedbackPersonal:
    Get users feedback              -> /api/feedbackPersonal/findFeedbackByUser/:userId
    Post - feedback personal        -> /api/feedbackPersonal

        Body {
            giverId: objectId,
            takerId: objectId,
            answer1: number,
            answer2: number,
            answer3: number,
            answer4: number,
            answer5: number,
            answer6: string
        }

feedbackSprint:
    Get users feedback              -> /api/feedbackSprint/findFeedbackByUser/:userId
    Post - feedback personal        -> /api/feedbackSprint

        Body {
            giverId: objectId,
            takerId: objectId,
            sprintId: objectId,
            answer1: number,
            answer2: number,
            answer3: number,
            answer4: number,
            answer5: string
            answer6: string
            answer7: string
            answer8: string
            answer9: string
        }
