import React, { useState } from 'react';
import avengersData from './data.js'

import './page5.css'

function Page5() {
    // ===== STATE =====
    const [singleAccordianSelection, setSingleAccordianSelection] = useState(false);

    // ===== FUNCTIONS =====
    const handleSingleSelection = (id) => {
        setSingleAccordianSelection(id === singleAccordianSelection ? null : id)
    }


    // ===== COMPONENT =====
    return(
        <div>
            <h1>Page 5</h1>
            {
                avengersData && avengersData.length > 0 ?
                avengersData.map(avenger => <div>
                    <p>{avenger.nickname}</p>
                    <p onClick={() => handleSingleSelection(avenger.id)}>+</p>
                    {
                        singleAccordianSelection === avenger.id ? <div>
                            <img src={avenger.img} alt={`Headshot of ${avenger.name}`} />
                            <p>{avenger.description}</p>
                        </div> : null
                    }
                </div>)
                :
                <p>No Avengers data found</p>
            }
        </div>
    )


}

export default Page5;