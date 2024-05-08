import React, { useState, useEffect } from 'react';
import { CardHeader, CardImg, CardBody} from 'reactstrap';
import axios from 'axios';



function GhibliApi({ fontStyles, ReactLogo }) {
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
            <CardHeader><ReactLogo />Ghibli <span style={fontStyles}>API</span><ReactLogo /></CardHeader>
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