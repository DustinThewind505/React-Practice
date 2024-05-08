import React from 'react';
import { Button } from 'reactstrap';


function CounterButton(props) {



    return (
        <>
            <Button onClick={props.onCounterChange}>{props.label}</Button>
        </>
    )
}

export default CounterButton;