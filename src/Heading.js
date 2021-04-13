import { Row, Col } from 'react-bootstrap';
const Heading = () => {
    return (
        <div>
            <div class="heading">
                <h2>Dashboard</h2>
                <h5 className="d-inline">Hello </h5>
                <h5 className="d-inline name">Alice,</h5>
            </div>
            <div className="options">
                <Row >
                    
                    <Col>
                        <select name="duartion" id="duration">
                            <option value="Past month">Past Month</option>
                            <option value="Year">Past Year</option>
                        </select>
                        <select name="reg" id="region">
                            <option value="EU">EU</option>
                            <option value="USA">USA</option>
                        </select>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Heading;