import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Grid, Dimmer, Loader, Image } from "semantic-ui-react";
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    loading: false,
  };

  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="login">
        <div className="login-header">
          <Header as="h3">
            <Header.Content>
              Welcome to the Would You Rather App!
            </Header.Content>
          </Header>
          <Header.Subheader>Please sign in to continue</Header.Subheader>
        </div>
        <div className="login-container">
          <Image sixe="small" src="" alt="" />
          <div>
            <Grid padded textAlign="center">
              <Grid.Row className="login">
                <Grid.Column width={16}>
                  {loading === true && (
                    <Dimmer active inverted>
                      <Loader inverted content="Loading" />
                    </Dimmer>
                  )}
                  <Image sixe="small" src="" alt="" />
                  <br />
                  <LoginForm onLoading={this.handleLoading} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
