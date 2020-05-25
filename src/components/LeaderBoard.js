import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image, Label, Icon, Header, Divider } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";

class LeaderBoard extends Component {
  render() {
    const { users } = this.props;

    return (
      <Fragment>
        {users.map((user) => (
          <div key={user.id} className="leader-board border">
            <Label corner="left">
              <Icon name="trophy" />
            </Label>
            <Image src={user.avatarURL} />
            <div className="leader-board-description">
              <Header as="h1">{user.name}</Header>
              <p>Answered questions</p>
              <span>{user.answeredResults}</span>
              <Divider />
              <p>Created questions</p>
              <span>{user.questionsResults}</span>
            </div>
            <div className="score-result">
              <div>
                <Header as="h3">Score</Header>
                <p>{user.score}</p>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((user) => {
        return {
          id: users[user].id,
          avatarURL: users[user].avatarURL,
          name: users[user].name,
          answeredResults: Object.keys(users[user].answers).length,
          questionsResults: users[user].questions.length,
          score:
            Object.keys(users[user].answers).length +
            users[user].questions.length,
        };
      })
      .sort((a, b) => b.score - a.score),
  };
}
export default connect(mapStateToProps, { setAuthUser })(LeaderBoard);
