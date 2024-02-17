import React, { useState } from 'react';
import avengersData from './data.js'

import './page5.css'

function Page5() {
    // ===== STATE =====
    const [singleAccordianSelection, setSingleAccordianSelection] = useState(false);
    const [accordianIcon, setAccordianIcon] = useState(true);

    const [enableMulitpleselection, setEnableMulitpleselection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    // ===== FUNCTIONS =====
    const handleSingleSelection = (id) => {
        setSingleAccordianSelection(id === singleAccordianSelection ? null : id)
        setAccordianIcon(id === singleAccordianSelection ? setAccordianIcon(!accordianIcon) : setAccordianIcon(true))
    }

    const handleMultiSelection = (id) => {
        const newMultiple = [...multiple];
        const findIndexOfId = newMultiple.indexOf(id);

        if(findIndexOfId === -1) {
            newMultiple.push(id);
        } else {
            newMultiple.splice(findIndexOfId, 1)
        }
        setMultiple(newMultiple);
    }

    const handleMultipleSelectionButton = () => {
        setEnableMulitpleselection(!enableMulitpleselection);
        setSingleAccordianSelection(false);
        setMultiple([])
    }


    // ===== COMPONENT =====
    return(
        <div>
            <h1>Page 5</h1>
            <button onClick={() => handleMultipleSelectionButton}>{!enableMulitpleselection ? "Enable Multiple Selections" : "Disable Multiple Selections"}</button>
            {
                avengersData && avengersData.length > 0 ?
                avengersData.map(avenger => <div className="accordian-item">
                    <p>{avenger.nickname}</p>
                    <p onClick={enableMulitpleselection ? () => handleMultiSelection(avenger.id) : () => handleSingleSelection(avenger.id)}>+</p>
                    {
                        singleAccordianSelection === avenger.id  || multiple.indexOf(avenger.id) !== -1 ? <div>
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