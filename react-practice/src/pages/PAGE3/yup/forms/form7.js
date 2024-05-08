import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    password1: yup.string().min(8).lowercase().required(),
    password2: yup.string().min(8).lowercase().required()
})




function Form7(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)



    const [formData, setFormData] = useState({
        password1: "",
        password2: ""
    })

    const [errorsState, setErrorState] = useState({
        password1: "",
        password2: ""
    })



    // ========== FUNCTION ==========
    const validateChange = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(res => setErrorState({
                ...errorsState,
                [e.target.name]: ""
            }))
            .catch(err => setErrorState({
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

        if (formData.password1 !== formData.password2) {
            setErrorState({
                password1: "passwords must match",
                password2: "passwords must match"
            })
        } else {
            props.setDisplayForm(formData)

            setFormData({
                password1: "",
                password2: ""
            })

        }
    }


    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])

    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #7</h3>
            <p>input 1: {formData.password1}</p>
            <p>input 2: {formData.password2}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: password</h3>
                <section className='form-body'>
                    <label>password
                        <input type='password' name='password1' value={formData.password1} onChange={handleChange} />
                        {errorsState.password1.length > 0 ? <p className='error'>{errorsState.password1}</p> : null}
                    </label>
                    <label>confirm password
                        <input type='password' name='password2' value={formData.password2} onChange={handleChange} />
                        {errorsState.password2.length > 0 ? <p className='error'>{errorsState.password2}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form7;