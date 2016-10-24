import React from "react";

export default class Level extends React.Component {

  render() {
    return (
        <h3>Level: <span >{this.props.value}</span></h3>
    );
  }
}
