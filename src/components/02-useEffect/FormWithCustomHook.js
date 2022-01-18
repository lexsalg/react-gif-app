import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {


    const [formState, inputChange] = useForm({ email: '', name: '', password: '' });
    const { email, name, password } = formState;

    useEffect(() => {
        console.log('cambió email');
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with custom hook</h1>
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

            <div className='form-group'>
                <input className='form-control'
                    type='password'
                    name='password'
                    placeholder='******'
                    value={password}
                    onChange={inputChange}
                />

            </div>

            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>

        </form>
    )
}
