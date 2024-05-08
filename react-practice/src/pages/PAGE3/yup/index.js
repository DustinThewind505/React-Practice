import React from 'react';

// ========== IMPORTED FORMS ==========
import Form1 from './forms/form1';
import Form2 from './forms/form2';
import Form3 from './forms/form3';
import Form4 from './forms/form4';
import Form5 from './forms/form5';
import Form6 from './forms/form6';
import Form7 from './forms/form7';
import Form8 from './forms/form8';
import Form9 from './forms/form9';
import Form10 from './forms/form10';
import Form11 from './forms/form11';
import Form12 from './forms/form12';
import Form13 from './forms/form13';
import Form14 from './forms/form14';

import "./yupStyles.css"

function YupFormContainer(props) {
    // ========== STATE ==========



    // ========== FUNCTIONS ==========



    // ========== COMPONENTS ==========
    return (
        <>

            <img className='forms-img' src='https://miro.medium.com/max/1000/1*4Apu-JRlee0VEJbQDplgPg.png' alt='yup logo' />

            <div className='forms-page-container yup-forms'>
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
                <Form12 setDisplayForm={props.setDisplayForm} />
                <Form13 setDisplayForm={props.setDisplayForm} />
                <Form14 setDisplayForm={props.setDisplayForm} />
            </div>
        </>
    )
}

export default YupFormContainer;