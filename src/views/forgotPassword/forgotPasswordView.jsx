import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-materialize';
import ForgotPassword from '../../applicationComponents/forgotPassword';
import Footer from '../../applicationComponents/footer';
import LoginImg from '../../../public/assets/images/comments.svg';

class ForgotPasswordView extends Component {
    render() {
        return (
            <Fragment>            
               
            <Row className="forgotpassword pt-3">
                <Col s={12} m={8} l={8} xl={6} className="offset-xl1">
                    <Row className="align-center br-1">
                        <img className='loginImage' src={LoginImg} />
                        <p className="tatvamSubTagLine">Creating visible business impact by harnessing the power of big data and analytics</p>
                    </Row>
                </Col>
                <Col s={12} m={4}  l={4}  xl={4} className="ml-5 mt-5" >
                    <ForgotPassword />
                </Col>

                   <Footer />
            </Row>

         
        
    </Fragment>
        );
    }
}

export default ForgotPasswordView;