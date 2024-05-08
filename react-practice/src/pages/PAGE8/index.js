import React, { useEffect, useState } from "react";

import Data from "../PAGE5/data"

import "./image-slider.css";


function Page8({ propsUrl = "https://picsum.photos/v2/list?page=1&limit=5"}) {
    // ===== STATE =====
    const [apiData, setApiData] = useState([]);
    const [currentApiSlide, setCurrentApiSlide] = useState(1);

    const [currentMarvelSlide, setCurrentMarvelSlide] = useState(0)


    // ===== FUNCTIONS =====
    async function fetchApiTest(url) {

        try {

            const response = await fetch(url);
            const urlData = await response.json();

            setApiData(urlData);

        } catch(error) {
            console.log("error from fetchApitest", error);
        };

    };
    

    useEffect(() => {

        fetchApiTest(propsUrl);

    }, [propsUrl]);


    const handleNextApiSlide = () => {
        setCurrentApiSlide(currentApiSlide === apiData.length -1 ? 0 : currentApiSlide + 1)
    }

    const handlePreviousApiSlide = () => {
        setCurrentApiSlide(currentApiSlide === 0 ? apiData.length -1 : currentApiSlide - 1)
    }

    const handlePreviousMarvelButton = () => {
        setCurrentMarvelSlide(currentMarvelSlide === 0 ? Data.length - 1 : currentMarvelSlide - 1)
    }
    
    const handleNextMarvelButton = () => {
        setCurrentMarvelSlide(currentMarvelSlide === Data.length - 1 ? 0 : currentMarvelSlide + 1)
    }

    // ===== COMPONENT =====
    return(
        <>
            <h1>Page 8</h1>
            <div className="image-slider-container">
                <h2>Api Call</h2>
                <p>https://picsum.photos/v2/list?page=1&limit=5</p>
                <button onClick={() => handlePreviousApiSlide()}>Previous</button>
                {
                    apiData.map((image, index) => <img key={image.id} className={currentApiSlide === index ? "current-api-slide" : "current-api-slide hidden-slide"} src={image.download_url} alt={image.author}/>)
                }
                <button onClick={() => handleNextApiSlide()}>Next</button>
            </div>
            <div className="image-slider-container">
            <h2>Local Data</h2>
            <p>"./data"</p>
            <button onClick={() => handlePreviousMarvelButton()}>Previous</button>
                {
                    Data.map((avenger, index) => <img key={avenger.id} className={currentMarvelSlide === index ? "current-marvel-slide" : "current-marvel-slide hidden-slide"} src={avenger.thumbnail} alt={avenger.name} />)
                }
                <button onClick={() => handleNextMarvelButton()}>Next</button>
            </div>
        </>
    )

}

export default Page8;

