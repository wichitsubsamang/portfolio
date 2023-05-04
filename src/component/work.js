import "./home.css";
import "./work.css"
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import Fade from "react-reveal/Fade";

function Work() {
  return (
    <div>
      <Fade bottom>
        <Container>
          <Row style={{ margin: "8rem 0 8rem 0" }}>
            <Col xs={12} md={7}>
              <h1 className="head">
                Senior project
              </h1>
            </Col>
            <Col style={{ paddingTop: "6%" }} xs={12} md={5}>
              <h2 className="detail">
              Senior project for research in the final year at the university.<br />Parallax Website to publicize the Apllied computer science Multimedia major of King Mongkut’s University of Technology Thonburi.
              </h2>
              <a
                className="github"
                href="https://cit.kmutt.ac.th/prj62/cmm_pr"
                target="_blank"
                rel="noreferrer"
              >
                View <ArrowRight size={20} />
              </a>
            </Col>
            <Col className="imgbx" xs={12} md={12}>
              <div className="srpj"></div>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade bottom>
        <Container>
          <Row style={{ margin: "8rem 0 8rem 0" }}>
            <Col xs={12} md={7}>
              <h1 className="head">
                Landing page
                <br />
                website
              </h1>
            </Col>
            <Col style={{ paddingTop: "6%" }} xs={12} md={5}>
              <h2 className="detail">
                Landing page website in my freelance jobs, develop with HTML CSS
                and Javascript.
              </h2>
            </Col>
            <Col className="imgbx" xs={12} md={12}>
              <div className="landpage"></div>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade bottom>
        <Container>
          <Row style={{ margin: "10rem 0 8rem 0" }}>
            <Col xs={12} md={6}>
              <div className="moderno"></div>
            </Col>
            <Col style={{ paddingTop: "6%" }} xs={12} md={6}>
              <h1 className="head">
                Moderno Website
              </h1>
              <h2 className="detail">
                E-commerce website to sell furniture and provide information on
                home decor, develop with Asp.NET, Bootstrap and SQL Database.
              </h2>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className="line" style={{width: "90vw"}}></Container>
      </Fade>
      <Container style={{ marginTop: "4rem" }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: "700" }}>Art work</h2>
      </Container>
      <Fade bottom>
        <Container>
          <Row style={{ margin: "1rem 0 1rem 0" }}>
            <Col xs={12} md={8}>
              <div className="td"></div>
            </Col>
            <Col style={{ paddingTop: "10%" }} xs={12} md={4}>
              <h1 className="head">3D Model</h1>
              <h2 className="detail">
                3D modelling with Autodesk MAYA, this model has been used to
                develop game in Unity.
              </h2>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade bottom>
        <Container>
          <Row style={{ margin: "5rem 0 3rem 0" }}>
            <Col xs={12} md={8}>
              <div className="cass"></div>
            </Col>
            <Col style={{ paddingTop: "10%" }} xs={12} md={4}>
              <h1 className="head">
                Cassette Magazine
              </h1>
              <h2 className="detail">
                My group project in Page layout and typography design class.
              </h2>
              <a
                className="github"
                href="https://issuu.com/burakornln/docs/cassette_magazine/48"
                target="_blank"
                rel="noreferrer"
              >
                Issuu <ArrowRight size={20} />
              </a>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade bottom>
        <Container className="line" style={{width: "90vw"}}></Container>
      </Fade>
    </div>
  );
}

export default Work;
