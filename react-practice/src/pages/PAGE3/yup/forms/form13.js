import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== From validation with yup ==========
const formSchema = yup.object().shape({
    range: yup.number().min(50, '*must be over 50').max(75, '*must be under 75')
})


function RangeInput(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        range: 75
    })

    const [errorState, setErrorState] = useState({
        range: ''
    })



    // ========== FUNCTIONS ==========
    const validateInput = e => {
        yup.reach(formSchema, "range").validate(e.target.value)
        .then(res => setErrorState({range: ""}))
        .catch(err => setErrorState({range: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist()

        const newFormState = {
            range: e.target.value
        }

        validateInput(e)
        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])


    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #13</h3>
            <p>Range: {formData.range}%</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: range</h3>
                <section className='form-body'>
                    <label>
                        <input type='range' name='range' min='0' max='100' value={formData.range} onChange={handleChange} />
                        {errorState.range.length > 0 ? <p className='error'>{errorState.range}</p> : <p className='error'>*</p>}
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