import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import "./Footer.css"

class Footer extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    render() {
        return (
            <footer>
                <Container>
                    <Row className="footerRow">
                        <Col className="col">
                            <h4>Location</h4>
                            <small>Westport, CT</small>
                        </Col>
                        <Col className="col">
                            <h4>Phone</h4>
                            <small>203-451-8797</small>
                        </Col>
                        <Col className="col">
                            <h4>Web</h4>
                            <small>aniruddhamurali.com</small>
                        </Col>
                        <Col className="col">
                            <h4>Email</h4>
                            <small>aniruddha.murali@gmail.com</small>
                        </Col>
                    </Row>
                </Container>
                <div className="d-flex flex-wrap justify-content-center icons">
                    <a href="https://www.instagram.com/aniruddhamurali/" target="_blank"><i class="fab fa-instagram-square fa-3x"></i></a>
                    <a href="https://twitter.com/AniruddhaMurali" target="_blank"><i class="fab fa-twitter-square fa-3x" ></i></a>
                    <a href="https://www.linkedin.com/in/aniruddhamurali/" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
                    <a href="mailto:aniruddha.murali@gmail.com?"><i class="fas fa-envelope fa-3x"></i></a>
                </div>
            </footer>
        )
    }
}

export default Footer;