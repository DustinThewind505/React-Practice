import React, { useState } from "react";
import { Button, CardBody, CardHeader, CardText } from "reactstrap";



function RandomRgbColors() {
    const [randomRgbColor, setRandomRgbColor] = useState("");

    const handleGenerateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        setRandomRgbColor(`rgb(${r}, ${g}, ${b})`)
    }


    return(
        <>
            <CardHeader>Random RGB colors</CardHeader>
            <CardBody style={{backgroundColor: randomRgbColor}}>
                <Button onClick={() => handleGenerateRandomColor()}>Set Color</Button>
            </CardBody>
        </>
    )
}

export default RandomRgbColors;
