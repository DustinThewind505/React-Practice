import React, { useEffect, useState } from 'react';




function LoginForm2(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState({
        email: "*",
        password: "*"
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
            email: "",
            password: ""
        })

        setError({
            ...error,
            password: '*'
        })
    }


    useEffect(() => {
        if (formData.password.length === 0) {
            setError({
                ...error,
                password: '*'
            })
        } else if (formData.password.length < 8) {
            setError({
                ...error,
                password: 'password must have 8 characters'
            })
        } else {
            setError({
                ...error,
                password: ""
            })
        }

    }, [formData.password])


    useEffect(() => {
        if (formData.email.length === 0) {
            setError({
                ...error,
                email: '*'
            })
        } else {
            setError({
                ...error,
                email: ''
            })
        }
    }, [formData.email])

    useEffect(() => {
        if (formData.password.length > 7 && formData.email.length > 0) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [formData])


    // ========== COMPONENT ==========
    return (
        <>
            <div className='form-container'>
                <h3>Form #8</h3>
                <p>email:{formData.email}</p>
                <p>password: {formData.password}</p>
                <form onSubmit={handleSubmit}>
                    <h3>Input: email & password</h3>
                    <section className='form-body'>
                        <label>email
                            <input type='email' name='email' value={formData.email} onChange={handleChange} autoComplete='on' required />
                            <p className='error'>{error.email}</p>
                        </label>
                        <label>password
                            <input type='password' name='password' value={formData.password} onChange={handleChange} autoComplete='off' required />
                            <p className='error'>{error.password}</p>
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

export default LoginForm2;