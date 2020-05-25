import { ADD_QUESTION, ADD_VOTE } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  // console.log([action.authUser]);
  switch (action.type) {
    case ADD_QUESTION:
      const author = state[action.question.author];

      return {
        ...state,
        [action.question.author]: {
          ...author,
          questions: author.questions.concat(action.question.id),
        },
      };
    case ADD_VOTE:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answers,
          },
        },
      };
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
