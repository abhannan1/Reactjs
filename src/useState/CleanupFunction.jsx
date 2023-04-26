import React, { useEffect, useState } from 'react'

const CleanupFunction = () => {
    const [toggle, setToggle] = useState(false);
    console.log("what")
  return (
    <div>
      <button className="btn" onClick={()=>setToggle(!toggle)}>Toggle Component</button>
      {toggle && <RandomComponent/>}
    </div>
  )
}


const RandomComponent = () => {
    //whole page does the initial render when we 
    // mount/unmount the component (parent component)
    useEffect(()=>{
        console.log("This is interesting")

           //use interval in this condition will run for 
    //1 sec and will keep accumulating this run and faster 
    // this will keep running in the background even if the component is unmounted and not showing
    //to counter this we will do the cleanup function
    // setInterval(()=>{
    //     console.log("Hello From interval")
    // },1000)

    //so we unsubscribe what ever we sill subscribe
    //set interval return the id
    // pass that id in clear interval
    //it will stop running in the background asa we unmount it

    // const intId = setInterval(()=>{
    //     console.log("Hello From interval")
    // },1000)

    // return ()=>{
    //     clearInterval(intId)
    //     console.log("cleanup")
    // }
    
    const someFunc =() =>{
        //some logic
    }

    //now with event listener when we toggle the component 
    // the event listener keep attached and keep adding to the window

    window.addEventListener("scroll", someFunc);

    return ()=>{
        window.removeEventListener("scroll", someFunc);
    }

    },[])

 
  return (
    <div className='card'>
      <h1>Hello There</h1>
    </div>
  )
}



export default CleanupFunction


