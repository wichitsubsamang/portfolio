import './about.css';
import { Container, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

function About(){
    return(
        <div> 
        <Fade bottom>
            <Container>
                <Row style={{margin: '8rem 0 8rem 0'}}>
                    <Col style={{paddingTop: '6%'}} xs={12} md={7}>
                        <h1 style={{fontSize: '3rem', fontWeight:'700'}}>Wichit Subsam-ang</h1>
                        <h1 style={{fontSize: '2.7rem', fontWeight:'600'}}>Front-end developer internship</h1><br />
                        <h2 style={{fontSize: '1.5rem', fontWeight:'300', lineHeight: '2.5rem'}}>I'm studying in the 4th year in Apllied computer science Multimedia major of King Mongkut’s University of Technology Thonburi (KMUTT). My main expertise lies in front-end web application development 
                        and I have basic knowledge in multimedia design such as UX/UI design, Graphic design, Video editing and 3D modelling. </h2>
                    </Col>
                    <Col xs={1} md={0}></Col>
                    <Col style={{paddingTop: '6%'}} xs={12} md={4}>
                        <Row>
                            <Col style={{paddingBottom: '12%'}} xs={12} md={12}>
                                <h1 style={{fontSize: '2rem', fontWeight:'700'}}>Programing Skills</h1>
                                <h2 style={{fontSize: '1.5rem', fontWeight:'300', lineHeight: '2.5rem'}}>HTML CSS Javascript <br />ReactJS <br />Bootstrap <br />Asp.NET Core MVC</h2>
                            </Col>
                            <Col style={{paddingBottom: '12%'}} xs={12} md={12}>
                                <h1 style={{fontSize: '2rem', fontWeight:'700'}}>Multimedia Skills</h1>
                                <h2 style={{fontSize: '1.5rem', fontWeight:'300', lineHeight: '2.5rem'}}>Figma <br/>Adobe Photoshop <br />Adobe Illustrator <br />Adobe Premiere Pro <br />Adobe After Effect <br />Autodesk Maya </h2>
                            </Col>
                            <Col xs={12} md={12}>
                                <h1 style={{fontSize: '2rem', fontWeight:'700'}}>Soft Skills</h1>
                                <h2 style={{fontSize: '1.5rem', fontWeight:'300', lineHeight: '2.5rem'}}>Creativity <br />Critical thinking <br />Teamwork <br />Communication <br />Problem solving <br />Never stop learning</h2>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
            </Fade>
            <Fade bottom></Fade>
        </div>  
    );
}
export default About;