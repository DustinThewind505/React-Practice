import React, { useState } from 'react';
import { CardHeader, CardBody, CardText } from 'reactstrap';
import CounterButton from './counterButton';


function Counter({ fontStyles }) {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1)
  }

  const multiply = () => {
    setCount(count * 2)
  }

  const reset = () => {
    setCount(0)
  }



    return (
        <>
            <CardHeader>C<span style={fontStyles}>o</span><span style={fontStyles}>u</span>nt<span style={fontStyles}>e</span>r</CardHeader>
            <CardBody>
            <CardText>{`Count: `}<span style={fontStyles}>{count}</span></CardText>
            <div className="counter-buttons">
                <CounterButton onCounterChange={add} label="Add" />
                <CounterButton onCounterChange={multiply} label="Multiply" />
                <CounterButton onCounterChange={reset} label="Reset" />
            </div>
            </CardBody>
        </>
    )
}

export default Counter;