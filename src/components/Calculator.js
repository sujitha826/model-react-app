import React, { useRef, useState } from 'react';
import '../css/Calc.css';

export default function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus = (e) => {
        e.preventDefault();
        setResult(result => result + Number(inputRef.current.value));
    }

    const minus = (e) => {
        e.preventDefault();
        setResult(result => result - Number(inputRef.current.value));
    }

    const times = (e) => {
        e.preventDefault();
        setResult(result => result * Number(inputRef.current.value));
    }

    const divide = (e) => {
        e.preventDefault();
        setResult(result => result / Number(inputRef.current.value));
    }

    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    const resetResult = (e) => {
        e.preventDefault();
        setResult(prev => prev * 0);
    }

    return (
        <div className='calc-container'>
            <div>
                <h2>Simplest Working Calculator</h2>
            </div>

            <form className='form-input'>
                <p ref={resultRef}>{result}</p>
                <input ref={inputRef} pattern='[0-9]' type='number' placeholder='Type a Number'></input>
                <div className='form-actions'>
                    <button onClick={plus}>+</button>
                    <button onClick={minus}>-</button>
                    <button onClick={times}>X</button>
                    <button onClick={divide}>/</button>
                    <button className='reset' onClick={resetInput}>Reset Input</button>
                    <button className='reset' onClick={resetResult}>Reset Result</button>
                </div>
            </form>
            
        </div>
    );
}
