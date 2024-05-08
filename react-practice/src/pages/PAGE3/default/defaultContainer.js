import React from 'react';

// ========== IMPORTED FORMS ==========
import Form1 from './forms/username';
import Form2 from './forms/email';
import Form3 from './forms/number';
import Form4 from './forms/radio';
import Form5 from './forms/select';
import Form6 from './forms/checkbox';
import Form7 from './forms/date';
import Form8 from './forms/color';
import Form9 from './forms/button';
import Form10 from './forms/range';
import Form20 from './forms/login';
import Form21 from './forms/login2';
import Form22 from './forms/login3';
import Form11 from './forms/month';




function DefaultFormContainer(props) {
    // ========== STATE ==========



    // ========== FUNCTIONS ==========



    // ========== COMPONENTS ==========
    return (
        <>

            <img className='forms-img default' src='https://i.pinimg.com/originals/40/18/19/4018196360d9fd3324ceffbcc182bcc8.png' alt='yup logo' />

            <div className='forms-page-container default'>
                <Form1 setDisplayForm={props.setDisplayForm} />
                <Form2 setDisplayForm={props.setDisplayForm} />
                <Form3 setDisplayForm={props.setDisplayForm} />
                <Form4 setDisplayForm={props.setDisplayForm} />
                <Form5 setDisplayForm={props.setDisplayForm} />
                <Form6 setDisplayForm={props.setDisplayForm} />
                <Form7 setDisplayForm={props.setDisplayForm} />
                <Form8 setDisplayForm={props.setDisplayForm} />
                <Form9 setDisplayForm={props.setDisplayForm} />
                <Form10 setDisplayForm={props.setDisplayForm} />
                <Form11 setDisplayForm={props.setDisplayForm} />
                <Form20 setDisplayForm={props.setDisplayForm} />
                <Form21 setDisplayForm={props.setDisplayForm} />
                <Form22 setDisplayForm={props.setDisplayForm} />
            </div>
        </>
    )
}

export default DefaultFormContainer;