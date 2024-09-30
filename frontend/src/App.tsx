import InputForm from './components/InputForm/InputForm'
import './App.css'
import { useState } from 'react'
import LoadIndicator from './components/LoadIndicator/LoadIndicator'

function App() {
    const [prediction, setPrediction] = useState("")

    return (
        <>
            <h1>Web-based Fish Disease Prediction Application</h1>
            <div className='content'>
                {prediction === "" ?
                    <InputForm setPrediction={setPrediction} />
                    :
                    <>
                        {prediction === "loading" ?
                            <LoadIndicator />
                            :
                            <>
                                <h2>Predicted result: {prediction}</h2>
                                <button onClick={() => {
                                    setPrediction("")
                                }}
                                >Back
                                </button>
                            </>
                        }
                    </>
                }
            </div>
        </>
    )
}

export default App
