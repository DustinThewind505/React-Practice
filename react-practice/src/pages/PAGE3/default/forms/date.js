import React, { useState } from 'react';




function DateForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        curDate: ""
    })




    // ========== FUNCTION ==========
    const handleChange = e => {
        const newFormState = {
            curDate: e.target.value
        }

        setFormData(newFormState)
    }
    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            curDate: ""
        })
    }


    // ========== COMPONENT ==========
    return(
        <div className='form-container'>
            <h3>Form #7</h3>
            <p>input: {formData.curDate}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: date</h3>
                <section className='form-body'>
                    <label>
                        <input type='date' name='curDate' value={formData.curDate} onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default DateForm;