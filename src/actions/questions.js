export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_VOTE = "ADD_VOTE";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function addVote(authUser, qid, answer) {
  return {
    type: ADD_VOTE,
    authUser,
    qid,
    answer,
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}


