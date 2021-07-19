import React from 'react';
import Layout from '../../components/layout';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Input from '../../components/UI/Input';

function Signin() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{marginTop: '50px'}}>
                        <Col md={{span: 6, offset: 3}}>
                            <Form>
                                <Input
                                    Label = 'Email address'
                                    controlId = 'formBasicEmail'
                                    type = 'email'
                                    placeholder = 'Enter email'
                                    value = ''
                                    onChange = {() => {}}
                                />
                                <Input
                                    Label = 'Password'
                                    controlId = 'formBasicPassword'
                                    type = 'password'
                                    placeholder = 'Password'
                                    value = ''
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

export default Signin;
