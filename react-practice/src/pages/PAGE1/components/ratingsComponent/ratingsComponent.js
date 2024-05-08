import React, { useState } from "react";
import { CardBody, CardGroup, CardHeader, CardText } from "reactstrap";

import './ratingsComponent.css';



function RatingsComponent({numberOfStars = 5, ReactLogo}) {

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
            <CardHeader><ReactLogo />Ratings Component<ReactLogo /></CardHeader>
            <CardBody>
            <CardText>{rating} out of 5</CardText>
            <CardGroup className="circles-container">
                {
                    [...Array(numberOfStars)].map((star, index) => {
                        index += 1

                        return(
                            <>
                                <div 
                                    key={index}
                                    className={index <= (mouseOverRating || rating) ? "rating-circle active" : "rating-circle inactive"}
                                    onClick={() => handleOnClickRating(index)}
                                    onMouseOver={() => handleMouseOverRating(index)}
                                    onMouseLeave={() => handleMouseLeaveRating()}>
                                </div>
                            </>
                        )
                    })
                }
            </CardGroup>
            </CardBody>
        </>
    )
}

export default RatingsComponent;
