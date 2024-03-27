import React from 'react';



function UserName(props) {




    return (
        <>
            <ul>Name
                {props.name.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UserName;