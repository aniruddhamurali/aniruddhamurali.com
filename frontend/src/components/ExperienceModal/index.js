import React, { Component } from 'react';
import {Modal, Button, Carousel} from 'react-bootstrap';

import "./ExperienceModal.css"

class ExperienceModal extends Component {
    constructor(props){
		super(props);
		this.state = {};
	}

    handleClose = () => {
        this.props.toggleModal();
        //$(".hovercard").addClass("card").removeClass("hovercard");
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={true}
                dialogClassName="modal-50w"
            >
                <Carousel>
                    {this.props.carousel.map((item, index) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item}
                                alt="First slide"
                            />
                      </Carousel.Item>
                    ))}
                </Carousel>

                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.about}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ExperienceModal;