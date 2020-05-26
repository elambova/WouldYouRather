import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import QuestionPoll from "./QuestionPoll";
import QuestionResult from "./QuestionResult";
import NoMatch from "./NoMatch";

class App extends Component {
  async componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.authUser === null ? (
            <Route component={Login} />
          ) : (
            <Fragment>
              <Nav />
              <Grid padded="vertically" columns={1} centered>
                <Grid.Row>
                  <Grid.Column style={{ maxWidth: 550 }}>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/add" component={NewQuestion} />
                      <Route
                        exact
                        path="/leaderboard"
                        component={LeaderBoard}
                      />
                      <Route path="/question/:id" component={QuestionPoll} />
                      <Route path="/questions/:id" component={QuestionResult} />
                      <Route component={NoMatch} />
                    </Switch>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    users,
  };
}

export default connect(mapStateToProps)(App);
