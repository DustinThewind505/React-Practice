import React from 'react';




function FormTwo(props) {
    // ========== STATE ==========


    // ========== FUNCTIONS ==========


    // ========== COMPONENT ==========
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Input: email</h3>
            <section className='form-body'>
                <label>email
                    <input type='email' name='email' value={props.formData.email} onChange={props.handleChange}/>
                    {props.errorsState.email.length > 0 ? <p className="error">{props.errorsState.email}</p> : null}
                </label>
            </section>
            <footer>
                <button type='submit' disabled={props.disableButton}>Submit</button>
            </footer>
        </form>
    )
}

export default FormTwo;