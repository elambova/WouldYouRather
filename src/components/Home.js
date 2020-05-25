import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import { connect } from "react-redux";
import AnsweredQuestionList from "./AnsweredQuestionList";
import UnansweredQuestionList from "./UnansweredQuestionList";

const panes = [
  {
    menuItem: "Unanswered question",
    render: () => (
      <Tab.Pane>
        <UnansweredQuestionList />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Answered question",
    render: () => (
      <Tab.Pane>
        <AnsweredQuestionList />
      </Tab.Pane>
    ),
  },
];

export class Home extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
  }
}

export default connect()(Home);
