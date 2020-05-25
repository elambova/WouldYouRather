export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserAnswer(authedUser, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function newQuestionUser(question) {
  return {
    type: ADD_QUESTION_USER,
    question,
  };
}
