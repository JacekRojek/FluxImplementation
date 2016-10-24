import React from "react";
const divStyle = {
margin: 5,
};
export default class Buttons extends React.Component {

  render() {
    return (
        <div>
          <button style={divStyle} className="btn btn-success" onClick={this.props.function}>
            {this.props.name}
          </button>

        </div>
    );
  }
}
