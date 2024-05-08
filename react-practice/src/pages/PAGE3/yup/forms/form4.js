import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    agree: yup.boolean().oneOf([true], 'Must agree'),
})


function Form4(props) {
    // ========== STATE ==========
    const [disableButton, setDiableButton] = useState(true);

    const [formData, setFormData] = useState({
        agree: false
    })

    const [errors, setErrors] = useState({
        agree: "",
    })



    // ========== FUNCTIONS ==========
    const validateInput = (e) => {
        yup.reach(formSchema, e.target.name).validate(e.target.checked)
        .then(res => setErrors({agree: ""}))
        .catch(err => setErrors({agree: err.errors[0]}))
    }

    const handleChange = e => {
        e.persist();

        const newFormData = {
            agree: e.target.checked
        }

        validateInput(e)

        setFormData(newFormData)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            agree: false
        })
    }

    useEffect(() => {
        formSchema.isValid(formData).then(res => setDiableButton(!res))
    }, [formData])


    // ========== COMPONENT ==========
    return (
        <div className="form-container">
            <h3>Form #4</h3>
            <p>Terms & Cons: {formData.agree ? "Agreed✔✔✔" : ""}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: checkbox</h3>
                <section className='form-body'>
                    <label>terms & conditions
                        <input type="checkbox" name="agree" onChange={handleChange} checked={formData.agree} />
                        {errors.agree.length > 0 ? <p className="error">{errors.agree}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={disableButton}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default Form4;