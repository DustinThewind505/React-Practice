import React, { useState } from 'react';

import useInput from '../../../PAGE4/hooks/useInput';

import { CardHeader, FormText, Form, Label, Input, Button } from 'reactstrap';


function TextForm(props) {
    // ========== STATE ==========
    const [formData, setFormData, handleFormData] = useInput("")

    // ========== FUNCTION ==========
    // const handleChange = e => {
    // ***No handleChange because we put it in out custom hook***
    //     }


    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData("")
    }


    // ========== COMPONENT ==========
    return (
        <>
            <CardHeader className='bootstrap-header'>Form #1<br /><p>Username: {formData}</p></CardHeader>
            <Form onSubmit={handleSubmit}>
                <h3>Form #1</h3>
                <section className='form-body'>
                    <Label>username
                        <Input type='text' name='username' value={formData} onChange={e => handleFormData(e.target.value)} />
                    </Label>
                </section>
                <footer>
                    <Button type='submit'>Submit</Button>
                </footer>
            </Form>
        </>
    )
}

export default TextForm;