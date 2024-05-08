import React from 'react';

import './avengersApp.css';



function AvengersApp(props){


    return(
        <div className='characters-list-wrapper'>
          {props.avengersData.map(avenger => 
            <div className='character-card' key={avenger.id} onClick={() => props.history.push(`avengers/${avenger.id}`)}>
              <img src={avenger.thumbnail} alt={avenger.name} />
              <h2>{avenger.name}</h2>
              <h3>({avenger.nickname})</h3>
            </div>
          )}
        </div>
    )
}

export default AvengersApp;
