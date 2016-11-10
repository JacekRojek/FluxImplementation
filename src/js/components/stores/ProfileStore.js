import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class ProfileStore extends EventEmitter{
  constructor(){
    super();
    this.money= 100,
    this.experience = 0,
    this.reputation = 0

  }
  addExperience(amount){
    this.experience += amount;
    this.emit("change");
  }
  addMoney(amount){
    this.money += amount;
    this.emit("change");
  }
  addReputation(amount){
    this.reputation += amount;
    this.emit("change");
  }


  handleActions(action){
    switch (action.type) {
      case "EXP":
        this.addExperience(action.amount)
        break;
      case "REP":
        this.addReputation(action.amount)
        break;
      case "MONEY":
        this.addMoney(action.amount)
        break;
      default:

    }
  }
}
const profileStore = new ProfileStore;
dispatcher.register(profileStore.handleActions.bind(profileStore))

export default profileStore;
