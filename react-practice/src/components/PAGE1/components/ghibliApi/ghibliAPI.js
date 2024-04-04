import React, { useState, useEffect } from 'react';
import { CardHeader, CardImg, CardBody} from 'reactstrap';
import axios from 'axios';



function GhibliApi({ fontStyles, logo }) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://ghibliapi.vercel.app/films")
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err))

    }, [])

    return (
        <>
            <CardHeader><img src={logo} className="App-logo App-logo-page-1" alt="logo" />Ghibli <span style={fontStyles}>API</span><img src={logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            {data.map(movie => (
                movie.title === "Princess Mononoke" || movie.title === "My Neighbor Totoro" ?
                <div key={movie.id}>
                    <CardImg alt={movie.original_title_romanised} src={movie.movie_banner}/>
                    <CardBody>
                        {movie.description}
                    </CardBody>
                </div>
                :
                null))}
        </>
    )
}

export default GhibliApi;