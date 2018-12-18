import React, { Component, Fragment } from 'react';
import Header from '../../applicationComponents/header';
import SideMenu from '../../applicationComponents/sideMenu';

import QuickPeriodicity from '../../applicationComponents/quickPeriodicity';
import DimensionFilter from '../../applicationComponents/dimensionFilter';
import ExportPDF from '../../applicationComponents/exportPDF';
import Footer from '../../applicationComponents/footer';
import TatvamCol from '../../baseComponents/tatvamCol';
import './applicationLayout.scss';
import { CardPanel, Col, Row } from 'react-materialize';

class ApplicationView extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
    }

    render() {
        return (
            <Fragment>
                <section className="mainPage">
                    <Header />
                    <SideMenu />
                    <section className='pageContainer'>

                        <CardPanel className="subHeader white fixed black-text mt-0">
                            <Row>
                                <Col s={2} className='p-0'><QuickPeriodicity /></Col>
                                <Col s={3} className='mt-3'> <DimensionFilter /></Col>
                                <Col s={7} className='mt-2 right-align pr-0'><ExportPDF /></Col>

                            </Row>
                        </CardPanel>
                        <section className="contentArea">
                            <Row>
                                <Col s={12} className="pl-0 pr-0">
                                    <CardPanel className="white black-text">
                                        <p>Card1</p>
                                    </CardPanel>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={4} className='pl-0'>
                                    <CardPanel className="white black-text">
                                        <p>Card1</p>
                                    </CardPanel>
                                </Col>
                                <Col s={4}>
                                    <CardPanel className="white black-text">
                                        <p>Card2</p>
                                    </CardPanel>
                                </Col>
                                <Col s={4} className="pr-0">
                                    <CardPanel className="white black-text">
                                        <p>Card3</p>
                                    </CardPanel>
                                </Col>
                            </Row>



                        </section>



                    </section>
                    <Footer />
                </section>

            </Fragment>
        );
    }
}

export default ApplicationView;