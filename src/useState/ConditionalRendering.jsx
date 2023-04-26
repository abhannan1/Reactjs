import React, { useEffect, useState } from 'react'
const url = "https://api.github.com/users/QuincyLarson"

const ConditionalRendering = () => {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)


useEffect(()=>{
    
    const fetchData = async() =>{
        try{
            // setTimeout( async() => {
                const response = await fetch(url)
                //unlike axios, fetch API does not consider 
                //HTTP status codes btw 4xx to 5xx range to be errors
                //so use this method to display error
                if (!response.ok){
                    setIsError(true)
                    setIsLoading(false)
                    return 
                    // using return here to avoid doing extra 
                    //work of json and others
                }
                const jsonResp = await response.json()
                setData(jsonResp)
                // setIsLoading(false)
            // }, 3000);
            
        }catch(err){
            console.log({error:err.message})
            setIsError(true)
        }
        setIsLoading(false)
    }  
    fetchData()
},[])




if(isLoading){
    return <h2>.....Loading</h2>
}

if(isError){
    return <h2>Some Error While Loading the Data</h2>
}


const {avatar_url, name, company, bio } = data
return (
    <div>
      <img src={avatar_url} alt={name} className='logo' />
      <h2>{name}</h2>
      {/* <p>{age}</p> */}
      <h3>{`Works At: ${company}`}</h3>
      <p>{`Occupation: ${bio}`}</p>
     {/* <button >Show Next User</button> */}
    </div>
  )
}

export default ConditionalRendering
