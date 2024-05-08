import { useState } from 'react'

import useLocalStorage from './useLocalStorage';

const useInput = (key, initialValue) => {
    const [values, setValue] = useLocalStorage(key, initialValue);

    const handleChange = e => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        alert(`Hello ${values}`)
    }

    const clearForm = e => {
        e.preventDefault();

        setValue(initialValue)
    }

    return [values, clearForm, handleChange, handleSubmit]
}

export default useInput;