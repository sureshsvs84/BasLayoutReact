import React, { Component, Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { NavLink } from 'react-router-dom';
import { sideMenu } from './sideMenuData.js';
import collapsedLogo from '../../../public/assets/images/tatvam-logo.svg';
import Logo from '../../../public/assets/images/tatvamLogo.svg';

class AppSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuPanel:true
        }
    }

    MenuClick = (menuAction) => {
        this.props.actions[menuAction.menuFun]();
    }

    toggleMenuBtn = () =>{
         this.setState({isMenuPanel:!this.state.isMenuPanel})
    }
    render() {
        debugger;
        const sideMenus = sideMenu;
        return (
            <Fragment>
                <div className={ this.state.isMenuPanel ? 'sideMenuCollapsed' : 'sideMenuUnCollapsed'}>
                    <a onClick={this.toggleMenuBtn}> {this.state.isMenuPanel ? <i class="material-icons left">menu</i> : <i class="material-icons right">close</i>}</a>
                       <ul className="sideNav-vertical">
                        {
                            sideMenus.map((iteratedMenu, i) => {
                                return (
                                    <li key={i}>
                                        {iteratedMenu.subMenu.length > 0 ? <a className="greyBorder">  <img alt={iteratedMenu.viewUrl} src={iteratedMenu.menuIcon} /> </a> :
                                            <NavLink to={'/' + iteratedMenu.viewUrl} data-position="right" data-tooltip={iteratedMenu.subMenu.length === 0 ? iteratedMenu.menuText : null} key={i} className={iteratedMenu.subMenu.length === 0 ? 'tooltipped greyBorder' : 'greyBorder'} activeClassName='activeMenu'>
                                                <img alt={iteratedMenu.viewUrl} src={iteratedMenu.menuIcon} />
                                            </NavLink>
                                        }
                                        {iteratedMenu.subMenu.length > 0 && <ul className="sub-menu">
                                            {iteratedMenu.subMenu.length > 0 && iteratedMenu.subMenu.map((subMenu, j) => {
                                                return (

                                                    <li key={j}>
                                                        <NavLink to={'/' + subMenu.viewUrl} key={i} className='greyBorder'>
                                                            {subMenu.menuText}
                                                        </NavLink>
                                                    </li>

                                                );

                                            })
                                            }
                                        </ul>}

                                    </li>

                                );
                            })
                        }
                    </ul>
                </div>
                {!this.state.isMenuPanel && <div className="overlay"></div> }

            </Fragment>
        );
    }
}

export default AppSideMenu;