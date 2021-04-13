import { Row, Col, Card } from 'react-bootstrap';

const VerticalCard = () => {
    return (
        <div>
            <Col>
                <Row>
                    <Card className="cardver">
                        <Card.Body>
                            <div className="circle">
                                <div className="center">
                                    <h3>14</h3>
                                    <p>Days are left</p>
                                    <button className="btn">
                                        Upgrade
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </div>
    )
}

export default VerticalCard;