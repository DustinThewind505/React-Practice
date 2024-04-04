import React, { useState } from "react";
import { Button, CardBody, CardHeader } from "reactstrap";



function RandomRgbColors({ fontStyles, logo }) {
    const [randomRgbColor, setRandomRgbColor] = useState("");

    const handleGenerateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        setRandomRgbColor(`rgb(${r}, ${g}, ${b})`)
    }


    return(
        <>
            <CardHeader><img src={logo} className="App-logo App-logo-page-1" alt="logo" />Ran<span style={fontStyles}>dom</span> <span style={fontStyles}>RGB</span> c<span style={fontStyles}>o</span>l<span style={fontStyles}>o</span>rs<img src={logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            <CardBody style={{backgroundColor: randomRgbColor}}>
                <Button onClick={() => handleGenerateRandomColor()}>Set Color</Button>
            </CardBody>
        </>
    )
}

export default RandomRgbColors;
