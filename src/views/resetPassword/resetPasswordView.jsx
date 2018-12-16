import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-materialize';
import ResetPassword from '../../applicationComponents/resetPassword';
import Footer from '../../applicationComponents/footer';

class ResetPasswordView extends Component {
    render() {
        return (
            <Fragment>            
                <div className=''>
                    <Row className="loginContainer">
                        <Col xl={8} l={8} m={6} s={12} className="text-center rightBorder tagLine">
                            <div className="row">
                                <img className="align-middle img-fluid loginImage" />
                                <p className="tatvamSubTagLine">Creating visible business impact by harnessing the power of big data and analytics</p>
                            </div>
                        </Col>
                        <Col xl={4} l={4} m={6} s={12}  className="mar-top-20">
                            <ResetPassword />
                        </Col>
                    </Row>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default ResetPasswordView;