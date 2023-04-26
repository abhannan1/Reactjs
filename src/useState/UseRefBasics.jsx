import React, { useState ,useEffect, useRef } from 'react'
import "./controlledInputs.css"

//like useState but updating useRef does not trigger rerender
//preserves the value between renders
//target DOM nodes/elements
//uncontrolled inputs

const UseRefBasics = () => {
    const [isError, setIsError] = useState(false); 
    const [value, setValue] = useState(0)
    const isMounted = useRef(false) ; 


    //this will focus on every refresh of page
    useEffect(()=>{
        refContainer.current.focus()
    },[])


    //if we want to avoid some func to run at initial render
    //will only run when the value is updated
    useEffect(()=>{
        if(!isMounted.current){
            isMounted.current = true;
            return
        }
        //logic here
        console.log("re-render")
    },[value])
    
    const refContainer = useRef(null)
    //this runs during the initial render
    // console.log(refContainer)

    //this runs after the initial render as well so it 
    //will not be null after any state is updated
    // useEffect(()=>{
    //     console.log(refContainer)
    // })


    const handleSubmit =(e)=>{
         e.preventDefault()
         const name = refContainer.current.value
         refContainer.current.focus()
         console.log(name)
    }

    const increment = () =>{

        setValue((currentValue)=>{ 
            const newValue = currentValue+1
            // console.log(newValue)
            return newValue })
            // console.log(value)
        
    }

  return (
    <div>
    <form action="" className="form" id='form'  onSubmit={handleSubmit}>
            <h2>Form Data API</h2>
            <div className="form-row">
                <label 
                htmlFor="name" 
                className="form-label">Name</label>
                <input 
                type="text" 
                id='name' 
                name='name'
                ref={refContainer}
                className="form-input" 
                // value={name} 
                // onChange={(e)=> setName(e.target.value)} 
                />
            </div>
            {isError ? <p className="error">Please fill Out All fields!</p> : ""}
            <button 
            type='submit' 
            className="btn btn-block" 
            >Submit</button>
        </form>
        <div className='card'>
            <h2>Value : {value} </h2>
            <button className='btn' onClick={increment}>Increase</button>
        </div>
    </div>
  )
}

export default UseRefBasics
