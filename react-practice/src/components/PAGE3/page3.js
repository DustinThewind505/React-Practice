import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';

import YupFormContainer from './yup';
import DefaultForms from './default/defaultContainer';
import BootstrapForms from './bootstrap/bootstrapContainer';

import "./page3styles.css"


function Page3() {
    // ========== STATE ==========
    const [displayForm, setDisplayForm] = useState({
        name: "ello poppet"
    });


    // ========== FUNCTIONS ==========



    // ========== COMPONENT ==========
    return (
        <>
            <section className="forms-app">
                <h1><span>🧾</span> Forms <span>📜</span></h1>
                <form onSubmit={e => e.preventDefault()} className="display-form">
                    <h2>Display Form</h2>
                    {typeof displayForm === "string" ? <p>{displayForm}</p> : Object.values(displayForm).map((element, index) => <p key={index}>{typeof element === "boolean" ? "Checked✔✔✔" : element}</p>)}
                </form>
                <ul className='forms-nav'>
                    <li><NavLink exact to='/page3'>Yup</NavLink></li>
                    <li><NavLink to='/page3/default'>Default</NavLink></li>
                    <li><NavLink to='/page3/bootstrap'>Bootstrap</NavLink></li>
                </ul>
                <Route exact path='/page3'>
                    <YupFormContainer setDisplayForm={setDisplayForm} />
                </Route>
                <Route path='/page3/default'>
                    <DefaultForms setDisplayForm={setDisplayForm} />
                </Route>
                <Route path='/page3/bootstrap'>
                    <BootstrapForms setDisplayForm={setDisplayForm} />
                </Route>
                
            </section>
        </>
    )
}

export default Page3;