import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
const reducer =(state,action)=>{

}
  const defaultState ={
    people : [data],
    name : false,
  }

  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer,defaultState)

  const handleSubmit =(e)=>{
e.preventDefault()
  }

  return (
    <div>
      <form action="">
        <input type="text" 
        onChange={(e)=>setName(e.target.value)}
        value={name} />
        <button>Add</button>
      </form>
      <div>{
        data.map((item)=>{
         return <p>{item.name}</p>
        })
      }</div>
    </div>
  )
  }
export default Index
