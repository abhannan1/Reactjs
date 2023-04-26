import React from 'react'
import useFetch from './useFetch'
const url = "https://api.github.com/users/QuincyLarson"

const CustomHook2 = () => {
    const {isLoading, isError, data: user} = useFetch(url)
    //order maters
    //don't place user jsx before loading or error

    if(isLoading){
        return <h2>....loading</h2>
    }

    if(isError){
        return <h2>some error occurred while fetching data</h2>
    }

    const {avatar_url, name, company, bio } = user

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

export default CustomHook2
