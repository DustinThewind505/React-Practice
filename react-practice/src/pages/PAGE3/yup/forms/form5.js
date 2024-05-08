import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== From validation with yup ==========
const formSchema = yup.object().shape({
    number: yup.number().positive("Must be positive")
})


function Form5(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        number: 0
    })

    const [errorsState, setErrorsState] = useState({
        number: ""
    })



    // ========== FUNCTIONS ==========
    const validateInput = (e) => {
        yup.reach(formSchema, "number").validate(e.target.value)
            .then(res => setErrorsState({ number: "" }))
            .catch(err => setErrorsState({number: err.errors[0]}))
    }

    const handleChange = (e) => {
        e.persist()
        
        const newFormState = {
            number: e.target.value
        }

        validateInput(e)
        setFormData(newFormState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            number: 0
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #5</h3>
            <p>Number: {formData.number}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: number</h3>
                <section className='form-body'>
                    <label>number
                       <input type='number' value={formData.number} onChange={handleChange} />
                        {errorsState.number.length > 0 ? <p className='error'>{errorsState.number}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form5;