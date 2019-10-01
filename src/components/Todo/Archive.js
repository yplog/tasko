import React, { Component } from 'react';
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import { TODO_FILENAME } from '../../utils/constant';
import Loader from 'react-loader-spinner';

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

    render() {
        const { todos, loader } = this.state;
        
        return(
            <div>
                <Row>
                    <Col xs={{ span: 3, offset: 4 }} md={{ span: 6, offset: 3 }}>
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