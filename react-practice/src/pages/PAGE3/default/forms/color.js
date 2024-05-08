import React, { useState } from 'react';





function ColorInput(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        currentColor: ""
    })

    const [bgColor, setBgColor] = useState('darkred')

    const bgStyle = {
        background: bgColor
    }

    // ========== FUNCTIONS ==========
    const handlechange = e => {
        const newFormState = {
            currentColor: e.target.value
        }

        setFormData(newFormState)

        setBgColor(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            currentColor: ""
        })

        setBgColor('darkred')
    }


    // ========== COMPONENTS ==========
    return (
        <div className='form-container'>
            <h3>Form #8</h3>
            <p>Color: {formData.currentColor}</p>
            <form onSubmit={handleSubmit} style={bgStyle}>
                <h3>Input: color</h3>
                <section className='form-body'>
                    <label>
                        <input type='color' name='currentColor' value={formData.currentColor} onChange={handlechange} required />
                        <p className='error'>{formData.currentColor === "" ? '*' : '✔'}</p>
                    </label>
                    <footer>
                        <button type='submit' disabled={formData.currentColor ? false : true}>Submit</button>
                    </footer>
                </section>
            </form>
        </div>
    )
}

export default ColorInput;