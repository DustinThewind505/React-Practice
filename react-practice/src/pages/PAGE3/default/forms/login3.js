import React, { useState } from 'react';





function LoginForm3(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        name: "",
        termsConditions: false
    })



    // ========== FUNCTION ==========
    const handleChange = e => {
        e.persist()

        const newFormState = {
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }

        setFormData(newFormState)
    }


    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            name: "",
            termsConditions: false
        })
    }

    // ========== COMPONENT ==========
    return (
        <div className='form-container'>
            <h3>Form #9</h3>
            <p>Name: {formData.name}</p>
            <p>Terms: {formData.termsConditions ? "Checked✔✔✔" : ""}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: text & checkbox</h3>
                <section className='form-body'>
                    <label>Full Name
                        <input type='text' name='name' value={formData.name} onChange={handleChange} autoComplete='off' required />
                        {formData.name.length < 1 ? <p className='error'>*</p> : <p className='accept'>✔</p>}
                    </label>
                    <label>Terms & Conditions
                        <input type='checkbox' name='termsConditions' checked={formData.termsConditions} onChange={handleChange} required />
                        {formData.termsConditions === false ? <p className='error'>*</p> : <p className='accept'>✔</p>}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={formData.name.length > 0 && formData.termsConditions === true ? false : true}>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default LoginForm3;