import { Container, Row, Col } from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import VerticalCard from './VerticalCard';
import Horizontal1 from './Horizontal1';
import Horizontal2 from './Horizontal2';
import DownCard from './DownCard';
import NavbarComp from './NavbarComp';
import Heading from './Heading';
function App() {
  return (
    <div className="sidebar">
      <Row >
        <Col md={2}>
          <NavbarComp />
        </Col>
        <Col md={10}>
          <Container>
            <Heading />
            <Row>
              <Col>
                <Horizontal1 />
                <Horizontal2 />
              </Col>
              <VerticalCard />
            </Row>
            <DownCard />
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default App;

