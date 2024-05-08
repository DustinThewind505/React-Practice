import React, { useState, useEffect } from 'react';
import FormTwo from './form2A';

import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    email: yup.string().email("Must use a valid email").required("Must enter an email")
})




function Form2(props) {
    // ========== STATE ==========
    const [disableButton, setDiableButton] = useState(true)

    const [formData, setFormData] = useState({
        email: ""
    })

    const [errorsState, setErrorState] = useState({
        email: ""
    })


    // ========== FUNCTIONS ==========
    const validateChange = e => {
        yup.reach(formSchema, "email").validate(e.target.value)
        .then(response => setErrorState({email: ""}))
        .catch(err => setErrorState({email: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist()
        const newForm = {
            email: e.target.value
        }

        validateChange(e)
        setFormData(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.setDisplayForm(formData)
        setFormData({
            email: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData)
            .then(response => {
                setDiableButton(!response)
            })
    }, [formData])



    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #2</h3>
            <p>Email: {formData.email}</p>
            <FormTwo formData={formData} errorsState={errorsState} disableButton={disableButton} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}

export default Form2;


// onClick={() => props.setDisplayForm()}