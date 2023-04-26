import { Form2 } from './Form2';
import React from 'react'
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
    const [user, setUser] =  useState({
        name:'',
        nickName:'',
        email:'',
        password:''
    })
    const [usersData, setUsersData] =  useState(data)


    const handleChange = (e) =>{
        //  console.log(e.target.name)
        //  console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
       try{ 
        if(!user.name || !user.email || !user.password){
            return setIsError(true)
        }
        setIsError(false)
        setUsersData([user,...usersData])
        alert("User Added")
        
        setUser({
            name:'',
            nickName:'',
            email:'',
            password:''
        })

        document.getElementById("name").focus()

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
        console.log(index)
            setToggle(index);

        setTimeout(() => {
            setToggle(false)
        }, 1000);
    }

    const deleteAllUsers = () =>{
        setUsersData([])
    }


    return (
        <>
        <Form2 user={user} handleSubmit={handleSubmit} handleChange={handleChange} isError={isError} />
        <div>
            <h2 className='card'>Users List</h2>
            {usersData.map((user,index)=>{
                return(
                    <>
                    {toggle === index && <Deleted/> }
                    <Person {...user} key={index} index={index} deleteUser={deleteUser}/>
                    </>
                )
            })}
        </div>
        <div className='card'>
        { usersData.length > 0 ? (<button onClick={deleteAllUsers} className='btn' style={{fontWeight:"bold"}}>Remove all users</button>) : (<p>No users registered, Please Add New Users</p>)}
        </div>
        </>
    )
  }
  
  export default ControlledInputs
  