import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class List extends Component {

    state = {
        todos: this.props.todos
    }

    // TODO: Checkbox is checked => Archive

    // TODO: Button delete => Delete todo

    // TODO: Update => Update todo

    render() {
        const { todos } = this.state;
        
        return(
            <Row>
                {
                    todos.length ?
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                        {
                            todos.map((t) => 
                                t.active ?
                                <InputGroup className="mt-3" key={t.id}>
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox />
                                    </InputGroup.Prepend>
                                    <FormControl value={t.todo} disabled />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"><FontAwesomeIcon icon={faTrash}/></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                : ''
                            )
                        }
                    </Col>
                    : ''
                }
                
            </Row>
        );
    }
}

export default List;