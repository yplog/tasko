import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

class List extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession
    }

    render() {
        
        return(
            <Row>
                <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                    <InputGroup className="mt-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
            </Row>
        );
    }
}

export default List;