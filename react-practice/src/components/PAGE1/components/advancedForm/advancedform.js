import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody, Button, Input, Form, Label } from 'reactstrap';
import axios from 'axios';
import * as Yup from 'yup';


function AdvancedForm() {
    // ========== STATE ==========
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [notes, setNotes] = useState([]);

    const [post, setPost] = useState([])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        state: "",
        happy: false
    })

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        state: "",
        happy: false
    })


    // ========== FUNCTIONS ==========
    function handleSubmit(event) {
        event.preventDefault();

        const newNote = {
            name: formData.name,
            email: formData.email,
            state: formData.state,
            happy: formData.happy,
            "complete": false,
        }
        setNotes([...notes, newNote])

        axios.post("https://reqres.in/api/users", formData)
        .then((resp) => {
            console.log("users", resp);

            setPost(resp.data);

            setFormData({
                name: "",
                email: "",
                state: "",
                happy: false
            })
        })
        
    }


    const validateChange = e => {
        
        Yup.reach(formSchema, e.target.name).validate(e.target.type === "checkbox" ? e.target.checked : e.target.value)
        .then(valid => {
            setErrors({...errors, [e.target.name]: ""})
        })
        .catch(err => {
            console.error("err", err)
            setErrors({...errors, [e.target.name]: err.errors[0]})
        })
    }

    function handleInputChange(event) {
        event.persist()
        const newFormState = {
            ...formData,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }

        validateChange(event)
        setFormData(newFormState)
    }

    

    function toggleComplete(str) {
        setNotes(notes.map(element => {
            if (str === element.name) {
                return { ...element, complete: !element.complete }
            } else {
                return element
            }
        }))
    }


    function clearAll() {
        setNotes(notes.filter(element => element.complete === false))
    }

    const formSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Must be a valid email"),
        state: Yup.string().oneOf(["New Mexico", "Alabama", "Hawaii"], "Choose New Mexico"),
        happy: Yup.boolean().oneOf([true], "Please be happy")

    })


    useEffect(() => {
        formSchema.isValid(formData).then((valid) => {
            console.log("is my form valid?", valid);
            setButtonDisabled(!valid)
        })
    }, [formData, formSchema])


    // ========== COMPONENT ==========
    return (
        <>
            <CardHeader>Advanced Form</CardHeader>
            <CardBody className="advanced-form-body">
                <Form onSubmit={handleSubmit}>
                    <Label>
                        Name: <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
                    </Label>
                    <Label>
                        Email: <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </Label>
                    {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
                    <p>How old?</p>
                    <Label>
                        13-18   <Input type="radio" />
                    19-24   <Input type="radio" />
                    25-39   <Input type="radio" />
                    40+     <Input type="radio" />
                    </Label>
                    <Label>
                        <Input type="checkbox" name="happy" checked={formData.happy} onChange={handleInputChange} />
                        {errors.happy.length > 0 ? <p className="error">{errors.name}</p> : null}
                    </Label>
                    <br/>
                    <br />
                    <Input type="select" name="state" value={formData.state} onChange={handleInputChange}>
                        <option value="">--Choose One--</option>
                        <option value="New Mexico" >New Mexico</option>
                        <option value="Alabama" >Alabama</option>
                        <option value="Hawaii" >Hawaii</option>
                    </Input>
                    <br />
                    <h4>{formData.name}</h4>
                    <Button type="submit" disabled={buttonDisabled}>Submit</Button>
                </Form>
                <Button onClick={clearAll}>Clear</Button>
                {notes.map(element =>
                    <div onClick={() => toggleComplete(element.name)} className={`${element.complete ? "complete" : ""}`}>
                        <h4 key={element.name}>{element.name} {element.happy ? "is happy!" : "is sad."}</h4>
                    </div>
                )}
                <pre>{JSON.stringify(post, null, 2)}</pre>
            </CardBody>
        </>
    )
}

export default AdvancedForm;