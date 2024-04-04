import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody, CardTitle, CardImg } from 'reactstrap';
import { Button } from 'reactstrap';
import axios from 'axios';


function RickAndMortyApi({ fontStyles }) {
    const [data, setData] = useState([]);
    const [characterNumber, setCharacterNumber] = useState(826);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageData, setPageData] = useState([])



    const handlePrevious = () => {
        setCharacterNumber(characterNumber - 1)
    }

    const handleNext = () => {
        setCharacterNumber(characterNumber + 1)
    }

    const handleRandom = () => {
        setCharacterNumber(Math.floor(Math.random() * 826))
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${characterNumber}`)
            .then(res => {
                setData(res.data);
                console.log("Character-Number-Axios-Call", res)
            })
            .catch(err => {
                console.error('Error', err)
            })

    }, [characterNumber]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
            .then(res => {
                console.log("Page-Number-Axios-Call", res)
                setPageData(res.data.results)
            })
            .catch(error => console.error("Axios error", error))
    }, [pageNumber])

    return (
        <>
            <CardHeader>Rick and Morty <span style={fontStyles}>API</span></CardHeader>
            <CardBody>
            <img src={data.image} alt="morty smith" />
            <CardTitle>{data.name}</CardTitle>
            <div className="rick-and-morty-buttons">
                <Button onClick={handlePrevious}>Previous</Button>
                <Button onClick={handleRandom}>Random</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
            <div className="rick-and-morty-page-images-container">
            {
                pageData.map((character, index) => {
                    return(
                        <>
                            <CardImg className={"rick-and-morty-page-images"} src={character.image} alt={`test`}/>
                        </>
                    )
                })
            }
            </div>
            </CardBody>
        </>
    )
}

export default RickAndMortyApi;

// api_key = 9oTkFo8deMuwpRkfufVpPbHgEf5xj5QzfEkLjlkJ