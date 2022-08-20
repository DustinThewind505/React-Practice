import React, { useState, useEffect } from 'react';



function FormInput() {
    // ========== STATE ==========
    const [formData, setFormData] = useState("");


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newState = e.target.value

        setFormData(newState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        setFormData("")
    }

    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #11</h3>
            <p>username: {formData}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: text</h3>
                <section className='form-body'>
                    <label>username
                        <input type='month' value={formData} onChange={handleChange} />
                        <p className='error'>{formData === "" ? '*must enter username' : '✔'}</p>
                    </label>
                </section>
                <footer>
                    <button type='text' disabled={formData === "" ? true : false}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default FormInput;