import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import hand from "./assets/images/Piano-Hand.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col className="App-div">
                        First colomn
                        <img
                            className="App-hand"
                            src={hand}
                            alt="A picture from my Senior Project"
                        />
                    </Col>
                    <Col className="App-div">
                        Second colomn
                        <ul>
                            <li>
                                This is a &apos;hand&apos; that moves right and
                                left
                            </li>
                            <li>The hand will also depress the keys</li>
                            <li>
                                The combination of these two things will allow
                                it to play the piano
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <h1>Test Header</h1>

            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. Justin Clavette
            </p>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
