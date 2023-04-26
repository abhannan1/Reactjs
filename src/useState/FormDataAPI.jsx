import React, { useState } from 'react'
import "./controlledInputs.css"


const FormDataAPI = () => {
    const [isError, Error] = useState(false)


    const handleSubmit =(e)=>{
         e.preventDefault()
        //  console.log(e.currentTarget) 
        const formData = new FormData(e.currentTarget)
        // console.log(formData)
        // const entries = [...formData.entries()]
        // const values = [...formData.values()]
        // const keys = [...formData.keys()]
        // console.log(entries)
        // for( let [name, value] of formData){
        //     console.log(`${name}=${value}`)
        // }
        // const name = formData.get('name')
        // console.log(name)
        //as all of the values are in array form so use object method
        const newUser = Object.fromEntries(formData)
        console.log(newUser)
        // document.getElementById("form").reset()
        e.currentTarget.reset()
        document.getElementById("name").focus()
    }

  return (
    <form action="" className="form" id='form' onSubmit={handleSubmit}>
            <h2>Form Data API</h2>
            <div className="form-row">
                <label 
                htmlFor="name" 
                className="form-label">Name</label>
                <input 
                type="text" 
                id='name' 
                name='name'
                className="form-input" 
                // value={name} 
                // onChange={(e)=> setName(e.target.value)} 
                />
            </div>

            <div className="form-row">
                <label 
                htmlFor="email" 
                className="form-label">Email</label>
                <input 
                type="email" 
                id='email' 
                name='email'
                className="form-input" 
                // value={email} 
                // onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            
            <div className="form-row">
                <label 
                htmlFor="password" className="form-label">Password</label>
                <input 
                type="password" 
                id='password' 
                name='password'
                className="form-input" 
                // onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {isError ? <p className="error">Please fill Out All fields!</p> : ""}
            <button 
            type='submit' 
            className="btn btn-block" 
            >Submit</button>
        </form>
  )
}

export default FormDataAPI
