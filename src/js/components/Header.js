import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div class="info-top text-center">
        <Title title={this.props.title} />

      </div>
    );
  }
}
