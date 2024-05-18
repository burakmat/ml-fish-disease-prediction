import { PropsWithChildren, useState } from "react"
import { predict } from "../../api/predict"

export default function InputForm({ setResult }: PropsWithChildren<{ setResult: Function }>) {
    const [test1, setTest1] = useState("")
    const [test2, setTest2] = useState("")
    const [test3, setTest3] = useState("")
    const [test4, setTest4] = useState("")
    const [test5, setTest5] = useState("")
    
    return (
        <div>
            <h2>Prediction Form</h2>
            <form
                onSubmit={
                    async (e) => {
                        e.preventDefault()
                        const response = await predict({
                            "test1": test1, 
                            "test2": test2, 
                            "test3": test3, 
                            "test4": test4, 
                            "test5": test5
                        })
                        console.log(response)
                        // setResult(response)
                        // setTest1("")
                        // setTest2("")
                        // setTest3("")
                        // setTest4("")
                        // setTest5("")
                    }
                }
            >
                <label>
                    Test 1:
                    <select name="t1" id="t1" onChange={(e) => {
                        setTest1(e.target.value)
                    }}>
                        <option value="" selected={test1 === ""}>--</option>
                        <option value="p">Positive</option>
                        <option value="n">Negative</option>
                    </select>
                </label>
                <label>
                    Test 2:
                    <select name="t2" id="t2" onChange={(e) => {
                        setTest2(e.target.value)
                    }}>
                        <option value="" selected={test2 === ""}>--</option>
                        <option value="p">Positive</option>
                        <option value="n">Negative</option>
                    </select>
                </label>
                <label>
                    Test 3:
                    <select name="t3" id="t3" onChange={(e) => {
                        setTest3(e.target.value)
                    }}>
                        <option value="" selected={test3 === ""}>--</option>
                        <option value="p">Positive</option>
                        <option value="n">Negative</option>
                    </select>
                </label>
                <label>
                    Test 4:
                    <select name="t4" id="t4" onChange={(e) => {
                        setTest4(e.target.value)
                    }}>
                        <option value="" selected={test4 === ""}>--</option>
                        <option value="p">Positive</option>
                        <option value="n">Negative</option>
                    </select>
                </label>
                <label>
                    Test 5:
                    <select name="t5" id="t5" onChange={(e) => {
                        setTest5(e.target.value)
                    }}>
                        <option value="" selected={test5 === ""}>--</option>
                        <option value="p">Positive</option>
                        <option value="n">Negative</option>
                    </select>
                </label>
                <button>Predict</button>
            </form>
        </div>
  )
}
