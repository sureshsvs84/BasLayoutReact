import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Col, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './forgotPassword.scss';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username } = this.state;

    }
    render() {
        const { username, submitted } = this.state;        
        return (
            <Fragment>
                <Col xl={8} l={8} m={6} s={12} className="text-center rightBorder tagLine forgotPage">
                    <div>
                        <span>Forgot Your Password ?</span>
                        <p className="pt-2 passInstructionHeading">Please enter your registered Email id. Password reset instruction will be sent you by mail.</p>
                    </div>
                    <form className="pt-2" name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="username">Enter Your Email</label>
                            <Input type='email' name="username" onChange={this.handleChange}><Icon>contact_mail</Icon></Input>
                            {submitted && !username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>
                        <div className="form-group text-right">
                            <a href="/tatvam-web">Back To Login</a>
                        </div>
                        <div className="form-group">
                            <Button waves='light'>Send</Button>
                        </div>

                    </form>
                </Col>
            </Fragment>
        );
    }
}



export default withRouter(ForgotPassword);