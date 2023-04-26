import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import Card from './controlledInputs/Card'

const UseEffect = () => {
  const [users, setUsers] = useState([])
  const [toggle, setToggle] = useState(false)
  const url = "https://api.github.com/users"
  

  useEffect(() => {

     const getData = async() =>{
      const response = await fetch(url)
      const result = await response.json();
      console.log(result)
      if(!response.ok){
        setUsers([])
      }
      else{
        setUsers(result)
      }
    }
    getData()
  },[])
  
  const deleteUser = (id, number) => {
    const match = users.filter((user)=>user.id!==id)
    setUsers(match)
    setToggle(number)

    setTimeout(() => {
      setToggle(false)
    }, 1000);
  } 

  const deleteAllUsers = () =>{
    setUsers([])
}


  return (
    <div className='usersListCover'>
    <h1>Premium Users List</h1>
    {/* {toggle && <Card/>} */}
    <div className='usersList'>
      {users.map((user, index)=>{
        return (
          <div>
          {toggle === index && <Card/>}
        <UserCard {...user} key={user.id} number={index} deleteUser={deleteUser}/>
          </div>
         )
      })}
    </div>
    {users.length > 0 ? (<button className="btn" onClick={deleteAllUsers}>Delete All Items</button>) :
     <div className='card'>No users registered, add New users!</div>}
    </div>
  )
}

export default UseEffect
