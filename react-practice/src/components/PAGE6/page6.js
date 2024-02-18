import React, { useState } from 'react';



function Page6() {
// ===== STATE =====
const [backgroundColor, setBackgroundcolor] = useState("green");


// ===== FUNCTIONS =====
const randomColor = () => {
    let hex = "#"
    const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",]

    for(let i = 0; i < 6; i++) {
        hex += hexArray[Math.floor(Math.random() * hexArray.length)];
    }
    setBackgroundcolor(hex)
}


// ===== COMPONENT =====

    return (
        <div>
            <h1>Page 6</h1>
            <p>Random Color Generator</p>
            <div style={{backgroundColor: backgroundColor}}>
                <p>Changing background</p>
                <button onClick={randomColor}>Random Color</button>
            </div>
        </div>
    )
};

export default Page6;