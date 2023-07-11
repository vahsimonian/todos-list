import React, { useState, createContext } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState('')

  return <Context.Provider value={''}>{children}</Context.Provider>
}

export { Context, ContextProvider }
