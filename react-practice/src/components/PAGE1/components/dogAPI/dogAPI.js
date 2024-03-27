import React, { useState, useEffect } from 'react';
import { CardHeader, CardBody } from 'reactstrap';
import { Button } from 'reactstrap';
import axios from 'axios';


function DogApi({ fontStyles }) {
    const [dogPic, setDogPic] = useState("");
    const [breed, setBreed] = useState("dalmatian")

    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => setDogPic(res.data.message))
        .catch(err => console.error(err))

    }, [breed])

    return (
        <>
            <CardHeader>Dog <span style={fontStyles}>API</span></CardHeader>
            <CardBody>
            <img src={dogPic} alt="dog smiling" />
            <div className="dog-api-buttons">
                <Button onClick={() => setBreed("dalmatian")}>Dalmatian</Button>
                <Button onClick={() => setBreed("beagle")}>Beagle</Button>
                <Button onClick={() => setBreed("rottweiler")}>Rottweiler</Button>
                <Button onClick={() => setBreed("african")}>African</Button>
            </div>
            </CardBody>
        </>
    )
}

export default DogApi;