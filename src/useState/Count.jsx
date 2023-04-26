import React, { useState } from 'react'

const Count = () => {
const [count, setCount] = useState(0)


const handleClick = () =>{
    setTimeout(() => {
      setCount((prevState)=>{
        return prevState + 1
      })
    }, 3000);
}

  return (
    <div>
      {count}
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Count
