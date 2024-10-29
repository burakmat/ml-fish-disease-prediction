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
    const [test10, setTest10] = useState(false)

    return (
        <>
            <h2>Prediction Form</h2>
            <form
                onSubmit={
                    async (e) => {
                        e.preventDefault()
                        setPrediction("loading")
                        const response: prediction = await predict({
                            "Gram Boyama": test1,
                            "Hareket": test2,
                            "Oksidaz": test3,
                            "Katalaz": test4,
                            "glukoz kullanımı": test5,
                            "inkübasyon sıcaklık aralığı": test6,
                            "ürediği besi yeri": test7,
                            "üreme süresi": test8,
                            "O/129": test9,
                            "slippage": test10
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
                            <option value="+/-">+/-</option>
                            <option value="-/+">-/+</option>
                            <option value="-/-">-/-</option>
                        </select>
                    </label>
                    <label>
                        Incubation Temperature:
                        <select name="t6" id="t6" value={test6} required onChange={(e) => {
                            setTest6(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="< 25">&lt; 25&deg;C</option>
                            <option value=">= 25">&gt;= 25&deg;C</option>
                        </select>
                    </label>
                    <label>
                        Growth Medium:
                        <select name="t7" id="t7" value={test7} required onChange={(e) => {
                            setTest7(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="TSA">TSA</option>
                            <option value="BHIA">BHIA</option>
                            <option value="BA">BA</option>
                            <option value="NA">NA</option>
                            <option value="Pseudomonas agar">Pseudomonas agar</option>
                            <option value="Pseudomonas selective medyum">Pseudomonas selective medyum</option>
                            <option value="Pseudomonas CFC medyum">Pseudomonas CFC medyum</option>
                            <option value="TCBS">TCBS</option>
                            <option value="Tuzlu TSA">Tuzlu TSA</option>
                            <option value="Tuzlu BA">Tuzlu BA</option>
                            <option value="Tuzlu BHIA">Tuzlu BHIA</option>
                            <option value="MA">MA</option>
                            <option value="TYES ve AO">TYES ve AO</option>
                            <option value="TYES with fotal bovine serum">TYES with fotal bovine serum</option>
                            <option value="KDM">KDM</option>
                            <option value="KDM-1">KDM-1</option>
                            <option value="KDM-2">KDM-2</option>
                            <option value="KDM-C">KDM-C</option>
                            <option value="MacConkey">MacConkey</option>
                        </select>
                    </label>
                    <label>
                        Reproduction Time:
                        <select name="t8" id="t8" value={test8} required onChange={(e) => {
                            setTest8(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="24-48 saat">24-48 hours</option>
                            <option value="48-72 saat">48-72 hours</option>
                            <option value="72- 96 saat">72-96 hours</option>
                            <option value="2-6 hafta">2-6 weeks</option>
                        </select>
                    </label>
                    <label>
                        O/129:
                        <select name="t9" id="t9" value={test9} required onChange={(e) => {
                            setTest9(e.target.value)
                        }}>
                            <option value="">--</option>
                            <option value="R">R</option>
                            <option value="S">S</option>
                            <option value="0">Undefined</option>
                        </select>
                    </label>
                    <label>
                        Slippage:
                        <input type="checkbox" onChange={(e) => {
                            setTest10(e.target.checked)
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
                    setTest6("< 25")
                    setTest7("TYES ve AO")
                    setTest8("72- 96 saat")
                    setTest9("R")
                }}>Fill Values</button>
                <button>Predict</button>
            </form>
        </>
    )
}
