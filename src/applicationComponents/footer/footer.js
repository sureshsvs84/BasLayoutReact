import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Footer } from 'react-materialize';
import './footer.scss';

class AppFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.fetchSystemConfiguration();
    }
    render() {
        const { brandURL, brandLogo, brandName, version, buildNo, lastReleaseDate, contactEmailId, companyURL } = this.props;
        return (
            <footer className="page-footer">
                <div className="container-fluid">
                    <Row>
                        <Col xl={3} l={3} m={6} s={12} className='rightBorder footerSeparator'>
                            <a href={brandURL} className="brand-logo" target='_blank'><img className='tatvamLogo' src={brandLogo} alt={brandName} /></a>
                            <br />Version {version} Build {buildNo}
                            <br />Latest Release: {lastReleaseDate}
                        </Col>
                        <Col xl={3} l={3} m={6} s={12} className='rightBorder footerSeparator'>
                            About TATVAM Analytics
                            <br /><a href={contactEmailId}>Email Us</a>
                        </Col>
                        <Col xl={3} l={3} m={6} s={12} className='rightBorder footerSeparator'>Disclaimer : Net Promoter, Net Promoter System, Net Promoter Score, and NPS are registered trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.</Col>
                        <Col xl={3} l={3} m={6} s={12} className='footerSeparator'>
                            Help Us Improve TATVAM
                            <br /><a href={contactEmailId} title="Give Feedback">Give Feedback</a>
                        </Col>
                    </Row>
                    <Row className="footer-copyright">
                        <div className="container black-text text-center">© 2018 Powered by <Link to={companyURL} target="_blank">NetServ Applications</Link>, All rights reserved.</div>
                    </Row>
                </div>
            </footer>
        );
    }
}

export default AppFooter; 