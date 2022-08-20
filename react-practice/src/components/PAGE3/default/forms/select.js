import React, { useState, useEffect } from 'react';



function SelectInputForm(props) {
    // ========== STATE ==========
    const [formData, setFormData] = useState([{
        select: {}
    }])



    // ========== FUNCTIONS ==========
    const handleChange = e => {
        const newFormState = {
            select: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.setDisplayForm(formData)

        // setFormData([{
        //     select: {}
        // }])
    }

console.log(formData)



    return (
        <div className='form-container'>
            <h3>Form #5</h3>
            <p>Select: {formData.select}</p>
            <form onSubmit={handleSubmit}>
                <h3>Input: select</h3>
                <section className='form-body'>
                    <label>select
                        <select name='select' value={formData.select} onChange={handleChange}>
                            <option value=''>== Choose One ==</option>
                            <option value='bike'>bike</option>
                            <option value='drive'>drive</option>
                            <option value='plane'>plane</option>
                        </select>
                    </label>
                </section>
                <footer>
                    <button type='submit'>Submit</button>
                </footer>
            </form>
        </div>
    )
}

export default SelectInputForm;