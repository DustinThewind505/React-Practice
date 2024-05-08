import React, { useState } from 'react';
import * as yup from 'yup';
// ========== Form validation with yup ==========
const formSchema = yup.object().shape({
    counter: yup.number().max(5, 'you went over the limit!').required()
})



function Form12(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState({
        counter: 0
    })

    const [errorState, seterrorState] = useState({
        counter: ""
    })



    // ========== FUNCTIONS ==========
    const validateNumber = e => {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(res => seterrorState({ counter: "" }))
            .catch(err => seterrorState({ counter: err.errors[0] }))
    }

    const handlesubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        setFormData({
            counter: 0
        })
    }


    const handleClick = e => {
        e.persist()

        setFormData({
            counter: formData.counter + 1
        })

        validateNumber(e)
    }




    // ========== COMPONENTS ==========
    return (
        <div className='form-container'>
            <h3>Form #12</h3>
            <p>Clicks: {formData.counter}</p>
            <form onSubmit={handlesubmit}>
                <h3>Input: button</h3>
                <section className='form-body'>
                    <label>
                        <input type='button' name='counter' value='Click' onClick={handleClick} />
                        {errorState.counter.length > 0 ? <p className='error'>{errorState.counter}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}


export default Form12;