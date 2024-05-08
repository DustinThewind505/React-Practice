import React from 'react';
import { CardHeader } from 'reactstrap';
import { Button } from 'reactstrap';


function HideElement(props) {

    const toggleStar = () => {
        props.setStar(!props.star)
    }



    return (
        <>
            <CardHeader><img src={props.logo} className="app-logo app-logo-page-1" alt="logo" /><span style={props.fontStyles}>Hide</span> El<span style={props.fontStyles}>e</span>m<span style={props.fontStyles}>e</span>nt<img src={props.logo} className="app-logo app-logo-page-1" alt="logo" /></CardHeader>
            <div>
                <Button onClick={toggleStar}>
                    {props.star ? "Hide" : "Show"}
                </Button>
            </div>
            {
                props.star && <img className="patrick-star" src="https://vignette2.wikia.nocookie.net/spongebob/images/0/0a/Drooling.png/revision/latest?cb=20140824164345" alt="Patrick Star" />
            }
        </>
    )
}

export default HideElement;