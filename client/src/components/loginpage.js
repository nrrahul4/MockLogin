import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Redirect } from 'react-router'
import '../App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            responseFeedback: '',
            responseData: {},
            trigger: false,
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.redirect = this.redirect.bind(this)
    }
    emailHandler = (emailevent) => this.setState({ email: emailevent.target.value })
    passwordHandler = (passwordevent) => this.setState({ password: passwordevent.target.value })

    submitHandler = () => {
        let data = {
            "email": this.state.email,
            "password": this.state.password
        }
        var usethis = this
        axios.post('/api/user', data)
            .then(function (response) {
                if (response.data == "sorry") {
                    usethis.setState({ responseFeedback: 'Sorry....username or password incorrect' })
                }
                else {
                    usethis.setState({ responseData: response.data });
                    usethis.setState({ trigger: true});    
                }
            }
            )
    }
    redirect = () => {
       return < Redirect to="/login" />
    }

    render() {
        return (
        <div>
                {this.state.trigger == false ?
                    (<Container>
                        <h2>Sign In</h2>
                        <Form className="form">
                            <Col lg="4">
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        onChange={this.emailHandler}
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="email@email.com"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg="4">
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        onChange={this.passwordHandler}
                                        type="password"
                                        name="password"
                                        id="examplePassword"
                                        placeholder="********"
                                    />
                                </FormGroup>
                            </Col>
                            <Button onClick={this.submitHandler}>Submit</Button>
                            <p style={{ color:"red" }}>{this.state.responseFeedback}</p>
                        </Form>
                    </Container>) : (<Redirect to={{
                        pathname: '/login',
                        state: { refData: this.state.responseData }
                    }}/>)}
               </div> 
    );
}
}

export default Login;