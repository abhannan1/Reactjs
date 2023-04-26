import React, { useState } from 'react'
import Person from './Person'
import Deleted from './Card'


const List = ({usersData, deleteUser, toggle}) => {

  return (
    <div>
    <h2 className='cover'>Users List</h2>
    {usersData.map((user,index)=>{
        return(
            <>
            {toggle === index && <Deleted/> }
            <Person 
            {...user} 
            key={index} 
            index={index} 
            deleteUser={()=>deleteUser(user.id,index)}/>
            </>
        )
    })}
</div>
  )
}

export default List
