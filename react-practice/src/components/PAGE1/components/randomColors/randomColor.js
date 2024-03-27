import React from 'react';
import { CardHeader } from 'reactstrap';
import { Button } from 'reactstrap';

const colors = [
    "#FFBAAA",
    "#27576B",
    "#D47F6A",
    "#AA7539",
    "#003D19",
    "#6E91A1",
    "#552D00"
];

function RandomColor(props) {



    return (
        <>
            <CardHeader>C<span style={props.fontStyles}>o</span>l<span style={props.fontStyles}>o</span>r P<span style={props.fontStyles}>i</span>ck<span style={props.fontStyles}>e</span>r <span style={props.fontStyles}>2</span></CardHeader>
            <div>
                <Button className="random-button" onClick={() => props.changeColor(colors)}>Change</Button>
            </div>
        </>
    )
}

export default RandomColor;