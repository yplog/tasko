import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loader-spinner';
import { TODO_FILENAME } from '../../utils/constant';
import generateUUID from '../../utils/generateUUID';
import List from './List';


class Create extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession,
        todos: [],
        todo: '',
        alert: false,
        loader: true
    }

    static propTypes = {
        userSession: PropTypes.object.isRequired
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

    onCreateTODO = async (todo) => {
        this.setState({ loader: true });
        const options = { encrypt: false };
        const { history, userSession, user, todos } = this.state;
        const id = generateUUID();
        const active = true;

        const params = {
            id,
            todo,
            active
        };

        try {
            await userSession.putFile(TODO_FILENAME, JSON.stringify([...todos, params]), options);
            this.loadTODOS()
        } catch (error) {
            console.log(error);
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.todo) {
            const { todo } = this.state;
            this.onCreateTODO(todo);
        }
        else
            this.setState({ alert: true });
    }

    render() {
        const { alert, todos, loader } = this.state;
        
        return(
            <div>
                <Row>
                    {todos.length}
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
                        <InputGroup className="mt-3">
                            <FormControl onChange={this.onChange} name="todo" value={this.state.todo} placeholder="Add to-do..." />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.onSubmit}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                {
                    alert ?
                    <Row className="mt-3">
                        <Col>
                            <Alert variant="danger" onClose={() => this.setState({ alert: false })} dismissible>
                                <Alert.Heading>It's not worth saving a blank note!</Alert.Heading>
                                <p>
                                    Please write something.
                                </p>
                            </Alert>
                        </Col>
                    </Row>
                    : ''
                }

                <hr />
                
                {
                    !loader ? 
                    <List todos={todos} />
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

export default Create;