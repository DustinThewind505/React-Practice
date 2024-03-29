import React, { useState } from "react";
import { CardHeader, CardBody, CardText, Button } from "reactstrap";
import mockData from "./data";


function AccordianComponent({ fontStyles }) {
    const [accordianSingleSelection, setAccordianSingleSelection] = useState(0);
    const [accordianMultipleSelection, setAccordianMultipleSelection] = useState([]);

    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);



    const handleSingleSelection = (id) => {
        
        if(accordianSingleSelection === id) {
            setAccordianSingleSelection(0)
        } else {
            setAccordianSingleSelection(id)
        }
        
    }
    
    const handleMultipleSelection = (id) => {
        let newArray = [...accordianMultipleSelection];
        const selectionIndex = newArray.indexOf(id);

        if(selectionIndex === -1) {
            newArray.push(id)
        } else {
            newArray.splice(selectionIndex, 1);
        }

        setAccordianMultipleSelection(newArray);

        console.log(newArray)
    }

    const handleEnableButton = () => {
        setAccordianSingleSelection(0);
        setAccordianMultipleSelection([]);

        setEnableMultipleSelection(!enableMultipleSelection);
    }
    

    return(
        <>
            <CardHeader>Ac<span style={fontStyles}>cord</span>ian compo<span style={fontStyles}>ne</span >n<span style={fontStyles}>t</span></CardHeader>
            <Button onClick={() => handleEnableButton()}>{!enableMultipleSelection ? "Enable Multiple Seletion" : "Disable Multiple Selection"}</Button>
            <p>{enableMultipleSelection ? "Multiple selection enabled ✅" : null}</p>
            {
                mockData || mockData.length > 0 ?

                    mockData.map(data => {
                        
                        return(
                            <CardBody key={data.id} onClick={enableMultipleSelection ? () => handleMultipleSelection(data.id) : () => handleSingleSelection(data.id)}>
                                <CardText>{data.title} +</CardText>
                                {
                                    accordianSingleSelection === data.id || accordianMultipleSelection.indexOf(data.id) !== -1 ?
                                        <CardText>{data.body}</CardText>
                                    :
                                    null
                                }
                            </CardBody>
                        )
                    })
                :
                    <CardBody>
                        <CardText>
                            No accordin data found
                        </CardText>
                    </CardBody>
            }
        </>
    )
}

export default AccordianComponent;
