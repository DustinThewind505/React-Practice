import React, { useState, useEffect } from 'react'



function RangeInput(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        range: 25
    })


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            range: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)
    }

    useEffect(() => {
        if(formData.range < 50){
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }, [formData])

    // ========== COMPONENTS ==========
    return (
        <div className='form-container'>
            <h3>Form #10</h3>
            <p>Range: {formData.range}%</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: range</h3>
                <section className='form-body'>
                    <label>
                        <input type='range' name='range' min='0' max='100' value={formData.range} onChange={handleChange} />
                        {formData.range <= 50 ? <p className='error'>* range too low</p> : <p className='error'>✔</p>}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default RangeInput;