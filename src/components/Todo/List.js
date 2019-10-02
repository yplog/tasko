import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TODO_FILENAME } from '../../utils/constant';

class List extends Component {

    state = {
        todos: this.props.todos,
        userSession: this.props.userSession,
        todo: '',
        id: ''
    }

    checkedTodo = async (id) => {
        const { todos, userSession } = this.state;
        const options = { encrypt: false };
        const todo = todos.find(todo => todo.id === id);
        todo.active = false;

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
    
    selectedTodo = (id) => {
        const { todos } = this.state;
        const todo = todos.find(todo => todo.id === id);

        this.setState({ id: id, todo: todo.todo });
    }

    updateTodo = async () => {
        const { todos, todo, id, userSession } = this.state;
        const options = { encrypt: false };
        const active = true;

        const uTodo = todos.find(todo => todo.id === id);

        todos.splice(todos.indexOf(uTodo), 1);

        const params = {
            id,
            todo,
            active
        };

        try {
            if (todos.length > 0) {
                await userSession.putFile(TODO_FILENAME, JSON.stringify([...todos, params]), options);
            } else {
                await userSession.putFile(TODO_FILENAME, JSON.stringify([params]), options);
            }

            todos.push(params);
            this.setState({ todo: '', id: '', todos: todos });
        } catch (error) {
            console.log(error);
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { todos, id, todo } = this.state;
        
        return(
            <Row>
                {
                    todos.length ?
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                        {
                            todos.map((t) => 
                                t.active ?
                                <InputGroup className="mt-3" key={t.id} >
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox onClick={() => this.checkedTodo(t.id)} />
                                    </InputGroup.Prepend>
                                    <div onClick={() => this.selectedTodo(t.id)}>
                                        <FormControl 
                                            value={id === t.id ? todo : t.todo}
                                            disabled={id === t.id ? false : true}
                                            name="todo"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <InputGroup.Append>
                                        <Button variant="outline-warning" 
                                            disabled={id === t.id ? false : true} 
                                            onClick={() => this.updateTodo(t.id)}>
                                            <FontAwesomeIcon icon={faEdit}/>
                                        </Button>
                                        <Button variant="outline-danger" onClick={() => this.deleteTodo(t.id)}>
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