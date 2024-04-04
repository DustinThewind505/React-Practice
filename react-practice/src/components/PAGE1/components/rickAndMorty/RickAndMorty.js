import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import { Button } from 'reactstrap';
import axios from 'axios';


function RickAndMortyApi({ fontStyles, logo }) {
    const [data, setData] = useState([]);
    const [characterNumber, setCharacterNumber] = useState(826);
    const [previousCharacterNumber, setPreviousCharacterNumber] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageData, setPageData] = useState([]);



    const handlePrevious = () => {
        if(pageNumber === 1) {
            setPageNumber(pageNumber - 0)
        } else {
            setPageNumber(pageNumber - 1)
        }
    }

    const handleNext = () => {
        setPageNumber(pageNumber + 1)
    }

    const handleRandom = () => {
        const newArray = [...previousCharacterNumber]
        newArray.push(characterNumber)
        setPreviousCharacterNumber(newArray)
        setCharacterNumber(Math.floor(Math.random() * 826))
    }

    const handlePreviousRandom = () => {
        setCharacterNumber(previousCharacterNumber.pop())
    }

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${characterNumber}`)
            .then(res => {
                setData(res.data);
                console.log("Character-Number-Axios-Call", res)
            })
            .catch(error => {
                console.error('Error', error)
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
            <CardHeader><img src={logo} className="App-logo App-logo-page-1" alt="logo" />Rick and Morty <span style={fontStyles}>API</span><img src={logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            <CardBody>
                <div className="random-rick-and-morty-card">
                    <CardText>{data.name}</CardText>
                    <div className="random-rick-and-morty-card-bottom">
                        <img src={data.image} alt="morty smith" />
                        <div className="random-rick-and-morty-card-bottom-buttons">
                            <Button onClick={handleRandom}>Random</Button>
                            <Button onClick={handlePreviousRandom} disabled={previousCharacterNumber.length > 0 ? false : true}>Previous</Button>
                        </div>
                    </div>
                </div>
                <CardText>Page {pageNumber}</CardText>
                <Button onClick={handlePrevious}>Previous Page</Button>
                <Button onClick={handleNext}>Next Page</Button>
                <div className="rick-and-morty-page-images-container">
                {
                    pageData.map((character, index) => {
                        return(
                            <>
                                <CardImg key={character.id} className={"rick-and-morty-page-images"} src={character.image} alt={`test`}/>
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