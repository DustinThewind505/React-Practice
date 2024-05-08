import React, { useState } from 'react';




function ButtonInput(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        count: 0
    })


    // ========== FUNCTIONS ==========
    const handleChange = () => {
        let newFormState = {
            count: formData.count + 1
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            count: 0
        })
    }


    // ========== COMPONENTS ==========
    return (
        <div className='form-container'>
            <h3>Form #9</h3>
            <p>Clicked: {formData.count}</p>
            <form onSubmit={handleSubmit}>
                <h3></h3>
                <section className='form-body'>
                    <label>
                        <input type='button' value='Add' onClick={handleChange} />
                        <p className='error'>{formData.count < 5 ? '5 clicks' : '✔'}</p>
                    </label>
                    <footer>
                        <button type='submit' disabled={formData.count < 5 ? true : false}>Submit</button>
                    </footer>
                </section>
            </form>
        </div>
    )
}

export default ButtonInput;