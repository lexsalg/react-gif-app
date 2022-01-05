import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {
    const { state: counter, increment, decrement, factorAdd, factorSub, reset } = useCounter(200);
    return (
        <>
            <h1>Counter with hook:{counter}</h1>
            <hr />

            <button onClick={increment} className='btn btn-primary'>+1</button>
            <button onClick={decrement} className='btn btn-danger'> -1</button>
            <button onClick={() => factorAdd(2)} className='btn btn-primary'>+ factor 2</button>
            <button onClick={() => factorSub(2)} className='btn btn-danger'> - factor 2</button>
            <button onClick={reset} className='btn btn-warning'> Reset</button>


        </>
    )
}
