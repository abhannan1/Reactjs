import React, { useState } from 'react'
import { Form } from './Form'

const AddUser = ({addTheUser}) => {
    const [name, setName] =  useState("")
    const [isError, setIsError] =  useState(false)
    const [nickName, setNickName] =  useState("")
    const [email, setEmail] =  useState("")
    const [password, setPassword] =  useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
       try{ if(!name || !email || !password){
            return setIsError(true)
        }

        addTheUser(name,email,nickName,password)
        setIsError(false)

    }catch(err){
        console.log({error:err.message})
    }
    } 

  return (
<div>
    <Form   
    name={name} 
    setName={setName} 
    email={email} 
    setEmail={setEmail} 
    setPassword={setPassword} 
    handleSubmit={handleSubmit} 
    setNickName={setNickName} 
    isError={isError} />
</div>
  )
}

export default AddUser
