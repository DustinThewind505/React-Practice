import React, { useState, useEffect } from 'react';



function NumberInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        checkbox: false
    })



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            checkbox: e.target.checked
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            checkbox: false
        })
    }





    return (
        <div className='form-container'>
            <h3>Form #6</h3>
            <p>Checkbox: {formData.checkbox ? 'Checked✔✔✔🎉🎉' : ''}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: checkbox</h3>
                <section className='form-body'>
                    <label>checkbox
                        <input type='checkbox' name='checkbox' checked={formData.checkbox} onChange={handleChange} required />
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