import React, { useState } from "react";
import { CardBody, CardHeader } from "reactstrap";

import './ratingsComponent.css';



function RatingsComponent({numberOfStars = 5}) {

    const [rating, setRating] = useState(0);
    const [mouseOverRating, setMouseOverRating] = useState(0)
;

    const handleOnClickRating = (id) => {
        if(rating === id) {
            setRating(0)
        } else {
            setRating(id)
        }

    }

    const handleMouseOverRating = (id) => {

        setMouseOverRating(id)

    }

    const handleMouseLeaveRating = () => {

        setMouseOverRating(rating)

    }

    return(
        <>
            <CardHeader>Ratings Component</CardHeader>
            <CardBody className="circles-container">
                {
                    [...Array(numberOfStars)].map((star, index) => {
                        index += 1
                        console.log(`Check${index}`)

                        return(
                            <div 
                                key={index}
                                className={index <= (mouseOverRating || rating) ? "rating-circle active" : "rating-circle inactive"}
                                onClick={() => handleOnClickRating(index)}
                                onMouseOver={() => handleMouseOverRating(index)}
                                onMouseLeave={() => handleMouseLeaveRating()}>
                                
                            </div>
                        )
                    })
                }
            </CardBody>
        </>
    )
}

export default RatingsComponent;
