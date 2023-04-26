import React, { useState } from 'react'
import UserCard from './UserCard'

 export const data = [
  {id:1, name:"Abdul Hannan"},
  {id:2, name:"Abdul Hadi"},
  {id:3, name:"Abdul Qadir"},
  {id:4, name:"Abdul Khaliq"},
  {id:5, name:"Abdul Rehman"},
]

// {userData.map((user)=>(
//   <div className='card' key={user.id}>
//   <p>{`# ${user.id}`}</p>
//   <p>{user.name}</p>
//   <button onClick={()=>deleteUser(user.id)}>Delete</button>
// </div>
// ))}

const ListChallenge = () => {
  const [userData, setUserData] = useState(data)

  const deleteUser = (id) =>{
      setUserData(()=>userData.filter((user)=>user.id!==id))
  }

  
  const deleteAllUser = (id) =>{
    setUserData([])
}
  
  return (
    <>
        <h1>Users List</h1>
    <div className='userList'>
      {userData.map((user)=>{
        return <UserCard  {...user} key={user.id} deleteUser={deleteUser} />  
      })}
    </div>
    { userData.length > 0 ? (<button onClick={deleteAllUser}>Remove all</button>) : (<p>Nothing to Show</p>)}
    </>
  )
}

export default ListChallenge
