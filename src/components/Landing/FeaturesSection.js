import React from "react";
import { Row, Container, Media } from "react-bootstrap";

const FeaturesSection = () => (
    <Container>
        <Row>
            <hr/>
            <Media id="section">
                <img
                width={256}
                height={256}
                className="align-self-start mr-3"
                src="Indigo@3x.png"
                alt="Generic placeholder"
                />
                <Media.Body>
                    <h5><del>Don't</del> Can't be evil</h5>
                    <p>
                        <a href="https://blockstack.org/" target="_blank">Blockstack </a> 
                        apps protect your digital rights and are powered by the Stacks blockchain.
                        Blockstack ID provides user-controlled login and storage that enable you to 
                        take back control of your identity and data. 
                    </p>
                    <p>
                        Led by some of the world’s foremost experts on distributed systems, 
                        Blockstack allows users to own their own data that they can take with 
                        them from app to app in the ecosystem, along with their Blockstack ID 
                        that eliminates the need for password-based logins. 
                        
                    </p>
                    <p>
                        The end result is <b>privacy, security, and freedom.</b>
                    </p>
                </Media.Body>
            </Media>
            <hr/>
        </Row>
        
        <Row>
            <hr/>
            <Media>
                <Media.Body>
                    <h5>All your data is secure</h5>
                    <p>
                        All your data is stored <b>encrypted </b> with a decentralized storage architecture.
                    </p>
                    <p>
                        The Blockstack Network stores application data using a storage system called Gaia. 
                        Transactional metadata is stored on the Blockstack blockchain and user application 
                        data is stored in Gaia storage. Storing data off of the blockchain ensures that 
                        Blockstack applications can provide users with high performance and high availability 
                        for data reads and writes without introducing central trust parties.
                    </p>
                </Media.Body>
                <img
                width={256}
                height={256}
                className="align-self-start mr-3"
                src="locked.png"
                alt="Encrypted"
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
                src="tasko-logo.png"
                alt="Tasko"
                />
                <Media.Body>
                    <h5>Only to do</h5>
                    <p>
                        Tasko is <b>just to-do application</b> that's it. It will never be more.
                    </p>
                    <p>
                        Tasko is an open source application and will always remain so. 
                        You can always support. We can do better together.
                        We are at the beginning of the road yet...
                    </p>
                </Media.Body>
            </Media>
            <hr/>
        </Row>
    </Container>
    
);

export default FeaturesSection;