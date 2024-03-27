import React, { useState } from "react";
import { CardHeader, CardBody, CardText } from "reactstrap";
import mockData from "./data";


function AccordianComponent() {
    const [accordianSingleSelection, setAccordianSingleSelection] = useState(0);


    const handleSingleSelection = (id) => {
        
        if(accordianSingleSelection === id) {
            setAccordianSingleSelection(0)
        } else {
            setAccordianSingleSelection(id)
        }
        
    }

    return(
        <>
            <CardHeader>Accordian component</CardHeader>
            {
                mockData || mockData.length !== 0 ?
                    mockData.map(data => {
                        
                        return(
                            <CardBody key={data.id}>
                                <CardText onClick={() => handleSingleSelection(data.id)}>{data.title} +</CardText>
                                {
                                    accordianSingleSelection === data.id ?
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
