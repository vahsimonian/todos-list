import React, { useState } from 'react'
// import styles from './App.module.css'
import './index.css'
import Modal from './Modal'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <button className={'primaryBtn'} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  )
}

export default App
