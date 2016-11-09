import React from "react";
import InnerButtons from "./InnerButtons";
import ActionsStore from "../Stores/ActionsStore";
import * as ActionsActions from "../FluxActions/ButtonActions";

const divStyle = {
margin: 5,
width: 150
};
export default class Buttons extends React.Component {
  constructor(){
    super();
    this.state ={
      buttons: ActionsStore.getAll(),
    }
  }
componentWillMount(){
  ActionsStore.on("change", () =>{
    this.setState({
      buttons: ActionsStore.getAll(),
    })
  })
}
createButton(){
  ActionsActions.createButton(Date.now());
}

render() {
  const id= this.props.id;
  const { buttons } =this.state;
  const childButtons = buttons[id-1].innerButtons;

  const InnerButtonsMap = childButtons.map((button) => {

    return <li key={button.id+200}><InnerButtons key={button.id} name={button.name} function={button.function}/></li>
  })
  return (
    <div style={divStyle}>
    <button key={this.props.id+"124"} style={divStyle} className="btn" onClick={this.props.function}>
      {this.props.name}</button>
      <div id={"div"+ this.props.id}>{InnerButtonsMap}</div>
    </div>
  );

}
}
