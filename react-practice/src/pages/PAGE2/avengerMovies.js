import React from 'react';



function AvengerMovies(props) {




return <ul className='avenger-movielist'>{props.avenger.movies.map(movie => <li>{movie}</li>)}</ul>
}

export default AvengerMovies;