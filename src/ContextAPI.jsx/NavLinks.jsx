import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = () => {
  return (
    <div className='navbar'>
        <div className='nav-links'> 
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
      <UserContainer />
    </div>
  )
}

export default NavLinks
