import React, { useState, useEffect } from 'react';



function NumberInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        number: ""
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            number: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            number: ""
        })
    }




    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #3</h3>
            <p>Number: {formData.number}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: number</h3>
                <section className='form-body'>
                    <label>number
                        <input type='number' name='number' value={formData.number} onChange={handleChange} required />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default NumberInputForm;