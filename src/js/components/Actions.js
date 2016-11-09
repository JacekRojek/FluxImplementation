import React from "react";
import Buttons from "./Actions/Buttons";
import ActionsStore from "./Stores/ActionsStore";
import * as ActionsActions from "./FluxActions/ButtonActions";

const divStyle = {

};

export default class Actions extends React.Component {
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
    const { buttons } =this.state;
    const ButtonComponents = buttons.map((button) => {

      return <Buttons id={button.id} key={button.id+"123"} name={button.name} function={button.function}/>
    })
    return (
      <div style={divStyle}>
        <h2>Actions</h2>
        <ul>{ButtonComponents}</ul>

      </div>
    );
  }
}
