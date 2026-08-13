import { useState } from "react"

function Calculadora() {
    const [input, setInput] = useState('0')
    const btns = ['7', '8', '9', '*', '4', '5', '6', '/', '1', '2', '3', '+', 'C', '0', '=', '-']

    const handleClick = (btn) => {
        if (btn === 'C') {
            setInput('0')
        }
        else if (btn === '=') {
            try {
                setInput(eval(input).toString())
            } catch (error) {
                setInput('ERRO DE SINTAXE')
            }
        }
        else {
            setInput(input => input === '0' || input === 'Erro' ? btn : input + btn)
        }

    }

    return (
        <>
            <div className="calculadora-container">
                <div className="calculadora">
                    <div className="ecra-container">
                        <p name="ecra" id="ecra">{input}</p>
                    </div>
                    <div className="btns-container">{
                        btns.map(btn => (
                            <button key={btn} onClick={() => handleClick(btn)} className="nums">{btn}</button>
                        ))
                    }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculadora