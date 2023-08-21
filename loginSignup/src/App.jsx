import { useState } from 'react'

import './App.css'
import { Signup } from './register'
import { Login } from './login'

function App() {
  const [currentForm , setcurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setcurrentForm(formName);
  }


  return (
    <>
      {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch ={toggleForm}/>}

      
    </>
  )
}

export default App
