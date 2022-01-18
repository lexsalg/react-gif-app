import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {


    const [formState, setFormState] = useState({ email: '', name: '' });
    const { email, name } = formState;

    // arreglo vacío, solo se dispara una vez
    useEffect(() => {
        console.log('hola mundo');
    }, [])

    useEffect(() => {
        console.log('cambio el formulario [formState]');
    }, [formState])

    useEffect(() => {
        console.log('cambio el campo email [formState]');
    }, [email])


    const inputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input className='form-control'
                    type='text'
                    name='name'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={inputChange}
                />
            </div>

            <div className='form-group'>
                <input className='form-control'
                    type='text'
                    name='email'
                    placeholder='@email'
                    autoComplete='off'
                    value={email}
                    onChange={inputChange}
                />

            </div>

            {name && <Message />}

        </>
    )
}
