import React, { useState, useEffect } from 'react';



function EmailInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        email: ""
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            email: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            email: ""
        })
    }





    return (
        <div className='form-container'>
            <h3>Form #2</h3>
            <p>Email: {formData.email}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: email</h3>
                <section className='form-body'>
                    <label>email
                        <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default EmailInputForm;