import React, { useState } from 'react'


export const data = [
    {id:1, name:"Abdul Hannan", age:27, hobby:"Programming"},
    {id:2, name:"Abdul Hadi", age:23, hobby:"Playing Cricket"},
    {id:3, name:"Abdul Qadir", age:20, hobby:"Watching Movies"},
    {id:4, name:"Abdul Khaliq", age:17, hobby:"Gardening"},
    {id:5, name:"Abdul Rehman", age:43, hobby:"Traveling"},
  ]

const ObjectChallenge = () => {
const [userData, setUserData] = useState(data[0])
const [count, setCount] = useState(0)

const nextUser = () => {
    if(count >= data.length - 1){
        setCount(0)        
    }
    else{
        setCount((currentCount)=>{
            return currentCount + 1
        })      
    }
    console.log(count)
    setUserData(data[count])
};


  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.age}</p>
      <p>{`Enjoys: ${userData.hobby}`}</p>
     <button onClick={nextUser}>Show Next User</button>
    </div>
  )
}

export default ObjectChallenge
