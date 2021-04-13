import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import { Col, ListGroup, Card } from 'react-bootstrap';
const Updatedesc = (props) => {
    const lists = props.update;
    return (
        <Col style={{ paddingRight: '0px' }}>
            <Card className="lowercard" >
                <Card.Header>
                    <h3>Updates</h3>
                </Card.Header>
                <ListGroup variant="flush">
                    {lists.map((item) => {
                        return (
                            <div>

                                <ListGroup.Item>
                                    <div className="inline-box1">
                                        {(item.logo==='WarningIcon')? <WarningIcon style={{ color: item.color }} /> : <CheckCircleSharpIcon style={{ color: item.color }} /> }
                                        <h6 className="d-inline">{item.msg}</h6>
                                        <p className="d-inline view">{item.out}</p>
                                    </div>
                                </ListGroup.Item>

                            </div>
                        )
                    })}
                </ListGroup>
            </Card>
        </Col>
    )
}

export default Updatedesc;