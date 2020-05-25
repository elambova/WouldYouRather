import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class AnsweredQuestionList extends Component {
  render() {
    const { authUser, questions, questionId } = this.props;
    return (
      <Fragment>
        {questionId.map((id) =>
          !questions[id].optionOne.votes
            .concat(questions[id].optionTwo.votes)
            .includes(authUser) ? (
            <Question key={id} id={id} />
          ) : null
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authUser}) {
  console.log(questions);
  return {
    authUser,
    questionId: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    questions,
    
  };
}

export default connect(mapStateToProps)(AnsweredQuestionList);
