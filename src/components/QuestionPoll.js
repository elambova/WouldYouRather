import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Form, Radio, Header } from "semantic-ui-react";
import { handleVote } from "../actions/shared";
import { Redirect } from "react-router-dom";

class QuestionPoll extends Component {
  state = {
    value: "",
    toResult: false,
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;

    const { dispatch, authUser } = this.props;
    const id = this.props.match.params.id;
    dispatch(handleVote(authUser, id, value));

    this.setState(() => ({
      value: "",
      toResult: true,
    }));
  };

  render() {
    const { value, toResult } = this.state;

    const id = this.props.location.pathname.slice(10);
    const { questions, users } = this.props;
    const questionResult = `/questions/${id}`;

    if (toResult === true) {
      return <Redirect to={questionResult} />;
    } else if (questions[id] === undefined) {
      return <Redirect to="/404" />;
    }

    const disabled = value === "" ? true : false;

    const { optionOne, optionTwo, author } = questions[id];
    const { name, avatarURL } = users[questions[id].author];

    return (
      <div className="question border">
        <Header as="h2">{name} asks:</Header>
        <div className="question-content">
          <div className="image-content">
            <Image src={avatarURL} alt={author} />
          </div>
          <div className="description">
            <Header as="h3">Would you rather ...</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group grouped>
                <Form.Field
                  control={Radio}
                  label={optionOne.text}
                  value="optionOne"
                  checked={value === "optionOne"}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label={optionTwo.text}
                  value="optionTwo"
                  checked={value === "optionTwo"}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Button
                content="Submit"
                color="teal"
                disabled={disabled}
                fluid
              />
            </Form>
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
export default connect(mapStateToProps)(QuestionPoll);
