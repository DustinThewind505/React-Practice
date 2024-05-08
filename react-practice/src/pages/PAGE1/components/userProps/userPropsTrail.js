import React from 'react';



function UserTrail(props) {




    return (
        <>
            <ul>Trail
                {props.trail.map(user => <li key={user.id}>{user.trail}</li>)}
            </ul>
        </>
    )
}

export default UserTrail;