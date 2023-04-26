import React, { useState } from 'react'
import "./controlledInputs.css"

const frameworks = ["React", "Angular", "Vue", "PHP", "Python"] 
const OtherInputs = () => {
    const [shipping, setShipping] = useState(false)
    const [framework, setFramework] = useState("PHP")

    console.log(shipping)
    console.log(framework)
const handleSubmit=()=>{
    e.preventDefault()
}
  return (
    <form action="" className="check-form">
        <h2>Select Options</h2>
        <div className="row">
            <label htmlFor="shipping" className="label">Free shipping:</label>
            <input 
            type="checkbox" 
            id='shipping' 
            className="ship-input" 
            checked={shipping} 
            onChange={(e)=> setShipping(e.target.checked)} />
        </div>
        <div className="row">
            <label htmlFor="framework" className="label">Framework:</label>
            <select 
            name="framework" 
            id="framework" 
            className='drop-down'
            value={framework}
            onChange={(e)=> setFramework(e.target.value)}>{
                frameworks.map((framework)=>{
                    return <option key={framework}>{framework}</option>
                })
            }</select>
        </div>
        <button className="btn btn-block" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default OtherInputs
