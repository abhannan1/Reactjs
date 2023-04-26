import React, { useContext } from 'react'
import { NavbarContext, useNavContext } from './Navbar'

const UserContainer = () => {
    //context hook only available in the tree
    // const value = useContext(NavbarContext)
    // const {user, login, logout} = value

    ////For custom context hook it will remove the use of 
    //importing useContext and NavbarContext just import useNavContext
    const value = useNavContext()


  return (
    <div>            
        <div className='nav-user'>
       {!value?.user ? 
        <>
        <span><b>Please </b></span>
        <button 
        className='btn' 
        onClick={value?.login}>Login</button>
        </> 
        :
        <>
        <span><b>Hello There, {value?.user?.name?.toUpperCase()}</b></span>
        <button 
        className='btn' 
        onClick={value?.logout}>logout</button>
        </>
        }
        </div>
    </div>
  )
}

export default UserContainer
