import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Navbar, NavItem, Icon, Dropdown, Button,Col,Row } from 'react-materialize';
import './header.scss';
import Attraction from '../../applicationComponents/attraction';

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.fetchUser();        
    }

    async handleLogoutClick(e) {
        await authService.logout();
        this.props.history.push(authService.logoutUrl());
    }

    render() {
        const { brandURL, brandName, brandLogo, userDisplayName } = this.props;        
        var Img = <img src={brandLogo} alt={brandName} />
        return (
            <Fragment>
                <Row className="header">
                    <Col s={12} className="pl-0">
                       <Col s={4}>{Img}</Col>
                       <Col s={8} className='align-right'>  
                                <Col  className="mt-3 right">
                                   <Dropdown trigger={
                                        <a> <Icon left>person</Icon> {userDisplayName}</a>
                                                }>
                                                <NavItem onClick={(event) => this.handleLogoutClick(this.props)}>logout</NavItem>
                                                <NavItem>two</NavItem>
                                                <NavItem divider />
                                                <NavItem>three</NavItem>
                                    </Dropdown>
                            {/* //  <NavItem onClick={(event) => this.handleLogoutClick(this.props)}><Icon>logout</Icon></NavItem> */}
                        </Col>
                        <Col s={1} className="mt-3 right">
                                <Icon>notifications</Icon>
                            </Col>
                        <Col s={4} className=" mt-2 right attractionFrame">
                                <Attraction />
                            </Col>
                        </Col>

                        
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

AppHeader.propTypes = {
    history: PropTypes.object
};
AppHeader.defaultProps = {
    history: {}
};

export default withRouter(AppHeader);