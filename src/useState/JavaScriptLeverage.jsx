import React, { useState } from 'react'
import Person from './Person'

export const peoples = [
    { id: 1, name: 'bob', nickName: 'Stud Muffin' },
    { id: 2, name: 'peter' },
    {
    id: 3,
    name: 'oliver',
    images: [
        {
            small: {
            url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg',
            },
        },
    ],
},
    { id: 4, name: 'david' },
]                  

const JavaScriptLeverage = () => {
  const [people, setPeople] = useState(peoples)

  const deleteUser = (id) =>{
    setPeople(()=>people.filter((person)=>person.id!==id))
}

  return (
    <div>
      {people.map((person, index)=>{
        return ( 
          <Person key={index} {...person} deleteUser={deleteUser} number={index}/>
        )
      })}
    </div>
  )
}

export default JavaScriptLeverage
