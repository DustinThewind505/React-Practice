import React from 'react';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';

import AvengerInfo from './avengerDescription';
import AvengerMovies from './avengerMovies';


function AvengerBio(props) {

  const avenger = props.avengersData.find(hero => hero.id === Number(props.match.params.id))

  const { path, url } = useRouteMatch();

  return (
    <>
      <img className='character-image' src={avenger.img} alt={avenger.name} />
      <div className='character-info-wrapper'>
      <h1>{avenger.name}</h1>
      <h3>({avenger.nickname})</h3>
      <ul className='bio-list'>
        <li><NavLink to={`${url}/info`}>Bio</NavLink></li>
        <li><NavLink to={`${url}/movies`}>Movies</NavLink></li>
      </ul>
      
      
      <Route path={`${path}/info`} render={props => <AvengerInfo {...props} avenger={avenger} />} />
      <Route path={`${path}/movies`} render={props => <AvengerMovies {...props} avenger={avenger} />} />
      </div>
      <button onClick={() => props.history.push('/avengers')}>Go Back</button>
    </>
  )
}

export default AvengerBio;

