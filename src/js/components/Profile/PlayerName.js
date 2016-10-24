import React from "react";

export default class PlayerName extends React.Component {

  render() {
    return (
        <h2>{this.props.name}</h2>
    );
  }
}
