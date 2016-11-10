import React from "react";
import ProfilePicture from "./Profile/ProfilePicture";
import PlayerName from "./Profile/PlayerName";
import Level from "./Profile/Level";
import Money from "./Profile/Money";
import Reputation from "./Profile/Reputation";
import ProfileStore from "./Stores/ProfileStore";
import Skills from "./Profile/PlayerSkills";
const divStyle = {

};

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      experience: ProfileStore.experience,
      level: 1,
      money: ProfileStore.money,
      reputation: ProfileStore.reputation,
    };
  }
  componentWillMount(){
    ProfileStore.on("change", () =>{
      this.setState({
        experience: ProfileStore.experience,
        level: 1,
        money: ProfileStore.money,
        reputation: ProfileStore.reputation,
      })
    })
  }
  render() {
    return (
      <div style={divStyle}>
        <ProfilePicture name={this.props.name} />
        <PlayerName name={this.props.name} />
        <Level value={this.state.level}/>
        <Level value={this.state.experience}/>
        <Money value={this.state.money}/>
        <Reputation value={this.state.reputation}/>
        <Skills value={this.state.reputation} />
      </div>
    );
  }
}
