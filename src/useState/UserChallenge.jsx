import React, { useState } from 'react'

export default function UserChallenge() {
    const [user, setUser] = useState(null)
    // const [toggle, setToggle] = useState(false)

    const handleClick = (e) =>{
        // e.preventdefault()
        const name = document.getElementsByName("name")[0].value
        const email = document.getElementsByName("email")[0].value
        const password = document.getElementsByName("password")[0].value
        if(!name || !email || !password){
            return( setUser(null),
                 console.log("null"))}
                
        
        const data = {
            name:name,
            email:email,
            password:password
        }
        console.log(data)
        setUser(data)
        // setToggle(true)
    }

    const logout = () =>{
        setUser(null)
        // setToggle(false)
    }

//   const {name, email, password} = user
  return ( 
    <div>

    {!user ?
        <div className='card'>
        <p>Please login</p>
      <input type="text" name="name" style={{margin:"3px"}} />
      <input type="email" name="email" style={{margin:"3px"}} required/>
      <input type="password" name="password"style={{margin:"3px"}} required/>
      <button type='submit' onClick={handleClick}>Submit</button>
    </div>
    :
    <div className='card'>
    <div className='cardItems'>
        <ul>
        <li>
            <h2 className='listItem'>{user.name}</h2>
            <p>email :{user.email}</p>
            <p>password: {user.password}</p> 
        </li>
        </ul>
    </div>
    <button onClick={()=>logout()} className='btn'>Logout</button>
    </div>}
    </div>
  )
}
