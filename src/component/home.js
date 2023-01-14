import './home.css';
import { Container, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

function Home() {
    return(
        <div>
            <Fade bottom>
            <Container>
                <Row style={{margin: '8rem 0 8rem 0'}}>
                    <Col xs={12} md={6} >
                        <div className='img'></div>
                    </Col>
                    <Col style={{paddingTop: '6%'}} xs={12} md={6}>
                        <h1 style={{fontSize: '6rem', fontWeight:'700'}}>Hello!</h1>
                        <h2 style={{fontSize: '3rem'}}>I'm Wichit Subsam-ang, a front-end developer internship.</h2>              
                    </Col>
                </Row>
            </Container>
            </Fade>
            <Fade bottom>
            <Container className='line'></Container>
            </Fade>
        </div>
   );
}

export default Home;