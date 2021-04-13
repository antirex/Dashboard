import { Row, Col, Card } from 'react-bootstrap';
const Horizontal2 = () => {
    return (
        <div>
            <Row>
                <Col md={4} xs={5}>
                    <Card className="card4 card">
                        <Card.Body>
                            <p>Pending</p>
                            <h2>35</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={5} md={4}>
                    <Card className="card5 card">
                        <Card.Body>
                            <p>Pending</p>
                            <h2>35</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={5} md={4}>
                    <Card className="card6 card">
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

export default Horizontal2;