import React from "react";
const divStyle = {
  width: 150,
  paddingTop: 20,
};
export default class ProfilePicture extends React.Component {

  render() {
    return (
      <div>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png'} alt="profile Picture" className="img-responsive" style={divStyle} />
      </div>

    );
  }
}
