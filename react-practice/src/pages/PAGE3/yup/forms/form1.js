import React, { useEffect, useState } from 'react';
import FormOne from './form1A';

import * as yup from 'yup';
// ========== Form validation with yup dependency ==========
const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a username").min(2, "Needs to be longer")
})




function Form1(props) {
    // ========== STATE ==========
    const [disableButton, setDisableButton] = useState(true)

    const [formData, setFormData] = useState({
        username: ""
    })

    const [errorsState, setErrorsState] = useState({
        username: ""
    });


    // ========== FUNCTIONS ==========
    const validateChange = e => {
        yup.reach(formSchema, 'username').validate(e.target.value)
            .then(response => setErrorsState({username: ""}))
            .catch(err => setErrorsState({username: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist();
        const newFormState = {
            username: e.target.value,
        }

        validateChange(e)
        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newForm = {
            ...formData
        }

        props.setDisplayForm(newForm)

        setFormData({
            username: ""
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDisableButton(!res))

    }, [formData])


    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #1</h3>
            <p>Username: {formData.username}</p>
            <FormOne formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} errorsState={errorsState} disableButton={disableButton} />
        </div>
    )
}

export default Form1;