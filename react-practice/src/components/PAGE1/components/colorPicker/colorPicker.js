import React from 'react';
import { CardHeader, CardBody, CardText } from 'reactstrap';
import { Button } from 'reactstrap';



function ColorPicker(props) {



    return (
        <>
            <CardHeader><img src={props.logo} className="App-logo App-logo-page-1" alt="logo" />C<span style={props.fontStyles}>o</span>l<span style={props.fontStyles}>o</span>r P<span style={props.fontStyles}>i</span>ck<span style={props.fontStyles}>e</span>r<img src={props.logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            <CardBody>
            <CardText>{`Color: `}<span style={props.fontStyles}>{props.color}</span></CardText>
            <div className="color-picker-buttons">
                <Button className="blue-button" onClick={() => props.setColor("Blue")}>Blue</Button>
                <Button className="red-button" onClick={() => props.setColor("Red")}>Red</Button>
                <Button className="green-button" onClick={() => props.setColor("Green")}>Green</Button>
                <Button className="white-button" onClick={() => props.setColor("White")}>White</Button>
            </div>
            </CardBody>
        </>
    )
}

export default ColorPicker;