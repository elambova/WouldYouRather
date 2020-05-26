import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image, Header, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { formatQuestion } from "../utils/helpers";

class Question extends Component {
  render() {
    const { question, authUser } = this.props;
    const { name, avatar, optionOne, optionTwo, id } = question;

    const optionOneVote = optionOne.votes.includes(authUser);
    const optionTwoVote = optionTwo.votes.includes(authUser);

    return (
      <Fragment>
        {optionOneVote || optionTwoVote ? (
          <Link
            key={id}
            to={`/questions/${id}`}
            id={id}
            className="link-question"
          >
            <div className="question border">
              <Header as="h2">{name} asks:</Header>
              <div className="question-content">
                <div className="image-content">
                  <Image src={avatar} alt={name} />
                </div>
                <div className="description">
                  <Header as="h3">Would you rather ...</Header>
                  <p>
                    {optionOne.votes.includes(authUser) ||
                    optionTwo.votes.includes(authUser)
                      ? optionOne.text
                      : optionTwo.text}
                  </p>
                  <Button basic color="teal" fluid>
                    View Poll
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <Link
            key={id}
            to={`/question/${id}`}
            id={id}
            className="link-question"
          >
            <div className="question border">
              <Header as="h2">{name} asks:</Header>
              <div className="question-content">
                <div className="image-content">
                  <Image src={avatar} alt={name} />
                </div>
                <div className="description">
                  <Header as="h3">Would you rather ...</Header>
                  <p>
                    {optionOne.votes.length >= optionTwo.votes.length
                      ? optionOne.text
                      : optionTwo.text}
                  </p>
                  <Button basic color="teal" fluid>
                    View Poll
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        )}
      </Fragment>
    );
  }
}
function mapStateToProps({ questions, users, authUser }, { id }) {
  const question = questions[id];
  const user = users[question.author];

  return {
    question: question ? formatQuestion(question, user) : null,
    authUser,
  };
}
export default withRouter(connect(mapStateToProps)(Question));
