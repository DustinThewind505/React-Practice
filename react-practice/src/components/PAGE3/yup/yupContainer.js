import React, { useState } from 'react';

import Form1 from './forms/form1';
import Form2 from './forms/form2';
import Form3 from './forms/form3';
import Form4 from './forms/form4';
import Form5 from './forms/form5';
import Form6 from './forms/form6';





function YupFormContainer(props) {



    return (
        <>
            <img src='https://miro.medium.com/max/1000/1*4Apu-JRlee0VEJbQDplgPg.png' alt='yup logo' />
            <div className='forms-page-container'>
                <Form1 setDisplayForm={props.setDisplayForm} />
                <Form2 setDisplayForm={props.setDisplayForm} />
                <Form3 setDisplayForm={props.setDisplayForm} />
                <Form4 setDisplayForm={props.setDisplayForm} />
                <Form5 setDisplayForm={props.setDisplayForm} />
                <Form6 setDisplayForm={props.setDisplayForm} />
            </div>
        </>
    )
}

export default YupFormContainer;