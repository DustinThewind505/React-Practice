import React, { useEffect, useState } from "react";
import { CardHeader, CardBody, Button} from 'reactstrap';
import axios from "axios";



function LoadMore({ logo }) {
    const [ghibliData, setGhibliData] = useState([]);
    const [loadMoreData, setLoadMoreData] = useState([]);

    const handleLoadMoreArray = () => {
        const newArrayObject = loadMoreData.push(ghibliData.pop());
        
        setLoadMoreData([...loadMoreData, newArrayObject]);
    }

    useEffect(() => {
        axios.get("https://ghibliapi.vercel.app/films")
            .then(res => {
                setGhibliData(res.data)
            })
            .catch(error => console.error(error))
    }, [])

    console.log(ghibliData)
    return(
        <div>
            <CardHeader><img src={logo} className="App-logo App-logo-page-1" alt="logo" />Load More<img src={logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            <CardBody>
                {
                    loadMoreData.map((film) => <img src={film.image} alt={film.title} />)
                }
                <Button disabled={ghibliData.length === 0 ? true : false} onClick={() => handleLoadMoreArray()}>Load More</Button>
            </CardBody>
        </div>
    )
}

export default LoadMore;