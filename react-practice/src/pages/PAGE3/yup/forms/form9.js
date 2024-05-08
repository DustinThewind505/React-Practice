import React, { useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    username: yup.string().required('must enter username'),
    email: yup.string().email('must enter a valid email').required(),
    jelly: yup.string().required('must choose a jelly'),
    terms: yup.boolean().oneOf([true], 'must agree')
})

function Form9(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        jelly: "",
        terms: false
    })

    const [errorState, setErrorState] = useState({
        username: "",
        email: "",
        jelly: "",
        terms: ""
    })


    // ========== FUNCTION ==========
    const validateChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        yup.reach(formSchema, e.target.name).validate(value)
        .then(res => setErrorState({
            ...errorState,
            [e.target.name]: ""
        }))
        .catch(err => setErrorState({
            ...errorState,
            [e.target.name]: err.errors[0]
        }))
    }

    const handleChange = e => {
        e.persist()

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        const newFormState = {
            ...formData,
            [e.target.name]: value
        }

        validateChange(e)

        setFormData(newFormState)
    }


    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            username: "",
            email: "",
            jelly: "",
            terms: false
        })
    }




    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #9</h3>
            <p>Username: {formData.username}</p>
            <p>Jelly: {formData.jelly}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: text, email, select, checkbox</h3>
                <section className='form-body'>
                    <label>username
                        <input type='text' name='username' value={formData.username} onChange={handleChange} />
                        {errorState.username.length > 0 ? <p className='error'>{errorState.username}</p> : null}
                    </label>
                    <label>email
                        <input type='email' name='email' value={formData.email} onChange={handleChange} />
                        {errorState.email.length > 0 ? <p className='error'>{errorState.email}</p> : null}
                    </label>
                    <label>jelly
                        <select name='jelly' value={formData.jelly} onChange={handleChange}>
                            <option value="">== Choose One ==</option>
                            <option value="grape">Grape</option>
                        </select>
                        {errorState.jelly.length > 0 ? <p className='error'>{errorState.jelly}</p> : null}
                    </label>
                    <label>terms & conditions
                        <input type='checkbox' name='terms' onChange={handleChange} checked={formData.terms}/>
                        {errorState.terms.length > 0 ? <p className='error'>{errorState.terms}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form9;