import React, { useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    email: yup.string().email().required('must enter a valid email'),
    password: yup.string().min(8, "must be at least 8 characters").required()
})



function Form8(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [errorsState, setErrorsState] = useState({
        email: "",
        password: ""
    })



    // ========== FUNCTION ==========
    const validateChange = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(res => setErrorsState({
                ...errorsState,
                [e.target.name]: ""
            }))
            .catch(err => setErrorsState({
                ...errorsState,
                [e.target.name]: err.errors[0]
            }))
    }

    const handleChange = e => {
        e.persist(e)

        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        validateChange(e)

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            email: "",
            password: ""
        })
    }




    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #8</h3>
            <p>input 1: {formData.email}</p>
            <p>input 2: {formData.password}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: email & password</h3>
                <section className='form-body'>
                    <label>email
                        <input type='email' name='email' value={formData.email} onChange={handleChange} />
                        {errorsState.email.length > 0 ? <p className='error'>{errorsState.email}</p> : null}
                    </label>
                    <label>password
                        <input type='password' name='password' value={formData.password} onChange={handleChange} />
                        {errorsState.password.length > 0 ? <p className='error'>{errorsState.password}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form8;