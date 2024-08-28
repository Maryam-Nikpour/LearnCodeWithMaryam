import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h2>LearnCodeWithMaryam</h2>
            <p>
              Learning tech skills has changed my life for the better. And it
              can do the same for you.
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
