import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Image, Progress, Divider } from "semantic-ui-react";

class QuestionResult extends Component {
  render() {
    const id = this.props.location.pathname.slice(17);
    const { questions, users } = this.props;

    const { optionOne, optionTwo, author } = questions[id];
    const { name, avatarURL } = users[questions[id].author];
    const allVotes = optionOne.votes.concat(optionTwo.votes);

    return (
      <div className="question border">
        <Header as="h2">Asked by {name}</Header>
        <div className="question-content">
          <div className="image-content">
            <Image src={avatarURL} alt={author} />
          </div>
          <div className="description">
            <Header as="h3">Results:</Header>
            <div className="border padding">
              <p className="options">{optionOne.text}</p>
              <Progress
                className="progress-bar-margin"
                progress
                percent={(optionOne.votes.length / allVotes.length) * 100}
              />
              <p className="votes">
                {optionOne.votes.length} out of {allVotes.length} votes
              </p>
            </div>
            <Divider />
            <div className="border padding">
              <p className="options">{optionTwo.text}</p>
              <Progress
                className="progress-bar-margin"
                progress
                percent={(optionTwo.votes.length / allVotes.length) * 100}
              />
              <p className="votes">
                {optionTwo.votes.length} out of {allVotes.length} votes
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ questions, users, authUser }) {
  return {
    questions,
    users,
    authUser,
  };
}
export default connect(mapStateToProps)(QuestionResult);
