import React from 'react';




function FormOne(props) {



    return (
        <form onSubmit={props.handleSubmit}>
                <h3>Input: text</h3>
                <section className='form-body'>
                    <label>username
                    <input type='text' name='username' value={props.formData.username} onChange={props.handleChange} />
                        {props.errorsState.username.length > 0 ? <p className="error">{props.errorsState.username}</p> : null}
                    </label>
                </section>
                <footer>
                    <button type='submit' disabled={props.disableButton}>Submit</button>
                </footer>
            </form>
    )
}

export default FormOne;