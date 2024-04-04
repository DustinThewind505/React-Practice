import React, { useEffect, useState } from 'react';
import { CardHeader, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';
import axios from 'axios';


function NasaApi({ fontStyles, logo }) {
    const [nasaApiObject, setNasaApiObject] = useState("");

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ`)
            .then(res => {
                setNasaApiObject(res.data)
            })
            .catch(err => {
                console.error(err);
                return err;
            })
    }, [])

    return (
        <>
            <CardHeader><img src={logo} className="App-logo App-logo-page-1" alt="logo" />Nasa <span style={fontStyles}>API</span><img src={logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            <CardBody>
            <CardTitle>{nasaApiObject.title}</CardTitle>
            {
                nasaApiObject.media_type === "video" ?
                    <iframe src={nasaApiObject.url} title={nasaApiObject.title} /> 
                    :
                    <CardImg src={nasaApiObject.url} alt={nasaApiObject.title} />
            }
            <CardText>{nasaApiObject.explanation}</CardText>
            </CardBody>
        </>
    )
}

export default NasaApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ