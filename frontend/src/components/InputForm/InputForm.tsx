import { PropsWithChildren, useState } from "react"
import { predict } from "../../api/predict"
import { prediction } from "../../types"

export default function InputForm({ setPrediction }: PropsWithChildren<{ setPrediction: Function }>) {
    const [test1, setTest1] = useState("")
    const [test2, setTest2] = useState("")
    const [test3, setTest3] = useState("")
    const [test4, setTest4] = useState("")
    const [test5, setTest5] = useState("")
    const [test6, setTest6] = useState("")
    const [test7, setTest7] = useState("")
    const [test8, setTest8] = useState("")
    const [test9, setTest9] = useState("")
    const [test10, setTest10] = useState("")
    const [test11, setTest11] = useState("")
    const [test12, setTest12] = useState("")
    const [test13, setTest13] = useState(false)

    return (
        <>
            <h2>Prediction Form</h2>
            <form
                onSubmit={
                    async (e) => {
                        e.preventDefault()
                        setPrediction("loading")
                        const response: prediction = await predict({
                            "test1": test1,
                            "test2": test2,
                            "test3": test3,
                            "test4": test4,
                            "test5": test5,
                            "test6": test6,
                            "test7": test7,
                            "test8": test8,
                            "test9": test9,
                            "test10": test10,
                            "test11": test11,
                            "test12": test12,
                            "test13": test13
                        })
                        console.log(response, response.prediction)

                        setPrediction(response.prediction)
                    }
                }
            >
                <div className="tests">
                    <label>
                        Gram-staining:
                        <select name="t1" id="t1" value={test1} required onChange={(e) => {
                            setTest1(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                    <label>
                        Motility:
                        <select name="t2" id="t2" value={test2} required onChange={(e) => {
                            setTest2(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                    <label>
                        Oxidase:
                        <select name="t3" id="t3" value={test3} required onChange={(e) => {
                            setTest3(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                    <label>
                        Catalase:
                        <select name="t4" id="t4" value={test4} required onChange={(e) => {
                            setTest4(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                    <label>
                        Glucose Utilization:
                        <select name="t5" id="t5" value={test5} required onChange={(e) => {
                            setTest5(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="+/+">+/+</option>
                            <option value="-/-">-/-</option>
                        </select>
                    </label>
                    <label>
                        Incubation Temperature:
                        <select name="t6" id="t6" value={test6} required onChange={(e) => {
                            setTest6(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="0">&lt; 25&deg;C</option>
                            <option value="1">25&deg;C</option>
                            <option value="2">&gt; 25&deg;C</option>
                        </select>
                    </label>
                    <label>
                        Growth Medium:
                        <select name="t7" id="t7" value={test7} required onChange={(e) => {
                            setTest7(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="0">Gassner Agar Plates</option>
                            <option value="1">BHIA and TSA</option>
                            <option value="2">MacConkey</option>
                            <option value="3">Marine Agar 2216</option>
                            <option value="4">TCBS</option>
                            <option value="5">TSA</option>
                            <option value="6">TSA and BA</option>
                            <option value="7">TYES</option>
                        </select>
                    </label>
                    <label>
                        Reproduction Time:
                        <select name="t8" id="t8" value={test8} required onChange={(e) => {
                            setTest8(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="0">5-7 hours</option>
                            <option value="1">24-72 hours</option>
                            <option value="2">72-96 hours</option>
                            <option value="3">5 days</option>
                            <option value="4">7 days</option>
                        </select>
                    </label>
                    <label>
                        O/129:
                        <select name="t9" id="t9" value={test9} required onChange={(e) => {
                            setTest9(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="+">+</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                    <label>
                        Fish Species:
                        <select name="t10" id="t10" value={test10} required onChange={(e) => {
                            setTest10(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="0">Salmonid Fish</option>
                            <option value="1">Trout</option>
                            <option value="2">Environment</option>
                            <option value="3">Rainbow Trout</option>
                            <option value="4">Penaeus Monodon</option>
                            <option value="5">Oncorhynchus Mykiss</option>
                            <option value="6">Salmonid and Non-Salmonid</option>
                            <option value="7">Gilthead Sea Bream</option>
                        </select>
                    </label>
                    <label>
                        Habitat Temperature:
                        <select name="t11" id="t11" value={test11} required onChange={(e) => {
                            setTest11(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="0">3-21&deg;C</option>
                            <option value="1">21-35&deg;C</option>
                        </select>
                    </label>
                    <label>
                        Water Quality:
                        <select name="t12" id="t12" value={test12} required onChange={(e) => {
                            setTest12(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="0">Freshwater</option>
                            <option value="1">Seawater</option>
                            <option value="2">Freshwater and Seawater</option>
                        </select>
                    </label>
                    <label>
                        Slippage:
                        <input type="checkbox" onChange={(e) => {
                            setTest13(e.target.checked)
                        }} />
                    </label>
                </div>
                <button onClick={(e) => {
                    e.preventDefault()
                    setTest1("+")
                    setTest2("+")
                    setTest3("+")
                    setTest4("+")
                    setTest5("+/+")
                    setTest6("0")
                    setTest7("1")
                    setTest8("1")
                    setTest9("+")
                    setTest10("1")
                    setTest11("1")
                    setTest12("1")
                }}>Fill Values</button>
                <button>Predict</button>
            </form>
        </>
    )
}
