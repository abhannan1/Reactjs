import React, { useReducer, useState } from 'react'
import Person from './UserCard'
import { 
    DELETE_A_USER, 
    DELETE_ALL_USERS, 
    RESET_ALL,
    data
   } from './action'
import { reducer } from './reducer'


export  const defaultState = {
    usersData:data
}


const UseReducer1 = (id) => {
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

export default UseReducer1
