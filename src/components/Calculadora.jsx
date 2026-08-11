import { useState } from "react"

function Calculadora() {
    const [input, setInput] = useState('0')
    const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    return (
        <>
            <div className="calculadora-container">
                <div className="calculadora">
                    <div className="ecra-container">
                        <p name="ecra" id="ecra">{input}</p>
                    </div>
                    <div className="btns-container">{
                        nums.map(num => (
                            <button key={num} className="nums" onClick={() => setInput(input => input === '0' ? num : input + num)}>{num}</button>
                        ))}
                        <button onClick={()=>setInput('0')} className="limpar">limpar</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Calculadora