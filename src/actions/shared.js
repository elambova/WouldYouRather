import { showLoading, hideLoading } from "react-redux-loading";

import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

import { getInitialData } from "../utils/api";
import { receiveUsers, newQuestionUser } from "./users";
import { receiveQuestions, addQuestion, addVote } from "./questions";
import { setAuthUser } from "./authUser";

const AUTH_ID = null;

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthUser(AUTH_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleAddQuestion(author, optionOneText, optionTwoText) {
  return (dispatch) => {
    return _saveQuestion({ author, optionOneText, optionTwoText }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(newQuestionUser(question));
      }
    );
  };
}

export function handleVote(authUser, qid, answer) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authUser, qid, answer }).then(() => {
      dispatch(addVote(authUser, qid, answer));
      dispatch(newQuestionUser(authUser, qid, answer));
    });
  };
}
