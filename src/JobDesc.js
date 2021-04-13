import { Col, ListGroup, Card } from 'react-bootstrap';
import Switches from './Switches';

const JobDesc = (props) => {
    const lists = props.lists;
    return (
        <div>
            <Col style={{ paddingRight: '0px' }}>
                <Card className="lowercard">
                    <Card.Header>
                        <h3>Your Phantoms</h3>
                    </Card.Header>
                    <ListGroup variant="flush">

                        {lists.map((list) => {
                            return (
                                <div>
                                    <ListGroup.Item>
                                        <div className="inline-box1">
                                            <h6 className="d-inline field">{list.desig}</h6>
                                            <p className="d-inline field">{list.name}</p>
                                        </div>
                                        <div className="inline-box1">
                                            <p className="d-inline field">{list.date}</p>
                                            <p className="d-inline field">Total Leads:</p>
                                            <p className="d-inline prop">{list.leads}</p>
                                            <p className="d-inline">Current status:</p>
                                            <p className="d-inline status">On-going</p>
                                            <p className="d-inline">Auto<Switches />Manual</p>
                                        </div>
                                    </ListGroup.Item>
                                </div>
                            )
                        })}

                    </ListGroup>
                    <Card.Footer>
                        <h3> </h3>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    )
}

export default JobDesc;