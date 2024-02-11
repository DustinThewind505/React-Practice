import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import PageOne from './components/PAGE1/page1';
import AvengersApp from './components/PAGE2/avengersApp';
import Avenger from './components/PAGE2/avengerBio';
import PageThree from './components/PAGE3/page3';
import { CustomHooks } from './components/PAGE4';
import Page5 from './components/PAGE5/page5.js';

import { avengersData } from './components/PAGE2/avengersData';
import './App.css';
import logo from './logo.svg';

const Home = props => {
  return <div>
    <img src='http://cdn2.hubspot.net/hub/189441/file-476147663-png/images/icons/html-code-brackets.png?t=1390636021000' alt="empty code brackets" />

    <h1>Home Component</h1>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
};


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <ul className='home-nav'>
          <li className='nav-buttons'><NavLink exact to='/'>Home</NavLink></li>
          <li className='nav-buttons'><NavLink to='/react-components'>React Components</NavLink></li>
          <li className='nav-buttons'><NavLink to='/avengers' >Avengers APP</NavLink></li>
          <li className='nav-buttons'><NavLink to='/page3' >Forms</NavLink></li>
          <li className='nav-buttons'><NavLink to='/customHooks'>Hooks</NavLink></li>
          <li className='nav-buttons'><NavLink to='/page5'>Accordian</NavLink></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/react-components' component={PageOne} />
        <Route exact path='/avengers' render={props => <AvengersApp {...props} avengersData={avengersData} />} />
        <Route path='/avengers/:id' render={props => <Avenger {...props} avengersData={avengersData} />} />
        <Route path='/page3'>
          <PageThree />
        </Route>
        <Route path='/customHooks'>
          <CustomHooks />
        </Route>
        <Route path='/page5'>
          <Page5 />
        </Route>
      </header>
    </div>
  );
}

export default App;
