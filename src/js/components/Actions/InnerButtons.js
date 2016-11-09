import React from "react";
const divStyle = {
margin: 5,
marginLeft: 40,
width: 200,

};
export default class InnerButtons extends React.Component {

  render() {
    return (

          <button style={divStyle} className="btn" onClick={this.props.function}>
            {this.props.name}
          </button>

    );
  }
}
