import React, { Component } from "react";
import { notFound } from "../utils/_DATA";
import { Link } from "react-router-dom";
import { Image, Header } from "semantic-ui-react";

class NoMatch extends Component {
  render() {
    return (
      <div className="noMatch">
        <Image src={notFound} />
        <Header as="h2" style={{ textAlign: "center" }}>
          The question with this id does not exist!
        </Header>
        <Link to="/" style={{ display: "block", textAlign: "center" }}>
          Please go to Home
        </Link>
      </div>
    );
  }
}

export default NoMatch;
