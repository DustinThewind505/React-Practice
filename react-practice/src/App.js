import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import ReactLogo from './components/reactLogo/index.jsx';

import PageOne from './pages/PAGE1/page1';
import AvengersApp from './pages/PAGE2/avengersApp';
import Avenger from './pages/PAGE2/avengerBio';
import PageThree from './pages/PAGE3/page3';
import { CustomHooks } from './pages/PAGE4';
import Page5 from './pages/PAGE5/page5.js';
import Page6 from './pages/PAGE6/page6.js';
import Page7 from './pages/PAGE7';
import Page8 from './pages/PAGE8';
import Page9 from './pages/PAGE9'
import Footer from './components/footer.jsx';

import { avengersData } from './pages/PAGE2/avengersData';
import './App.css';

const Home = props => {
  return <div>
    <img src='images/empty-code-bracket.png' alt="empty code brackets" />

    <h1>Home Component</h1>
    <ReactLogo />
  </div>
};


function App() {


  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <ul className='home-nav'>
            <li className='nav-buttons'><NavLink exact to='/'>Home</NavLink></li>
            <li className='nav-buttons'><NavLink to='/react-components'>React Components</NavLink></li>
            <li className='nav-buttons'><NavLink to='/avengers' >Avengers APP</NavLink></li>
            <li className='nav-buttons'><NavLink to='/page3' >Forms</NavLink></li>
            <li className='nav-buttons'><NavLink to='/customHooks'>Hooks</NavLink></li>
            <li className='nav-buttons'><NavLink to='/page5'>Accordian</NavLink></li>
          </ul>
          <ul className='home-nav'>
            <li className='nav-buttons'><NavLink to='/page6'>Random Color Gen</NavLink></li>
            <li className='nav-buttons'><NavLink to='/page7'>Star rating</NavLink></li>
            <li className='nav-buttons'><NavLink to='/page8'>Image Slider</NavLink></li>
            <li className='nav-buttons'><NavLink to='/page9'>Load More</NavLink></li>
          </ul>
        </nav>
      </header>
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
      <Route path='/page6'>
        <Page6 />
      </Route>
      <Route path='/page7'>
        <Page7 />
      </Route>
      <Route path='/page8'>
        <Page8 />
      </Route>
      <Route path='/page9'>
        <Page9 />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
