import React, { useState, useEffect } from 'react';



function TextInputForm(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        username: ""
    })


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            username: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            username: ""
        })
    }

    useEffect(() => {
        if (formData.username === "") {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [formData])





    return (
        <div className='form-container'>
            <h3>Form #1</h3>
            <p>Username: {formData.username}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: text</h3>
                <section className='form-body'>
                    <label>username
                        <input name='username' value={formData.username} onChange={handleChange} required />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default TextInputForm;