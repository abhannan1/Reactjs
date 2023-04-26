import React, { useEffect } from 'react'
import { useState } from 'react'


const useFetchPerson = (url) => {
    const [user, setUser] = useState(null)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchUser =async()=>{
          try { const response = await fetch(url)
            console.log(response.json)
            if(!response.ok){
                setIsError(true)
                setIsLoading(false)
                return
            }
            const jsonRes = await response.json();
            console.log(jsonRes)
            setUser(jsonRes)
            setIsLoading(false)
            return
        }catch(err){
            setIsError(true)
        }
        }
        fetchUser()
    },[])

  return {isLoading, isError, user, }
}

export default useFetchPerson
