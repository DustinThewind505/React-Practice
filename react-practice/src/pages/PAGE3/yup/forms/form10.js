import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    curDate: yup.date().min('11-12-2020', 'must select current date')
})


function Form10(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        curDate: ""
    })

    const [errorState, setErrorState] = useState({
        curDate: ""
    })




    // ========== FUNCTION ==========
    const validateChange = e => {
        yup.reach(formSchema, 'curDate').validate(e.target.value)
            .then(res => setErrorState({ curDate: "" }))
            .catch(err => setErrorState({ curDate: err.errors[0] }))
    }


    const handleChange = e => {
        e.persist()

        const newFormState = {
            curDate: e.target.value
        }

        validateChange(e)

        setFormData(newFormState)
    }


    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            curDate: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))
    }, [formData])



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #10</h3>
            <p>Date: {formData.curDate}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: date</h3>
                <section className='form-body'>
                    <label>
                        <input type='date' name='curDate' value={formData.curDate} onChange={handleChange} />
                        {errorState.curDate.length > 0 ? <p className='error'>{errorState.curDate}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form10;