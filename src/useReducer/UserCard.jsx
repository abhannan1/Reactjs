import React from 'react'
import avatar from "../assets/womenAvatar.png"
import generalAvatar from "../assets/generalAvatar.png"


const Person = ({id, name, nickName = "Nick Name", images, deleteUser, number}) => {

  // const img = images && images[0] && images[0].small && images[0].small.url
  
  // const img = images?.[0]?.small?.url || avatar

  const randomNumber = Math.random();
  let result = randomNumber < 0.5 ? avatar : generalAvatar;
  const img = images?.[0]?.small?.url ?? result


  return (
    <div className='card'>
    <div className='cardItems'>
    <p className='number'>{`# ${number + 1}`}</p>
    <img className='logo' src={img} alt={name} />
    <ul>
        <li>
          <h2 className='listItem'>{name}</h2> 
          <h3 className='listItem' href={{}}>{nickName}</h3>
        </li>
    </ul>
    </div>
      <button onClick={()=>deleteUser(id, number)} className='btn' style={{margin:"5px"}}>Delete</button>
    </div>)
}

export default Person


