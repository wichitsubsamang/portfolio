import './App.css';
import Home from './component/home';
import About from './component/about';
import Work from './component/work';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {useRef} from 'react';
import resume from './component/img/Resume.pdf'

function App() {

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <BrowserRouter>
    <div>
       <Navbar className='justify-content-between' expand='lg'>
          <Container>
            <Navbar.Brand style={{fontSize: '1.8rem', fontWeight:'600'  }} href='/'>
              Wichit Subsam-ang
            </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <div className='me-auto'></div>
                  <Nav>
                    <Link className='nav-link' style={{fontSize: '1.2rem', fontWeight:'600' }} to='/'>
                      Home
                    </Link>
                    <Link onClick={handleClick} className='nav-link' style={{fontSize: '1.2rem', fontWeight:'600'  }} to='/'>
                      Work
                    </Link>
                    <Link className='nav-link' style={{fontSize: '1.2rem', fontWeight:'600'  }} to='/about'>
                      About
                    </Link>                    
                  </Nav>
                </Navbar.Collapse>            
          </Container>
       </Navbar>
      <div >
          <Routes >
            <Route exact path='/' element={(
            <>
              <Home />
              <div ref={ref}><Work /></div>
            </>
          )}/>
            <Route path='/about' element=<About /> />
          </Routes>
      </div>
       <footer>
        <Container style={{marginBottom: '4rem', marginTop: '4rem'}}>
          <h4 style={{fontWeight: '600', fontSize:'2rem'}}>Contact</h4> <br/>
          <Container className='justify-content-between'>
          <a className='footlink' href='mailto: w.subsamang@gmail.com' target='_blank' rel="noreferrer">Email</a>
          <a className='footlink' href='https://www.linkedin.com/in/wichit-subsam-ang-0461821bb' target='_blank' rel="noreferrer">LinkedIn</a>
          <a className='footlink' href='https://github.com/wichitsubsamang' target='_blank' rel="noreferrer">Github</a>
          <a className='footlink' href={resume} target='_blank' rel="noreferrer">Resume</a>
          </Container>
        </Container>
       </footer>
    </div> 
    </BrowserRouter>
  );      
}

export default App;
