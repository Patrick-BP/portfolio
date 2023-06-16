import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> 
                        I’m a full stack developer with a passion for developing front and back-end applications. 
                        I am drawn to the rapid, ever-changing tech industry and look forward to be immersed in an environment 
                        with other talented engineers.
                        My specialties include quickly learning new skills and programming languages, 
                        problem solving and collaborating with team members. I really enjoy working with other people. 
                        I like learning and developing new approaches to solve problems.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>Bootsrap</li>
                                    <li>Material-ui</li>
                                </Col>
                                <Col md={5}>
                                    <li>Node Js</li>
                                    <li>Express</li>
                                    <li>Mongodb</li>
                                    <li>SQL</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
