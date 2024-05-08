import React, { useEffect, useState } from 'react';




function LoginForm(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(false)

    const [formData, setFormData] = useState({
        password1: "",
        password2: ""
    })

    const [errors, setErrors] = useState({
        password1: "*",
        password2: "*"
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.setDisplayForm(formData)

        setFormData({
            password1: "",
            password2: ""
        })

        setErrors({
            password1: '*',
            password2: '*'
        })
    }

    useEffect(() => {
        if(formData.password1.length === 0) {
            setErrors({
                ...errors,
                password1: '*'
            })
        } else if(formData.password1.length < 8) {
            setErrors({
                ...errors,
                password1: 'password must have 8 characters'
            })
        } else {
            setErrors({
                ...errors,
                password1: ""
            })
        }
    }, [formData.password1])

    useEffect(() => {
        if(formData.password2.length === 0) {
            setErrors({
                ...errors,
                password2: '*'
            })
        } else if(formData.password1 !== formData.password2) {
            setErrors({
                ...errors,
                password2: 'passwords must match'
            })
        } else {
            setErrors({
                ...errors,
                password2: ""
            })
        }
    }, [formData.password2])

    useEffect(() => {
        if(formData.password1 !== formData.password2 || formData.password1.length < 8){
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [formData])





    // ========== COMPONENT ==========
    return (
        <>
            <div className='form-container'>
                <h3>Form #7</h3>
                <p>Password: {formData.password1}</p>
                <p>Confirm pwd: {formData.password2}</p>
                <form onSubmit={handleSubmit}>
                    <h3>Input: text & email</h3>
                    <section className='form-body'>
                        <label>password
                            <input type='password' name='password1' value={formData.password1} onChange={handleChange} required/>
                            <p className='error'>{errors.password1}</p>
                        </label>
                        <label>confirm password
                            <input type='password' name='password2' value={formData.password2} onChange={handleChange} required/>
                            <p className='error'>{errors.password2}</p>
                        </label>
                    </section>
                    <footer>
                        <button type='submit' disabled={disableButton}>Submit</button>
                    </footer>
                </form>
            </div>
        </>
    )
}

export default LoginForm;