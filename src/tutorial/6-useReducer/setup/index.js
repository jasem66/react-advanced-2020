import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { useEffect } from 'react'
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [list, setlist] = useState([])

  const randomId = new Date().getTime().toString()

  const reducer = (state, action) => {
    if (action.type === 'ADD') {
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        people: newPeople,
      }
    }
    if (action.type === 'MODAL_OPEN') {
      return {
        ...state,
        modalOpen: true,
        modalContent: 'enter it',
      }
    }

    throw new Error('no matching action type')
  }
  const defaultState = {
    people: [list],
    name: '',
    modalOpen: false,
    modalContent: '',
  }

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const person = { name, id: randomId }
      dispatch({
        type: 'ADD',
        payload: person,
      })
      setName('')
    }
    if (!name) {
      dispatch({ type: 'MODAL_OPEN' })
         setName('')
    } else {
      setName('')
    }
  }
  // useEffect(() => {
  //  const timeOut=setTimeout(() => {

  //  }, 2000);
  //  return()=>clearTimeout(timeOut)
  // })

  return (
    <div>
      {(state.modalOpen  ) && (
        <div className='w-50 h-100 bg-success p-5 m-5 rounded'>
          {state.modalContent}
        </div>
      )}
      <form className='p-5' onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          name='name'
        />
        <button className='btn btn-primary text-danger'>Add</button>
      </form>
      <div>
        {state.people.map((item) => {
          return <p key={item.id}>{item.name}</p>
        })}
      </div>
    </div>
  )
}
export default Index
