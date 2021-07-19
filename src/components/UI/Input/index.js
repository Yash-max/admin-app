import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

function Input(props) {
    return (
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.Label}</Form.Label>
            <Form.Control 
                type={props.type}
                value={props.value}
                onChange={props.onChange} 
                placeholder={props.placeholder} 
            />
            <Form.Text className = 'text-muted'>
                {props.erroMessage}
            </Form.Text>
        </Form.Group>
    )
}

export default Input;
