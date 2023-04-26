import React from 'react'

  
const UserCard = ({id, avatar_url, deleteUser, login , html_url, number}) =>  {

  console.log(avatar_url)
  return (
    <div className='card'>
    <div className='cardItems'>
        <p className='number'>{`# ${number + 1}`}</p>
        <img className='logo' src={avatar_url} alt={login} />
        <ul>
          <li>
            <h2 className='listItem'>{login}</h2> 
            <a className='listItem' href={html_url}>Profile</a>
          </li>
        </ul>
    </div>
      <button onClick={()=>deleteUser(id, number)} className='btn'>Delete</button>
    </div>
  )
}

export default UserCard
