import React, { useState } from 'react';
import UserName from './userPropsName';
import UserTrail from './userPropsTrail';
import { CardHeader, CardBody } from 'reactstrap';

const hikers = [
    {
        "id": 1,
        "name": "Yoda",
        "trail": "PCT"
    },
    {
        "id": 2,
        "name": "Zig-Zag",
        "trail": "AT"
    },
    {
        "id": 3,
        "name": "Viking",
        "trail": "AT"
    },
    {
        "id": 4,
        "name": "Nilla",
        "trail": "CDT"
    },
    {
        "id": 5,
        "name": "Snow White",
        "trail": "PCT"
    },
]

function UserProps(props) {
    const [userInfo] = useState(hikers);




    return (
        <>
            <CardHeader><img src={props.logo} className="App-logo App-logo-page-1" alt="logo" /><span style={props.fontStyles}>U</span>s<span style={props.fontStyles}>e</span>r <span style={props.fontStyles}>Props</span><img src={props.logo} className="App-logo App-logo-page-1" alt="logo" /></CardHeader>
            <CardBody>
            <div className="user-lists" style={{ backgroundColor: props.randomColor }}>
                <UserName name={userInfo} />
                <UserTrail trail={userInfo} />
            </div>
            </CardBody>
        </>
    )
}

export default UserProps;