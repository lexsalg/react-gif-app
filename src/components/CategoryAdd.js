import { useState } from "react";

import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // setCategories([...categories, 'nuevo'])
            setCategories(state => [inputValue, ...state])
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}