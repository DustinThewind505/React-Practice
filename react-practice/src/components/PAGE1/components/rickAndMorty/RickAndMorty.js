import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody, CardTitle } from 'reactstrap';
import { Button } from 'reactstrap';
import axios from 'axios';


function RickAndMortyApi({ fontStyles }) {
    const [data, setData] = useState([]);
    const [characterNumber, setCharacterNumber] = useState(1);

    const handleNext = () => {
        setCharacterNumber(characterNumber + 1)
    }

    const handlePrevious = () => {
        setCharacterNumber(characterNumber - 1)
    }

    const handleSkipFive = () => {
        setCharacterNumber(characterNumber + 10)
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${characterNumber}`)
            .then(res => {
                setData(res.data);

            })
            .catch(err => {
                console.error('Error', err)
            })

    }, [characterNumber]);

    return (
        <>
            <CardHeader>Rick and Morty <span style={fontStyles}>API</span></CardHeader>
            <CardBody>
            <img src={data.image} alt="morty smith" />
            <CardTitle>{data.name}</CardTitle>
            <div className="rick-and-morty-buttons">
                <Button onClick={handleNext}>Next</Button>
                <Button onClick={handlePrevious}>Previous</Button>
                <Button onClick={handleSkipFive}>Next Page</Button>
            </div>
            </CardBody>
        </>
    )
}

export default RickAndMortyApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ