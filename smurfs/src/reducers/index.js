/*
  Be sure to import in all of the action types from `../actions`
*/

import {

  ADD_SMURF,
  ADDING_SMURF,
  GET_SMURFS,
  GETTING_SMURFS,
  UPDATE_SMURF,
  UPDATING_SMURF,
  DELETE_SMURF,
  DELETING_SMURF,
  ERROR

} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
  */

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case GETTING_SMURFS:
        return {...state, gettingSmurfs: true}
    case GET_SMURFS:
      return {
        ...state, 
        smurfs: action.smurfs,
        gettingSmurfs: false
      }
    case ADDING_SMURF:
      return {...state, addingSmurf: true} 
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.smurfs,
        addingSmurf: false
      }
    case DELETING_SMURF:
      return {...state, deletingSmurf: true}
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: [...action.smurfs],
        deletingSmurf: false
      }
    case ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
