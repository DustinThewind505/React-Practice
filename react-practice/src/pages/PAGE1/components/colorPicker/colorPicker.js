import React from 'react';
import { CardHeader, CardBody, CardText } from 'reactstrap';
import { Button } from 'reactstrap';



function ColorPicker( { fontStyles, color, setColor, ReactLogo }) {



    return (
        <>
            <CardHeader><ReactLogo />C<span style={fontStyles}>o</span>l<span style={fontStyles}>o</span>r P<span style={fontStyles}>i</span>ck<span style={fontStyles}>e</span>r<ReactLogo /></CardHeader>
            <CardBody>
            <CardText>{`Color: `}<span style={fontStyles}>{color}</span></CardText>
            <div className="color-picker-buttons">
                <Button className="blue-button" onClick={() => setColor("Blue")}>Blue</Button>
                <Button className="red-button" onClick={() => setColor("Red")}>Red</Button>
                <Button className="green-button" onClick={() => setColor("Green")}>Green</Button>
                <Button className="white-button" onClick={() => setColor("White")}>White</Button>
            </div>
            </CardBody>
        </>
    )
}

export default ColorPicker;