import React, { useState } from 'react'
import { useEffect } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setname] = useState('')
  const [list, setlist] = useState([])
  const [alert, setalert] = useState({color:'',text:''})

useEffect(() => {
 const timeout = setTimeout(() => {
  setalert('')
 }, 3000);
 return ()=>clearTimeout(timeout)

}, [alert,name])



  const handleForm = (e) => {
    e.preventDefault()
    const person = { name, id: new Date().getTime().toString() }
    if (name) {
      setlist([...list, person])
      console.log(list)
      setname('')
            setalert({ color: 'green', text: 'Added!' })

   
    }
    if (!name) {
      setalert({color:'red', text:'Enter please!'})

    } else {

    }
  }
  return (
    <form onSubmit={handleForm}>
      <p className={alert.color}> {alert.text}</p>
      <input
        id='name'
        type='text'
        name='name'
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button type='submit'>add</button>
      <div>
        {list.map((item) => {
          console.log(list)
          const { name, id } = item
          console.log(name)
          return <p key={id}>{name}</p>
        })}
      </div>
    </form>
  )
}

export default ControlledInputs
