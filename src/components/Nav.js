import React, { Component } from "react";
import { NavLink, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Menu, Image } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";

class Nav extends Component {
  state = { activeItem: "home" };

  handleLogout = (e) => {
    e.preventDefault();
    this.props.setAuthUser(null);
    window.history.replaceState({ page: "login" }, "Login", "/");
  };
  handleLoad = (e) => this.setState({ activeItem: "" });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { user } = this.props;

    return (
      <Menu pointing secondary color="teal" onLoad={this.handleLoad}>
        <Container>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={NavLink}
            to="/"
            exact
          />
          <Menu.Item
            name="New Question"
            active={activeItem === "add"}
            onClick={this.handleItemClick}
            as={NavLink}
            to="/add"
          />
          <Menu.Item
            name="leader_board"
            active={activeItem === "leader_board"}
            onClick={this.handleItemClick}
            as={NavLink}
            to="/leader_board"
          />
          <Menu.Menu position="right">
            <Menu.Item className="welcome-user">
              <span>Hello, {user[0].name}</span>
              <Image src={user[0].avatarURL} avatar />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleLogout}
              as={NavLink}
              to="/login"
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
function mapStateToProps({ users, authUser }) {
  return {
    authUser,
    user: Object.keys(users)
      .map((user) => {
        return {
          id: users[user].id,
          avatarURL: users[user].avatarURL,
          name: users[user].name,
        };
      })
      .filter((key) => (key.id === authUser ? users : null)),
  };
}
export default withRouter(connect(mapStateToProps, { setAuthUser })(Nav));
