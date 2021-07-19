import React from 'react'
import Layout from '../../components/layout'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Input from '../../components/UI/Input';

function Signup() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            controlId='formBasicFirstName'
                                            Label='First Name'
                                            type='text'
                                            value=''
                                            placeholder='First Name'
                                            onChange = {() => {}}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            controlId='formBasicLastName'
                                            Label='Last Name'
                                            type='text'
                                            value=''
                                            placeholder='Last Name'
                                            onChange = {() => {}}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    controlId='formBasicEmail'
                                    Label='Email address'
                                    type='email'
                                    value=''
                                    placeholder='Enter email'
                                    onChange = {() => {}}
                                />
                                <Input
                                    controlId='formBasicPassword'
                                    Label='Password'
                                    type='password'
                                    value=''
                                    placeholder='Password'
                                    onChange = {() => {}}
                                />
                                
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}

export default Signup
