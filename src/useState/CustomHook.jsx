import React from 'react'
import useToggle from './useToggle'

const CustomHook = () => {
    const {show, toggle} = useToggle(false)

  return (
    <div className='card'>
      <h2>Toggle Custom Hook</h2>
      <button onClick={toggle}>Toggle</button>
      {show && <h2>Some stuff</h2>}
    </div>
  )
}

export default CustomHook
