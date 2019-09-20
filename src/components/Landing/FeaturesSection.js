import React from "react";
import { Row, Container, Media } from "react-bootstrap";

const FeaturesSection = () => (
    <Container>
        <Row>
            <hr/>
            <Media>
                <img
                width={256}
                height={256}
                className="align-self-start mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
            <hr/>
        </Row>
        
        <Row>
            <hr/>
            <Media>
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
                <img
                width={256}
                height={256}
                className="align-self-start mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
                />
            </Media>
            <hr/>
        </Row>
        
        <Row>
            <hr/>
            <Media>
                <img
                width={256}
                height={256}
                className="align-self-start mr-3"
                src="holder.js/64x64"
                alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
            <hr/>
        </Row>
    </Container>
    
);

export default FeaturesSection;