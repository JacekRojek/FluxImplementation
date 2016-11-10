import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";
import Actions from "./Actions";
import GitImage from "./Others/GitLogo";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
      name: "Player",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <GitImage />
        <Header title="GameDevEmpire - Developed by IndieDevArt"/>

        <Profile name={this.state.name}/>

        <Actions />


        </div>
    );
  }
}
