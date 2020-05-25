import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Header, Button, Divider } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleChangeOptionOne = (e) => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne,
    }));
  };

  handleChangeOptionTwo = (e) => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state;

    const { dispatch, authUser } = this.props;
    console.log(this.props);
    dispatch(handleAddQuestion(authUser, optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    }));
  };
  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <Container className="new-question border">
        <Header as="h1">Create new question</Header>
        <p>Complete the question:</p>
        <Form onSubmit={this.handleSubmit}>
          <Header as="h2">Would you rather ...</Header>
          <Form.Field>
            <input
              type="text"
              placeholder="Enter option one"
              value={optionOne}
              onChange={this.handleChangeOptionOne}
            />
          </Form.Field>
          <Divider horizontal>Or</Divider>
          <Form.Field>
            <input
              type="text"
              placeholder="Enter option two"
              value={optionTwo}
              onChange={this.handleChangeOptionTwo}
            />
          </Form.Field>
          <Button
            color="teal"
            type="submit"
            fluid
            disabled={optionOne === "" && optionTwo === ""}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
