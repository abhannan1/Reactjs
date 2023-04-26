import { useReducer } from "react";
import { 
    DELETE_A_USER, 
    DELETE_ALL_USERS, 
    RESET_ALL,
    defaultState,
    data
} from './actions'

// import { defaultState } from "./actions";

export const reducer = (state, action)=>{
    if(action.type === DELETE_ALL_USERS){
        return {...state, usersData:[]}
    }
    if(action.type === RESET_ALL){
        return {...state, usersData:data}
    }
    if(action.type === DELETE_A_USER){
        const newUserData = state.usersData.filter((user)=>user.id !== action?.payload?.id);
        return {...state, usersData:newUserData}
    }
    
    //will return current state "no action will be performed if there is any error"
    //return state

    //or you can throw error
     throw new Error(`No matching ${action.type} action type`)
}



const useReducerHook = (id) =>{
    const [state, dispatch] = useReducer(reducer, defaultState)

    const deleteUser = (id) =>{
      dispatch({type:DELETE_A_USER, payload:{id}})
    }
  
    
    const deleteAllUsers = (id) =>{
      //send always in object form //this will go in action object
      dispatch({type:DELETE_ALL_USERS})
  }
    
  const resetUsers = ()=>{
      dispatch({type: RESET_ALL})
  }

  return {deleteUser, deleteAllUsers, resetUsers, state}
} 

export default useReducerHook