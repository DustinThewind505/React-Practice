import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    soda: yup.string().oneOf(["coke", "cream soda🍺", "rc cola"], "No Pepsi!")
})




function Form6(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        soda: ""
    })

    const [errorsState, setErrorsState] = useState({
        soda: ""
    })




    // ========== FUNCTIONS ==========
    const validateInput = e => {
        yup.reach(formSchema, "soda").validate(e.target.value)
            .then(res => setErrorsState({ soda: "" }))
            .catch(err => setErrorsState({ soda: err.errors[0] }))
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            soda: ""
        })
    }

    const handleChange = e => {
        e.persist()
        const newFormState = {
            soda: e.target.value
        }

        validateInput(e)
        setFormData(newFormState)
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    })



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #6</h3>
            <p>Soda: {formData.soda}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: radio</h3>
                <section className='form-body'>
                    <div className='radio-container'>
                        <label>Coke
                        <input type='radio' name='soda' value='coke' onChange={handleChange} />
                        </label>
                        <label>RC Cola
                        <input type='radio' name='soda' value='rc cola' onChange={handleChange} />
                        </label>
                        <label>Cream Soda
                        <input type='radio' name='soda' value='cream soda🍺' onChange={handleChange} />
                        </label>
                        <label>Pepsi
                        <input type='radio' name='soda' value='pepsi' onChange={handleChange} />     
                        </label>
                    </div>
                    {errorsState.soda.length > 0 ? <p className='error'>{errorsState.soda}</p> : null}
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form6;