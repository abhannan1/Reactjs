import React, { useReducer, useState } from 'react'
import Person from '../UserCard'
import { 
    DELETE_A_USER, 
    DELETE_ALL_USERS, 
    RESET_ALL,
   } from './actions'
import reducer from "./customUseReducerHook"
import useReducerHook from './customUseReducerHook'


// const reducer = (state, action)=>{
//     if(action.type === DELETE_ALL_USERS){
//         return {...state, usersData:[]}
//     }
//     if(action.type === RESET_ALL){
//         return {...state, usersData:data}
//     }
//     if(action.type === DELETE_A_USER){
//         const newUserData = state.usersData.filter((user)=>user.id !== action?.payload?.id);
//         return {...state, usersData:newUserData}
//     }
    
    //will return current state "no action will be performed if there is any error"
    //return state

//     //or you can throw error
//      throw new Error(`No matching ${action.type} action type`)
// }

const UseReducer = (id) => {
//   const [state, dispatch] = useReducer(reducer, defaultState)
  const {deleteAllUsers, deleteUser, resetUsers, state} = useReducerHook(id)

//   const deleteUser = (id) =>{
//     dispatch({type:DELETE_A_USER, payload:{id}})
//   }

  
//   const deleteAllUsers = (id) =>{
//     //send always in object form //this will go in action object
//     dispatch({type:DELETE_ALL_USERS})
// }
  
// const resetUsers = ()=>{
//     dispatch({type: RESET_ALL})
// }
  return (
    <>
    <h1>Users List</h1>
    <div className='userList'>
    {state.usersData.map((user, index)=>{
        return (
        <Person 
        {...user} 
        key={user.id} 
        deleteUser={deleteUser} 
        number={index} /> 
        ) 
         })}
    </div>
        { state.usersData.length > 0 
        ?
        (<button onClick={deleteAllUsers}>Remove all</button>) 
        :
        (<button onClick={resetUsers}>Reset</button>)}
        </>
  )
}

export default UseReducer
