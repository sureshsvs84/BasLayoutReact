import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Navbar, NavItem, Icon, Dropdown, Button,Col,Row } from 'react-materialize';
import './header.scss';
import Attraction from '../../applicationComponents/attraction';
import UserProfile from '../../applicationComponents/userProfile';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProfilePanelOpen:false
        }
    }

    async componentWillMount() {
        await this.props.fetchUser();        
    }

    async handleLogoutClick(e) {
        await authService.logout();
        this.props.history.push(authService.logoutUrl());
    }
    toggleProfileBtn = () =>{
        debugger;
        this.setState({isProfilePanelOpen:!this.state.isProfilePanelOpen})
   }

    render() {
        const { brandURL, brandName, brandLogo, userDisplayName } = this.props;        
        var Img = <img src={brandLogo} alt={brandName} />
        return (
            <Fragment>
                <header className="header">
                   <Row>
                    <Col s={12} className="pl-0">
                       <Col s={4}>{Img}</Col>
                       <Col s={8} className='align-right pr-0'>  
                                <Col  className="mt-3 right pl-0 pr-0">
                                <a onClick={this.toggleProfileBtn}> {userDisplayName} </a>
                                <UserProfile isPanelOpen={this.state.isProfilePanelOpen} toggleClose={this.toggleProfileBtn}/>
                                 <Dropdown trigger={
                                        <a className="right"><Icon left>more_vert</Icon></a>
                                                }>
                                                <NavItem onClick={(event) => this.handleLogoutClick(this.props)}>logout</NavItem>
                                                <NavItem>two</NavItem>
                                                <NavItem divider />
                                                <NavItem>three</NavItem>
                                    </Dropdown>
                                
                                   
                            {/* //  <NavItem onClick={(event) => this.handleLogoutClick(this.props)}><Icon>logout</Icon></NavItem> */}
                        </Col>
                        <Col className="mt-3 right notification p-0">
                                <Icon>notifications</Icon>
                                <span className="notifiCount">2</span>
                            </Col>
                        <Col s={4} className=" mt-2 right attractionFrame pr-0">
                                <Attraction />
                            </Col>
                        </Col>

                        
                    </Col>
                    </Row>
                </header>
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