import React, { useState } from "react";
import { CardBody, CardHeader } from "reactstrap";

import './ratingsComponent.css';



function RatingsComponent({numberOfStars = 5}) {
    const [rating, setRating] = useState(0);


    const handleOnClickRating = (index) => {
        if(index === rating) {
            setRating(0)
        } else {
            setRating(index)
        }

    }

    return(
        <>
            <CardHeader>Ratings Component</CardHeader>
            <CardBody className="circles-container">
                {
                    [...Array(numberOfStars)].map((star, index) => {
                        index++
                        console.log(`Check${index}`)

                        return(
                            <div key={index} className={index <= rating ? "rating-circle active" : "rating-circle"} onClick={() => handleOnClickRating(index)}>
                                
                            </div>
                        )
                    })
                }
            </CardBody>
        </>
    )
}

export default RatingsComponent;
