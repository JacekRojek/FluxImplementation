import dispatcher from "../dispatcher"

export function createButton(name){
  dispatcher.dispatch({
    type:"CREATE_BUTTON",
    name
  })
}
export function deleteButton(id){
  dispatcher.dispatch({
    type:"DELETE_BUTTON",
    name
  })
}
