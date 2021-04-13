import { Row, Col, Card } from 'react-bootstrap';
const Horizontal1 = () => {
  return (
    <div>
      <Row>
        <Col md={4} xs={4}>
          <Card className="card1 card">
            <Card.Body>
              <p>Pending</p>
              <h2>35</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} md={4}>
          <Card className="card2 card1">
            <Card.Body>
              <p>Pending</p>
              <h2>35</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4} md={4}>
          <Card className="card3 card1">
            <Card.Body>
              <p>Pending</p>
              <h2>35</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Horizontal1;