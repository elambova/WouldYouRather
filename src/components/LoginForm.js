import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";
import { Header, Form } from "semantic-ui-react";

class LoginForm extends Component {
  static propTypes = {
    onLoading: PropTypes.func.isRequired,
  };
  state = {
    value: "",
  };

  onChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onLoading, setAuthUser } = this.props;
    const authUser = this.state.value;

    new Promise((res, rej) => {
      onLoading();
      setTimeout(() => res(), 1000);
    }).then(() => setAuthUser(authUser));
  };

  render() {
    const { value } = this.state;
    const disabled = value === "" ? true : false;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h2" color="green">
          Sign In
        </Header>
        <Form.Dropdown
          placeholder="Select a Friend"
          fluid
          selection
          scrolling
          options={this.props.users}
          value={value}
          onChange={this.onChange}
          required
        />
        <Form.Button content="Login" positive disabled={disabled} fluid />
      </Form>
    );
  }
}

function mapStateToProps({ users, authUser }) {
  return {
    users: Object.values(users).map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    })),
    authUser,
  };
}
export default connect(mapStateToProps, { setAuthUser })(LoginForm);
