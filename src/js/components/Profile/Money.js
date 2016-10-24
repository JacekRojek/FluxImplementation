import React from "react";

export default class Money extends React.Component {

  render() {
    return (
        <h3>Money: <span >{this.props.value}</span></h3>
    );
  }
}
