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
                        <h1 className='iam' style={{fontWeight:'700'}}>Wichit Subsam-ang</h1>
                        <h1 className='hello' style={{ fontWeight:'600'}}>Front-end developer internship</h1><br />
                        <h2 className='dt' >I'm studying in the 4th year in Apllied computer science Multimedia major of King Mongkut’s University of Technology Thonburi (KMUTT). My main expertise lies in front-end web application development 
                        and I have basic knowledge in multimedia design such as UX/UI design, Graphic design, Video editing and 3D modelling. </h2>
                    </Col>
                    <Col xs={1} md={0}></Col>
                    <Col style={{paddingTop: '6%'}} xs={12} md={4}>
                        <Row>
                            <Col style={{paddingBottom: '12%'}} xs={12} md={12}>
                                <h1 className='iam' style={{fontWeight:'700'}}>Programing Skills</h1>
                                <h2 className='dt'>HTML CSS Javascript <br />ReactJS <br />VueJS <br />Bootstrap <br />Asp.NET Core MVC <br />Firebase <br />Github</h2>
                            </Col>
                            <Col style={{paddingBottom: '12%'}} xs={12} md={12}>
                                <h1 className='iam' style={{fontWeight:'700'}}>Multimedia Skills</h1>
                                <h2 className='dt'>Figma <br/>Adobe Photoshop <br />Adobe Illustrator <br />Adobe Premiere Pro <br />Adobe After Effect <br />Autodesk Maya </h2>
                            </Col>
                            <Col xs={12} md={12}>
                                <h1 className='iam' style={{fontWeight:'700'}}>Soft Skills</h1>
                                <h2 className='dt'>Creativity <br />Critical thinking <br />Teamwork <br />Communication <br />Problem solving </h2>
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