import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import * as Yup from 'yup';
import { CardHeader, CardBody, Button } from 'reactstrap';

// ========== DUMMY DATA ==========
const initialFriends = [
    {
        id: uuid(),
        fname: 'John',
        lname: 'Smith',
        happy: true,
        complete: false,
    },
    {
        id: uuid(),
        fname: 'Jane',
        lname: 'Doe',
        happy: true,
        complete: false,
    }
]

function FriendsForm({ ReactLogo }) {
    // ========== STATE ==========
    const [data, setData] = useState(initialFriends);

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        happy: false
    })


    const formSchema = Yup.object().shape({
        fname: Yup.string().required("Name is required"),
        lname: Yup.string().required("Name is required"),
        happy: Yup.boolean().oneOf([true], "Please be happy")
    })

    useEffect(() => {
        formSchema.isValid(formValues).then((valid) => {
            console.log("is my form valid?", valid);
            setButtonDisabled(!valid)
        })
    }, [formValues, formSchema])

    // ========== FUNCTIONS ==========
    const handleInputChange = event => {
        const newFormState = {
            ...formValues,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        }
        setFormValues(newFormState)
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Welcome!\n${formValues.fname} ${formValues.lname}`)
        const newFriend = {
            id: uuid(),
            fname: formValues.fname,
            lname: formValues.lname,
            happy: formValues.happy
        }

        setData([...data, newFriend])
        setFormValues({
            fname: '',
            lname: '',
            happy: false,
            complete: false,
        })
    }

    const toggleComplete = name => {
        setData(data.map(element => {
            if(element.fname === name){
                return {...element, complete: !element.complete}
            } else {
                return element
            }
        }))
    }

    const clearComplete = () => {
        setData(data.filter(element => element.complete === false))
    }



    // ========== COMPONENT ==========
    return (
        <>
            <CardHeader><ReactLogo />Friends Form<ReactLogo /></CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name: <input type="text" name="fname" value={formValues.fname} onChange={handleInputChange} />
                    </label>
                    <label>
                        Last Name: <input type="text" name="lname" value={formValues.lname} onChange={handleInputChange} required />
                    </label>
                    <label>
                        Happy? <input type="checkbox" checked={formValues.happy} name="happy" onChange={handleInputChange} />
                    </label>
                    <br />
                    <Button type="submit" disabled={buttonDisabled}>Submit</Button>
                </form>
                <Button onClick={clearComplete}>Clear</Button>
                {data.map(friend => (
                    <div key={friend.id} className={`${friend.complete ? "complete" : ""}`} onClick={() => toggleComplete(friend.fname)}>
                        <h2>{friend.fname} {friend.lname} {friend.happy ? "is happy" : "is not happy"}</h2>
                    </div>
                ))}
                <p>{formValues.fname} {formValues.lname} {formValues.happy ? "is happy" : ""}</p>
            </CardBody>
        </>
    )
}

export default FriendsForm;