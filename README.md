# OnVarg: An Online Examination Platform

> This platform has been built with the MERN stack & Redux.

## Features

- login and Sign up with proper authentication and authorization with JWT

* Faculty

  - Can add exams/quizzes of MCQ
  - Can see the response of every student and the number of times students were indulge in cheating
  - Can update the questions and answer

* Student

  - Can give quizzes/exams of different subject in his/her mobile or laptop
  - Can see his/her quizzes/exams results in the dashboad
  - Can see his/her previous quizzes/exams response

* Security for quizzes/exams
  - Not allowed to change the tab
  - Not allowed to copy text
  - Not allowed to take screenshot
  - Not allowed to click right button of the mouse

- Every page is made responsive as much as possible

### Env Variables

Create a .env file in the root directory and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)

```
npm install (node modules will be installed in root directory)
cd frontend
npm install (node modules will be installed in frontend directory)
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev (Run this command from root directory itself)

# Run backend only
npm run server (Run this command from root directory itself)
```

