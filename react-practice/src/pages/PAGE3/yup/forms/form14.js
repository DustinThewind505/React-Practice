// ========== IMPORTS ==========
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== From validation with yup ==========
const fromSchema = yup.object().shape({
    time: yup.string().required('Must enter a time')
})

function TimeInput(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        time: ""
    })

    const [errorState, setErrorState] = useState({
        time: ""
    })


    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            time: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            time: ""
        })
    }

    useEffect(() => {
        fromSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])


    // ========== COMPONENT ==========
    return(
        <div className='form-container'>
            <h1>Form #14</h1>
            <p>Time: {formData.time}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: time</h3>
                <section className='form-body'>
                    <label>
                        <input type='time' name='time' value={formData.time} onChange={handleChange} />
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton} >Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default TimeInput;