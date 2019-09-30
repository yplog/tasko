import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TODO_FILENAME } from '../../utils/constant';
import generateUUID from '../../utils/generateUUID';


class Create extends Component {

    state = {
        user: this.props.user,
        userSession: this.props.userSession,
        todo: '',
        alert: false
    }

    static propTypes = {
        userSession: PropTypes.object.isRequired
    }

    onCreateTODO = async (todo) => {
        const options = { encrypt: false };
        const { history, userSession, User } = this.props;
        const id = generateUUID();
        const active = true;

        const params = {
            id,
            todo,
            active
        };

        try {
            await userSession.putFile(TODO_FILENAME, JSON.stringify(params), options);
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

        console.log(this.state.userSession);
    }

    render() {
        const { alert } = this.state;
        
        return(
            <div>
                <Row>
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
            </div>
        );
    }
}

export default Create;