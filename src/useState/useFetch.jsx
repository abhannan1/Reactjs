import React, { useEffect } from 'react'
import { useState } from 'react'

//custom hooks are just functions starting with name use
//custom hook function contain hooks in it 
//custom hooks are made to be available outside a component
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchData =async()=>{
          try { const response = await fetch(url)
            console.log(response.json)
            if(!response.ok){
                setIsError(true)
                setIsLoading(false)
                return
            }
            const jsonRes = await response.json();
            console.log(jsonRes)
            setData(jsonRes)
            setIsLoading(false)
            return
        }catch(err){
            setIsError(true)
        }
        }
        fetchData()
    },[])

  return {isLoading, isError, data }
}

export default useFetch
