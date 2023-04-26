import React, { useState } from 'react'

const ShortCircuit = () => {
const [text, setText] = useState('')
const [name, setName] = useState("susan")

const codeExample = text || "hello world"

  return (
    <div>
        <h4>Falsy OR: {text || "Hello word"}</h4>
        <h4>Falsy AND: {text && "Hello word"}</h4>
        <h4>Truthy OR: {name || "Hello word"}</h4>
        <h4>Truthy AND: {name && "Hello word"}</h4>
        {codeExample}
    </div>
  )
}

export default ShortCircuit
