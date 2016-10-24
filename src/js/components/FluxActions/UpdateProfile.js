import dispatcher from "../dispatcher"

export function addReward(amount, type = "EXP"){
  dispatcher.dispatch({
    amount,
    type
  })
}
