import { EventEmitter } from "events";
import dispatcher from "../dispatcher"
import * as ProfileActions from "../FluxActions/UpdateProfile";

class ActionsStore extends EventEmitter{
  constructor(){
    super();
    this.actions=[
      {
        id:1,
        name:"Work",
        function: function addExperience(){
          ProfileActions.addReward(20);
        }
      },
      {
        id:2,
        name:"Read",
        function: function addExperience(){
          ProfileActions.addReward(20);
        }
    },
    {
      id:3,
      name:"Practice tasks",
      function: function addExperience(){
        ProfileActions.addReward(20);
      }
  }
];
  }
  createButton(name){
    const id = Date.now();
    this.actions.push({
      id,
      name
    })
    this.emit("change");
  }
  getAll(){
    return this.actions;
  }

  handleActions(action){
    switch (action.type) {
      case "CREATE_BUTTON":
      this.createButton(action.name)
        break;
      default:
          console.log("other action");
    }
  }
}
const actionsStore = new ActionsStore;
dispatcher.register(actionsStore.handleActions.bind(actionsStore))
window.dispatcher = dispatcher;
export default actionsStore;
