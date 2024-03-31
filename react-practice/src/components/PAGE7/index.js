import React, { useState } from "react";



function Page7({ numberOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (id) => {
        if(rating === id) {
            setRating(0)
        } else {
            setRating(id)
        }

    }

    const handleMouseOver = (id) => {
        setHover(id);
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }


    return(
        <div>
            <h1 className="page-7">Page 7</h1>

            <div className="circle-rating-container">
            {
                [...Array(numberOfStars)].map((star, index) => {
                    index += 1;
                    console.log(index)
                    
                    return (
                        <div 
                            className={index <= (hover || rating) ? "circle-rating active-circle" : "circle-rating inactive-circle"}
                            key={0}
                            onClick={() => handleClick(index)}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseLeave={() => handleMouseLeave()}
                            >
                            
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Page7;
