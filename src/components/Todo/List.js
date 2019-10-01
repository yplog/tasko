import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

class List extends Component {

    state = {
        todos: this.props.todos
    }

    render() {
        const { todos } = this.state;
        
        return(
            <Row>
                <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                    {
                        todos.map((t) => 
                            t.active ?
                            <InputGroup className="mt-3" key={t.id}>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                </InputGroup.Prepend>
                                <FormControl disabled aria-label="Text input with checkbox" value={t.todo} />
                            </InputGroup>
                            : ''
                        )
                    }
                    
                </Col>
            </Row>
        );
    }
}

export default List;