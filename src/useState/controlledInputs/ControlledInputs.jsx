import { Form } from './Form';
import React, { useEffect } from 'react'
import "./controlledInputs.css"
import { useState } from 'react'
import Person from "./Person"
import Deleted from './Card';

export const data = [
    {id:1, name:"Abdul Hannan", age:27, hobby:"Programming"},
    {id:2, name:"Abdul Hadi", age:23, hobby:"Playing Cricket"},
    {id:3, name:"Abdul Qadir", age:20, hobby:"Watching Movies"},
    {id:4, name:"Abdul Khaliq", age:17, hobby:"Gardening"},
    {id:5, name:"Abdul Rehman", age:43, hobby:"Traveling"},
  ]


  const ControlledInputs = () => {
    const [toggle, setToggle] =  useState(false)
    const [isError, setIsError] =  useState(false)
    const [name, setName] =  useState("")
    const [nickName, setNickName] =  useState("")
    const [email, setEmail] =  useState("")
    const [password, setPassword] =  useState("")
    const [usersData, setUsersData] =  useState(data)
    
    const handleSubmit =(e)=>{
        e.preventDefault()
       try{ if(!name || !email || !password){
            return setIsError(true)
        }
        const id = Math.random()
        const newUser = {
            id,
            name,
            email,
            nickName,
            password
        }
        setIsError(false)
        setUsersData([newUser,...usersData])
        alert("User Added")
    }catch(err){
        console.log({error:err.message})
    }
    } 

    


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


    return (
        <>
        <Form   name={name} setName={setName} email={email} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} setNickName={setNickName} isError={isError} />
        <div>
            <h2 className='cover'>Users List</h2>
            {usersData.map((user,index)=>{
                return(
                    <>
                    {toggle === index && <Deleted/> }
                    <Person {...user} key={index} index={index} deleteUser={deleteUser}/>
                    </>
                )
            })}
        </div>
        <div className='cover'>
        { usersData.length > 0 ? (<button onClick={deleteAllUsers} className='remove-btn' style={{fontWeight:"bold"}}>Remove all users</button>) : (<p>No users registered, Please Add New Users</p>)}
        </div>
        </>
    )
  }
  
  export default ControlledInputs
  