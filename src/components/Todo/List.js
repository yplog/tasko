import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { TODO_FILENAME } from '../../utils/constant';

class List extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession,
        todos: ''
    }

    componentDidMount() {
        //this.loadTODOS();
    }

    loadTODOS = async () => {
        const { userSession } = this.state;
        const options = { decrypt: false };

        const result = await userSession.getFile(TODO_FILENAME, options);

        if (result) {
            return this.setState({ todos: JSON.parse(result) });
        }

        return null;
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