import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    curColor: yup.string().required('must choose new color')
})


function Form11(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        curColor: ""
    })

    const [errorState, setErrorState] = useState({
        curColor: ""
    })

    const [backgroundColor, setBackgroundColor] = useState('gold')

    const bgStyle = {
        background: backgroundColor
    }


    // ========== FUNCTION ==========
    const validateChange = e => {
        yup.reach(formSchema, 'curColor').validate(e.target.value)
            .then(res => setErrorState({ curColor: "" }))
            .catch(err => setErrorState({ curColor: err.errors[0] }))
    }

    const handleChange = e => {
        e.persist()

        const newFormState = {
            curColor: e.target.value
        }

        validateChange(e)

        setFormData(newFormState)

        setBackgroundColor(e.target.value)
    }


    const handlesubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            curColor: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #11</h3>
            <p>Color: {formData.curColor}</p>
            <form onSubmit={handlesubmit} style={bgStyle}>
                <h3>Input: color</h3>
                <section className='form-body'>
                    <label>
                        <input type='color' name='curColor' value={formData.curColor} onChange={handleChange} />
                        {errorState.curColor.length > 0 ? <p className='error'>{errorState.curColor}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form11;