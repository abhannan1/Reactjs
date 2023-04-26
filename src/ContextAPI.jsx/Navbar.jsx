import React, { createContext, useContext, useState } from 'react'
import NavLinks from './NavLinks'
import "./Navbar.css"

export const NavbarContext = createContext()

//For custom context hook it will remove the use of importing 
//useContext and NavbarContext just import useNavContext
export const useNavContext = () =>useContext(NavbarContext)

const Navbar = () => {
    const [user, setUser] = useState({name:"Bob"})

    const logout = ()=>{
        setUser(null)
    }

    const login = () =>{
        setUser({name:"Bob"})
    }
  return (
    //props passed in it will be available anywhere in this tree
    <NavbarContext.Provider value={{user, login, logout}}>
        <div className='navbar-cont'>
        <div className="nav-bar">
        <h3>CONTEXT API</h3>
        <NavLinks/>
        </div>
    </div>
    </NavbarContext.Provider>
  )
}

export default Navbar
