import React, { useState } from "react";

import MarvelData from "./data";
import './page5.css'



function Page5() {

    const [accordianState, setAccordianState] = useState(true);
    const [accordianSingleSelection, setAccordianSingleSelection] = useState(0);
    const [accordianMultipleSelection, setaccordianMultipleSelection] = useState([]);

    const handleSingleSelection = (id) => {

        if(accordianSingleSelection === id) {
            setAccordianSingleSelection(0)
        } else {
            setAccordianSingleSelection(id)
        }
        
    }

    const handleMultipleSelection = (id) => {

        let newArray = [...accordianMultipleSelection]
        const findIndexOfId = newArray.indexOf(id)

        if(findIndexOfId === -1) {
            newArray.push(id)
        } else {
            newArray.splice(findIndexOfId, 1)
        }

        setaccordianMultipleSelection(newArray)
    }

    const handleAccordianStateButton = () => {

        setAccordianSingleSelection(0)
        setaccordianMultipleSelection([])
        setAccordianState(!accordianState)
        
    }

    console.log(accordianMultipleSelection);

    return (
        <div>
           <h1>Accodian component</h1>
           <button onClick={() => handleAccordianStateButton()}>Enable Multi select</button>

           {
            MarvelData && MarvelData.length > 0 ?
                
                    MarvelData.map(avenger => {

                        return <div className="accordian-item" key={avenger.id} onClick={accordianState ? () => handleSingleSelection(avenger.id) : () => handleMultipleSelection(avenger.id)}>
                            <img src={avenger.thumbnail} alt={`${avenger.name} head shot`}/>
                            <span>+</span>
                                {accordianSingleSelection === avenger.id || accordianMultipleSelection.indexOf(avenger.id) !== -1 ? <div className="accordian-description">
                                        <p>{avenger.nickname}</p>
                                        <p>{avenger.description}</p>
                                    </div>
                                    :
                                    null
                                }
                        </div>
                    })
                
                :
                <p>
                    No data found
                </p>
           }
        </div>
    )
}

export default Page5