import React from "react";

export default class Reputation extends React.Component {

  render() {
    return (
        <h3>Reputation: <span>{this.props.value}</span></h3>
    );
  }
}
