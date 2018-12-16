import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Col, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './resetPassword.scss';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            username: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            captcha: '',
            submitted: false,
            isVerified: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
                this.verifyCallback = this.verifyCallback.bind(this);
        this.passCheck = this.passCheck.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    verifyCallback(response) {
        if (response) {
            this.setState({
                isVerified: true
            })
        }
    }
    passCheck() {
            if (document.getElementById('password1').value ==
                document.getElementById('confirm_password').value) {
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').innerHTML = 'matching';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'not matching';
        }
      }
    async handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, oldPassword, newPassword, confirmPassword, captcha, userEmail } = this.state;

        if (this.state.isVerified) {
            alert("verified successfully")
        }
        else {
            alert("please verify that you are human");
        }
    }
    render() {
        const { username, oldPassword, newPassword, confirmPassword, captcha, submitted, userEmail } = this.state;

        return (
            <Fragment>
                <Col xl={8} l={8} m={6} s={12} className="text-center rightBorder tagLine resetPage">
                    <div className="">
                        <span>Reset Password</span>
                        <p className="pt-2 passInstruction">Welcome,Please update your password during the first time log in.</p>
                    </div>
                    <form className="pt-2" name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="">User Name</label>
                            <Input type='text' name="username" onChange={this.handleChange}><Icon>account_circle</Icon></Input>
                            {submitted && !username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !userEmail ? ' has-error' : '')}>
                            <label htmlFor="">Enter Your Email</label>
                            <Input type='email' name="userEmail" onChange={this.handleChange}><Icon>contact_mail</Icon></Input>
                            {submitted && !userEmail &&
                                <div className="help-block">Email is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !oldPassword ? ' has-error' : '')}>
                            <label htmlFor="">Enter Old Password</label>
                            <Input type='password' name="oldPassword" onChange={this.handleChange}><Icon>lock</Icon></Input>
                            {submitted && !oldPassword &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !newPassword ? ' has-error' : '')}>
                            <label htmlFor="">Enter New Password</label>
                            <Input type='password' name="newPassword" onKeyUp={this.passCheck} id="password1" onChange={this.handleChange}><Icon>lock</Icon></Input>
                            {submitted && !newPassword &&
                                <div className="help-block">New Password is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !confirmPassword ? ' has-error' : '')}>
                            <label htmlFor="">Confirm Password</label><span id='message'></span>
                            <Input type='password' name="confirmPassword" onKeyUp={this.passCheck} id="confirm_password" onChange={this.handleChange}><Icon>lock</Icon></Input>
                            {submitted && !confirmPassword &&
                                <div className="help-block">Confirm Password is required</div>
                            }
                        </div>

                        <div className="form-group text-right">
                            <a href="/tatvam-web">Back To Login</a>
                        </div>                       
                        <div className="form-group">
                            <Button waves='light'>Submit</Button>
                        </div>

                    </form>
                </Col>
            </Fragment>
        );
    }
}



export default withRouter(ResetPassword);