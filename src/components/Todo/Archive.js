import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { TODO_FILENAME } from '../../utils/constant';
import Loader from 'react-loader-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Archive extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession,
        todos: [],
        loader: true
    }

    componentDidMount() {
        this.loadTODOS();
    }

    loadTODOS = async () => {
        const { userSession } = this.state;
        const options = { decrypt: false };

        const result = await userSession.getFile(TODO_FILENAME, options);

        if (result) {
            this.setState({ 
                todos: JSON.parse(result),
                loader: false 
            });
        }

        return null;
    }

    deleteArchive = async () => {
        const { todos, userSession } = this.state;
        const options = { encrypt: false };

        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            if (!todo.active)
                todos.splice(todos.indexOf(todo), 1);
        }

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

    render() {
        const { todos, loader } = this.state;
        
        return(
            <div>
                <Row>
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }} className="mt-3">
                        <Button variant="danger" onClick={this.deleteArchive}>Delete Archive</Button>
                    </Col>
                </Row>
                
                <hr />
                {
                    !loader ?
                    <Row>
                        <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                            {
                                todos.map((t) => 
                                    !t.active ?
                                    <InputGroup className="mt-3" key={t.id}>
                                        <FormControl value={t.todo} disabled />
                                        <InputGroup.Append>
                                            <Button variant="outline-danger" onClick={() => this.deleteTodo(t.id)}>
                                                <FontAwesomeIcon icon={faTrash}/>
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                    : ''
                                )
                            }
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                            <Loader 
                            type="MutatingDots"
                            color="#000000"
                            height={100}
                            width={100} />
                        </Col>
                    </Row>
                }
                
            </div>
            
        );
    }
}

export default Archive;