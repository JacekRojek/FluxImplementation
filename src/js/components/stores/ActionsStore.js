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
        function: function slide(){
          $("#div1").slideToggle();
        },
        innerButtons:[
            {
              id:11,
              name:"Warehouse",
              function: function addExperience(){
                ProfileActions.addReward(20, "REP");
                ProfileActions.addReward(20, "MONEY");
                ProfileActions.addReward(20, "EXP");
              }
            },
            {
              id:12,
              name:"Freelancer",
              function: function addExperience(){
                ProfileActions.addReward(20);
              }
          },
          {
            id:13,
            name:"Developer",
            function: function addExperience(){
              ProfileActions.addReward(20);
            }
        }]
      },
      {
        id:2,
        name:"Read",
        function: function slide(){
          $("#div2").slideToggle();
        },
        innerButtons:[
            {
              id:21,
              name:"Warehouse",
              function: function addExperience(){
                ProfileActions.addReward(20);
              }
            },
            {
              id:22,
              name:"Freelancer",
              function: function addExperience(){
                ProfileActions.addReward(20);
              }
          },
          {
            id:23,
            name:"Developer",
            function: function addExperience(){
              ProfileActions.addReward(20);
            }
        }]
      },

    {
      id:3,
      name:"Practice tasks",
      function: function slide(){
        $("#div3").slideToggle();
      },
      innerButtons:[
          {
            id:31,
            name:"Warehouse",
            function: function addExperience(){
              ProfileActions.addReward(20);
            }
          },
          {
            id:32,
            name:"Freelancer",
            function: function addExperience(){
              ProfileActions.addReward(20);
            }
          },
          {
            id:33,
            name:"Developer",
            function: function addExperience(){
              ProfileActions.addReward(20);
            }
        }]
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
        
    }
  }
}
const actionsStore = new ActionsStore;
dispatcher.register(actionsStore.handleActions.bind(actionsStore))
window.dispatcher = dispatcher;
export default actionsStore;
