# Would you rather App Project

This project is part of Udacity React Nanodegree Program. In it except React and Redux is used Udacity \_DATA file who contain all small part of information.

## Introduction

In this project are used:

- HTML
- CSS
- VanillaJS
- NodeJS
- React
- Redux

For create is using `create-react-app` (more information can find in [Create React App](https://github.com/facebookincubator/create-react-app)).

### Getting started

To view and test the project need to download in .zip format or clone it repository.
The next step is to navigate (in the terminal) to the corresponding directory in which it is located and install depedencies with

```
npm install
```

To run app need to run

```
npm start
```

and select user from login dropdawn list, walk through the pages of the navigation, click on any of the questions and answer, see how many more people are in your opinion.

### File structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── images # Images folder.
│   │   ├── avatar # Avatar folder.
│   │   │   ├── johndoe.png # John Doe avatar image.
│   │   │   ├── sarahedo.png # Sarah Edo avatar image.
│   │   │   └── tylermcginnis.png # Tyler Mcginnis avatar image.
│   │   └── 404.png # Image for NotMatch page.
│   └── index.html
└── src
    ├── actions # acrions folder contain all need actions.
    │   ├── authUser.js # authUser.js is action file for autheduser.
    │   ├── users.js # users.js is action file for users.
    │   ├── questions.js # questions.js is action file for questions.
    │   └── shared.js # shared.js is action file for initializes all action files.
    ├── components # acrions folder contain all need actions.
    │   ├── AnsweredQuestionList.js # This is list of all answered questions for authed user.
    │   ├── App.js # This is the root of your app. Contains static HTML right now.
    │   ├── Home.js # This is component who contain 2 tabs, first is Unanswered questions, second - Answered questions.
    │   ├── LeaderBoard.js # This component contain the 3 users with best score.
    │   ├── Login.js # This component contain part of login page.
    │   ├── LoginForm.js # This component contain login form.
    │   ├── Nav.js # This is navigation component
    │   ├── NewQuestion.js # This component contain form for user add question.
    │   ├── NoMatch.js # This is Not found/Not match component, he will load if in url uset add incorrect path to some page.
    │   ├── Question.js # This is component who display part of question.
    │   ├── QuestionPoll.js # This is component who contain form for the question of which user answered.
    │   ├── QuestionResult.js # This is component is for display result of user vote.
    │   └── UnasweredQuestionList.js # This is list of all unanswered questions for authed user.
    ├── middleware # middleware folder contain all need middlewares.
    │   ├── index.js # He is initial middleware.
    │   └── logger.js # He is logger middleware.
    ├── reducers # reducers folder contain all need reducers.
    │   ├── authUser.js # authUser.js is reducer file for autheduser.
    │   ├── users.js # users.js is reducer file for users.
    │   ├── questions.js # questions.js is reducer file for questions.
    │   └── index.js # index.js is reducer file for initializes all reducers files.
    ├── utils # utils folder contain data.
    │   ├── _DATA.js # In _DATA.js file is all initial users and questions.
    │   ├── api.js # this file is return initial data which the app needs .
    │   └── helpers.js # this file contain just one function for formating question.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

He is provide from Udacity React Nanodegree Program. Can be viewed in utils folder, file name is [`_DATA_.js`](src/utils/_DATA_.js). The file itself contains the methods and objects:

Methods:

- [`_getUsers`](#_getUsers)
- [`_getQuestions`](#_getQuestions)
- [`_saveQuestion`](#_saveQuestion)
- [`_saveQuestionAnswer`](#_saveQuestionAnswer)

### `_getUsers`

Method Signature:

```js
_getUsers();
```

- Returns a Promise which resolves to a JSON object containing a collection of users objects.

### `_getQuestions`

Method Signature:

```js
_getQuestions();
```

- Returns a Promise which resolves to a JSON object containing a collection of questions objects.

### `_saveQuestion`

Method Signature:

```js
_saveQuestion(question);
```

- question: `<Object>`
- Returns a Promise which resolves to a JSON object containing a collection of question object.

### `_saveQuestionAnswer`

Method Signature:

```js
_saveQuestionAnswer({ authUser, qi, answer });
```

- authUser: `<String>`
- qid: `<String>`
- answer: `<Object>`
- Returns a Promise which resolves to a JSON object containing a collection of question object with authUser answered.

Objects:

- [`users`](#users)
- [`questions`](#questions)

Method Signature:

```js
users;
```

- Returns users objects.

Method Signature:

```js
questions;
```

- Returns questions objects.
