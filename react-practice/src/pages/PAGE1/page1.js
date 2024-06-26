import React, { useState } from 'react';
import ReactLogo from '../../components/reactLogo';

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
import RatingsComponent from './components/ratingsComponent/ratingsComponent';
import LoadMore from './components/loadMore'

import './page1.css';


function PageOne() {

    // ======== Color Picker ========
    const [color, setColor] = useState("White");

    // ======== Hide Element ========
    const [star, setStar] = useState(false)


    // ======== Reusable Random Color Generation ========
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
                        <Counter fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Color Picker ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <ColorPicker color={color} setColor={setColor} fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Hide Element ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={{ background: star ? randomColor : "pink", }} >
                        <HideElement star={star} setStar={setStar} fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Random Color ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <RandomColor randomColor={randomColor} changeColor={changeColor} fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== User Props ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <UserProps randomColor={randomColor} fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Input Value ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles}>
                        <InputValue randomColor={randomColor} fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Ghibli API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="ghibli-api">
                        <GhibliApi fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Dog API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card className='dog-api' style={bgStyles} id="dog-api">
                        <DogApi fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Rick and Morty API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="rick-and-morty-api">
                        <RickAndMortyApi fontStyles={fontStyles} ReactLogo={ReactLogo}/>
                    </Card>
                </Col>
                {/* ======== Nasa API ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="nasa-api">
                        <NasaApi fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Friends Form ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="friends-form">
                        <FriendsForm fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Advanced Form ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="friends-form">
                        <AdvancedForm fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Class Component Form ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="friends-form">
                        <ClassComponentForm ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Accordian Component ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="accordian-component">
                        <AccordianComponent fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Random RGB ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="random-rgb-color">
                        <RandomRgbColors fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Ratings Component ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="ratings-component">
                        <RatingsComponent fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
                {/* ======== Load More ======== */}
                <Col sm="6" md="4" xl="6">
                    <Card style={bgStyles} className="load-more-component">
                        <LoadMore fontStyles={fontStyles} ReactLogo={ReactLogo} />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PageOne;
