import './home.css';
import { Container, Row, Col } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

function Home() {
    return(
        <div>
            <Fade bottom>
            <Container>
                <Row className='rw'>
                    <Col className='lbx' xs={12} md={6} >
                        <div className='img'></div>
                    </Col>
                    <Col className='rbx' xs={12} md={6}>
                        <h1 className='hello'>Hello!</h1>
                        <h2 className='iam'>I'm Wichit Subsam-ang<br/>a front-end web developer.</h2>              
                    </Col>
                </Row>
            </Container>
            </Fade>
            <Fade bottom>
            <Container className='line'  style={{width: "90vw"}}></Container>
            </Fade>
        </div>
   );
}

export default Home;