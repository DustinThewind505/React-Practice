import React, { useState } from 'react';
import avengersData from './data.js'

import './page5.css'

function Page5() {
    // ===== STATE =====
    const [singleAccordianSelection, setSingleAccordianSelection] = useState(false);
    const [accordianIcon, setAccordianIcon] = useState(true);

    // ===== FUNCTIONS =====
    const handleSingleSelection = (id) => {
        setSingleAccordianSelection(id === singleAccordianSelection ? null : id)
        setAccordianIcon(id === singleAccordianSelection ? setAccordianIcon(!accordianIcon) : setAccordianIcon(true))
    }


    // ===== COMPONENT =====
    return(
        <div>
            <h1>Page 5</h1>
            {
                avengersData && avengersData.length > 0 ?
                avengersData.map(avenger => <div className="accordian-item">
                    <p>{avenger.nickname}</p>
                    {singleAccordianSelection === avenger.id ? <p onClick={() => handleSingleSelection(avenger.id)}>-</p> : <p onClick={() => handleSingleSelection(avenger.id)}>+</p>}
                    {
                        singleAccordianSelection === avenger.id ? <div>
                            <img src={avenger.img} alt={`Headshot of ${avenger.name}`} />
                            <p className="accordian-description">{avenger.description}</p>
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