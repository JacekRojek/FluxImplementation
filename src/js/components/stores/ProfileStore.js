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
    this.experience += 100;
    console.log(this.experience);
    this.emit("change");
  }


  handleActions(action){
    switch (action.type) {
      case "EXP":
      this.addExperience(action.amount)
        break;
      default:

    }
  }
}
const profileStore = new ProfileStore;
dispatcher.register(profileStore.handleActions.bind(profileStore))

export default profileStore;
