import React, { useState } from 'react';
// import axios from 'axios';


import { CardHeader, FormText, Form, Label, Input, Button } from 'reactstrap';



function InputValue(props) {
    const [notes, setNotes] = useState([])

    const [formData, setFormData] = useState({
        "title": "",
        "body": "",
        "dropdown": "",
        "happyCheckbox": false
    })

    const { title, body, dropdown, happyCheckbox } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.get(`?title=${title}&body=${body}`)
        alert(`FORM:\n${formData.title}\n${formData.body}\n${formData.dropdown}\n${formData.happyCheckbox ? "I'm happy" : "I'm NOT happy"}`);

        const newNote = {
            "title": formData.title,
            "body": formData.body,
            "dropdown": formData.dropdown,
            "happyCheckbox": formData.happyCheckbox,
            "complete": false
        }

        setNotes([...notes, newNote])

        setFormData({
            "title": "",
            "body": "",
            "dropdown": "",
            "happyCheckbox": false
        })
    }

    const handleInputChange = event => {

        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        const newFormState = {
            ...formData,
            [event.target.name]: value
        }

        setFormData(newFormState)
    }

    // const handleCheckboxChange = event => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.checked
    //     })
    // }

    const toggleComplete = title => {
        setNotes(notes.map(element => {
            if (element.title === title) {
                return { ...element, complete: !element.complete }
            } else {
                return element
            }
        }))
    }

    const clearComplete = () => {
        setNotes(notes.filter(element => element.complete === false))
    }


    return (
        <>
            <CardHeader><span style={props.fontStyles}>Input</span> V<span style={props.fontStyles}>a</span>l<span style={props.fontStyles}>u</span><span style={props.fontStyles}>e</span></CardHeader>
            <Form onSubmit={handleSubmit} className="input-value-note" >
                <div style={{ backgroundColor: props.randomColor }}>
                    <FormText><strong>{title || "Title"}</strong></FormText>
                    <FormText>{body || "Body"}</FormText>
                    <FormText style={props.fontStyles}>{dropdown || "Dropdown"}</FormText>
                    <FormText>Are you happy? {happyCheckbox ? "Yes" : "No"}</FormText>
                </div>
                <Label>
                    <Input type="text" name="title" id="inputTitle" value={formData.title} onChange={handleInputChange} placeholder="Enter Title" />
                </Label>
                <br />
                <Label>
                    <Input type="textarea" name="body" id="textareaBody" value={formData.body} onChange={handleInputChange} placeholder="Enter Body" />
                </Label>
                <br />
                <Label>
                    <Input type="select" name="dropdown" id="dropdownMonth" value={formData.dropdown} onChange={handleInputChange} style={props.fontStyles} >
                        <option></option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                    </Input>
                </Label>
                <br />
                <Label>
                    Happy: <Input type="checkbox" name="happyCheckbox" id="checkboxHappy" checked={formData.happyCheckbox} onChange={handleInputChange} />
                </Label>
                <br />
                <Button>Submit</Button>
            </Form>
            {notes.map(note =>
                <div className={`inputValue-note ${note.complete ? "complete" : ""}`} onClick={() => toggleComplete(note.title)} key={note.title}>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                    <p>{note.dropdown}</p>
                    <p>{note.happyCheckbox ? "I believe in me" : "I believe in you"}</p>
                </div>
            )}
            <Button onClick={clearComplete} >Clear</Button>
        </>
    )
}

export default InputValue;