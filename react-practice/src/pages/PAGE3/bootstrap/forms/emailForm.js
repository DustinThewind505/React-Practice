import React, { useState } from 'react';

import { CardHeader, Form, Label, Input, Button } from 'reactstrap'



function EmailForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        email: ""
    })


    // ========== FUNCTION ==========
    const handleChange = e => {
        const newFormState = {
            email: e.target.value
        }

        setFormData(newFormState)
    }
    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            email: ""
        })
    }


    // ========== COMPONENT ==========
    return (
        <>
            <CardHeader className='bootstrap-header'>Form #2<br/><p>Email: {formData.email}</p></CardHeader>
            <Form onSubmit={handleSubmit}>
                <h3>Form #2</h3>
                <section className='form-body'>
                    <Label>email
                        <Input type='email' name='email' value={formData.email} onChange={handleChange} />
                    </Label>
                </section>
                <footer>
                    <Button type='submit'>Submit</Button>
                </footer>
            </Form>
        </>
    )
}

export default EmailForm;