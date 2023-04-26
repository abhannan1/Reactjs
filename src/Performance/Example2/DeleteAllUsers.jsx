import React from 'react'

const DeleteAllUsers = ({deleteAllUsers, usersData}) => {
    
  return (
    <div className='cover'>
    { usersData.length > 0 ? 
    (<button 
    onClick={deleteAllUsers} 
    className='remove-btn' 
    style={{fontWeight:"bold"}}>Remove all users</button>) 
    : 
    (<p>No users registered, Please Add New Users</p>)}
    </div>
  )
}

export default DeleteAllUsers
