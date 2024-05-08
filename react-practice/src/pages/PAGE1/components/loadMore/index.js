import React, { useEffect, useState } from "react";
import { CardHeader, CardBody, Button, CardText} from 'reactstrap';
import axios from "axios";



function LoadMore({ ReactLogo }) {
    const [ghibliData, setGhibliData] = useState([]);
    const [loadMoreData, setLoadMoreData] = useState([]);

    const handleLoadMoreArray = () => {
        const newArrayObject = ghibliData.pop();
        
        setLoadMoreData([...loadMoreData, newArrayObject]);
    }

    const handleSeeLessArray = () => {
        const newArrayObject = loadMoreData.pop();
        
        setGhibliData([...ghibliData, newArrayObject]);
    }


    useEffect(() => {
        axios.get("https://ghibliapi.vercel.app/films")
            .then(res => {
                setGhibliData(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    return(
        <div>
            <CardHeader><ReactLogo />Load More<ReactLogo /></CardHeader>
            <CardText>{loadMoreData.length} out of 22</CardText>
            <Button disabled={ghibliData.length === 0 ? true : false} onClick={() => handleLoadMoreArray()}>Load More</Button>
            <Button disabled={loadMoreData.length === 0 ? true : false} onClick={() => handleSeeLessArray()}>See Less</Button>
            <CardBody>
                {
                    loadMoreData.map((film) => <img key={film.id} className="load-more-ghibli-img" src={film.image} alt={film.title} />)
                }
            </CardBody>
            
        </div>
    )
}

export default LoadMore;