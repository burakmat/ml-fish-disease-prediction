import InputForm from './components/InputForm/InputForm'
import './App.css'
import { useState } from 'react'

function App() {
    const [result, setResult] = useState({})

  return (
    <>
        <h1>Web-based Fish Disease Prediction Application</h1>
        <InputForm setResult={setResult}/>
    </>
  )
}

export default App
