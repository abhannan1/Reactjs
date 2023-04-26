import React from 'react'
import "../../useState/controlledInputs/controlledInputs.css"
import { useState } from 'react'
import AddUser from './AddUser';
import List from './List';
import DeleteAllUsers from './DeleteAllUsers';

export const data = [
    {id:1, name:"Abdul Hannan", age:27, hobby:"Programming"},
    {id:2, name:"Abdul Hadi", age:23, hobby:"Playing Cricket"},
    {id:3, name:"Abdul Qadir", age:20, hobby:"Watching Movies"},
    {id:4, name:"Abdul Khaliq", age:17, hobby:"Gardening"},
    {id:5, name:"Abdul Rehman", age:43, hobby:"Traveling"},
  ]


  const ControlledInputsPerformance = () => {
    const [toggle, setToggle] =  useState(false)
    const [usersData, setUsersData] =  useState(data)
    
    

    const deleteUser=(id, index)=>{
        const newData = usersData.filter((user)=>user.id!==id)
        if (index + 1 === usersData.length){
            setTimeout(()=>{
             setUsersData(newData)
            },1000)
        }
        else{
            setUsersData(newData)
        }
        // console.log(index)
        setToggle(index);

        

        console.log(toggle)
        setTimeout(() => {
            setToggle(false)
        }, 1000);
    }

    const deleteAllUsers = () =>{
        setUsersData([])
    }

    const addTheUser =(name,email,nickName, password)=>{
        const id = Math.random()
        const newUser = {
            id,
            name,
            email,
            nickName,
            password
        }
        setUsersData([newUser,...usersData])
        alert("User Added")
    }


    return (
        <div className='cover-div'>
        <AddUser addTheUser={addTheUser}/>
        <List 
        usersData={usersData} 
        deleteUser={deleteUser} 
        toggle={toggle}/>
        <DeleteAllUsers 
        usersData={usersData} 
        deleteAllUsers={deleteAllUsers}/>
        </div>
    )
  }
  
  export default ControlledInputsPerformance
  