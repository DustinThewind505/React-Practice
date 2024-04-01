import React, { useEffect, useState } from "react";

import "./image-slider.css";


function Page8({ propsUrl = "https://picsum.photos/v2/list?page=1&limit=5"}) {
    // ===== STATE =====
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(1);

    // ===== FUNCTIONS =====
    async function fetchApiTest(url) {

        try {

            const response = await fetch(url);
            const urlData = await response.json();

            setData(urlData);
            console.log("data from test api call", data);

        } catch(error) {
            console.log("error from fetchApitest", error);
        };

    };

    useEffect(() => {

        fetchApiTest(propsUrl);

    }, [propsUrl]);

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === data.length -1 ? 0 : currentSlide + 1)
    }

    const handlePreviousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length -1 : currentSlide - 1)
    }

    // ===== COMPONENT =====
    return(
        <>
            <h1>Page 8</h1>
            <div className="image-slider-container">
                <button onClick={() => handlePreviousSlide()}>Previous</button>
                {
                    data.map((image, index) => <img key={image.id} className={currentSlide === index ? "current-slide" : "current-slide hidden-slide"} src={image.download_url} alt={image.author}/>)
                }
                <button onClick={() => handleNextSlide()}>Next</button>
            </div>
        </>
    )

}

export default Page8;
