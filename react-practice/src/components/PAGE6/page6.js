import React, { useState } from 'react';



function Page6() {
// ===== STATE =====
const [backgroundColor, setBackgroundcolor] = useState("green");
const [typeOfBackgroundColor, setTypeOfBackgroundColor] = useState("color")


// ===== FUNCTIONS =====
const randomHexColor = () => {
    setTypeOfBackgroundColor("Hex");

    let hex = "#";
    const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",];

    for(let i = 0; i < 6; i++) {
        hex += hexArray[Math.floor(Math.random() * hexArray.length)];
    }

    setBackgroundcolor(hex);
    console.log(backgroundColor);
}

const handleRandomRgbColor = () => {
    setTypeOfBackgroundColor("rgb");

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setBackgroundcolor(`rgb(${r}, ${g}, ${b})`);
    console.log(backgroundColor);
}


// ===== COMPONENT =====

    return (
        <div>
            <h1>Page 6</h1>
            <p>Random Color Generator</p>
            <div style={{backgroundColor: backgroundColor}}>
                <p>Changing background</p>
                <button onClick={randomHexColor}>Random Hex Color</button>
                <button onClick={handleRandomRgbColor}>Random RGB Color</button>
                {typeOfBackgroundColor === "Hex" ? <p>{`${typeOfBackgroundColor}${backgroundColor}`}</p> : <p>{`${backgroundColor}`}</p>}
            </div>
        </div>
    )
};

export default Page6;