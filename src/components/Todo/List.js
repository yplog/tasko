import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TODO_FILENAME } from '../../utils/constant';
import { async } from 'q';

class List extends Component {

    state = {
        todos: this.props.todos,
        userSession: this.props.userSession
    }

    // TODO: Checkbox is checked => Archive

    deleteTodo = async (id) => {
        const { todos, userSession } = this.state;
        const options = { encrypt: false };
        const todo = todos.find(todo => todo.id === id);
        
        todos.splice(todos.indexOf(todo), 1);

        this.setState({ todos: todos });

        try {
            if (todos.length > 0) {
                await userSession.putFile(TODO_FILENAME, JSON.stringify([...todos]), options);
            } else {
                await userSession.putFile(TODO_FILENAME, JSON.stringify([todos]), options);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    // TODO: Update => Update todo

    render() {
        const { todos } = this.state;
        
        return(
            <Row>
                {todos.length}
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
                                        <Button variant="outline-secondary" onClick={() => this.deleteTodo(t.id)}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Button>
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