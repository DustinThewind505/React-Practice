import React, { useState } from "react";


function Page8() {
    // ===== STATE =====
    const [rgbRandomColor, setRgbRandomColor] = useState("green")

    // ===== FUNCTIONS =====
    const handleRgbRandomColor = () => {
        const r = Math.floor(Math.random() *  256)
        const g = Math.floor(Math.random() *  256)
        const b = Math.floor(Math.random() *  256)

        const randomColor = `rgb(${r}, ${g}, ${b})`

        setRgbRandomColor(randomColor)
    }

    // ===== COMPONENT =====
    return(
        <div style={{backgroundColor: rgbRandomColor}}>
            <h1 onClick={() => handleRgbRandomColor()}>Page 8</h1>
        </div>
    )

}

export default Page8;
