import React, { useState } from 'react';
import useInput from './hooks/useInput';


function DynamicTitle() {
    // ========== STATE ==========
    const [formData, clearForm, handleFormChange, handleSubmit] = useInput("formData", {
        username: "",
        email: "",
        password: ""
    });


    // ========== FUNCTION ==========

    

    // ========== COMPONENT ==========
    return(
        <div>
            <h1>Custom Hooks🦂</h1>
            <form onSubmit={handleSubmit}>
                <h2>Hooks are awsome!</h2>
                <lable>username
                    <input type='text' name='username' value={formData.username} onChange={handleFormChange}/>
                </lable>
                <label>e-mail
                    <input type='email' name='email' value={formData.email} onChange={handleFormChange} />
                </label>
                <label>password
                    <input type='password' name='password' value={formData.password} onChange={handleFormChange} />
                </label>
                <button type='submit'>Submit</button>
                <button onClick={clearForm}>Clear</button>
            </form>
            <p>{formData.username}</p>
            <p>{formData.email}</p>
            <p>{formData.password}</p>
        </div>
    )
}

export default DynamicTitle;