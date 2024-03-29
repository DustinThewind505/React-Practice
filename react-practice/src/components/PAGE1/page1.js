import React, { useState } from 'react';
import logo from '../../logo.svg';

import { Card, Container, Row, Col } from 'reactstrap';

import Counter from './components/counter/counter';
import ColorPicker from './components/colorPicker/colorPicker';
import HideElement from './components/hideElement/hideElement';
import InputValue from './components/inputValue/inputValue';
import UserProps from './components/userProps/userProps';
import RandomColor from './components/randomColors/randomColor';
import GhibliApi from './components/ghibliApi/ghibliAPI';
import DogApi from './components/dogAPI/dogAPI';
import RickAndMortyApi from './components/rickAndMorty/RickAndMorty';
import NasaApi from './components/nasaApi/nasaApi';
import FriendsForm from './components/friendsForm/friendsForm';
import AdvancedForm from './components/advancedForm/advancedform';
import { ClassComponentForm } from './components/classComponentForm';
import AccordianComponent from './components/accordianComponent/accordianComponent';
import RandomRgbColors from './components/randomRgb';

import './page1.css';


function PageOne() {

    // ======== Color Picker ========
    const [color, setColor] = useState("White");

    // ======== Hide Element ========
    const [star, setStar] = useState(false)


    // ======== Random Color ========
    const [randomColor, setRandomColor] = useState("cadetBlue");

    const changeColor = arr => {
        setRandomColor(arr[Math.floor(Math.random() * arr.length)])
    }


    // === Styles ===
    const fontStyles = {
        color: ""
    }

    if (color === "Blue") {
        fontStyles.color = "blue";
    } else if (color === "Red") {
        fontStyles.color = "red";
    } else if (color === "Green") {
        fontStyles.color = "green";
    } else if(color === "White") {
        fontStyles.color = "white";
    } else {
        fontStyles.color = "white";
    }

    const bgStyles = {
        background: randomColor,
    }


    return (
        <Container>
            <Row>
                {/* ======== Counter ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <Counter fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Color Picker ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <ColorPicker color={color} setColor={setColor} fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Hide Element ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={{ background: star ? randomColor : "", }} >
                        <HideElement star={star} setStar={setStar} fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Random Color ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <RandomColor randomColor={randomColor} changeColor={changeColor} fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== User Props ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <UserProps randomColor={randomColor} fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Input Value ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <InputValue randomColor={randomColor} fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Ghibli API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="ghibli-api">
                        <GhibliApi fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Dog API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card className='dog-api' style={bgStyles} id="dog-api">
                        <DogApi fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Rick and Morty API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="rick-and-morty-api">
                        <RickAndMortyApi fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Nasa API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="nasa-api">
                        <NasaApi fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Friends Form ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="friends-form">
                        <FriendsForm fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Advanced Form ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="friends-form">
                        <AdvancedForm fontStyles={fontStyles} />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Class Component Form ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="friends-form">
                        <ClassComponentForm />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Accordian Component ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="accordian-component">
                        <AccordianComponent />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
                {/* ======== Random RGB ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="random-rgb-color">
                        <RandomRgbColors />
                        <img src={logo} className="App-logo" alt="logo" />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PageOne;
