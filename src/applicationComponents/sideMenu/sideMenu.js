import React,{ Component,Fragment } from 'react';
import MaterializeComponent from 'materialize-css';
import { NavLink } from 'react-router-dom';
import { sideMenu  } from './sideMenuData.js';
import collapsedLogo from '../../../public/assets/images/collapsedLogo.png';
import Logo from '../../../public/assets/images/tatvamLogo.svg';

class SideMenu extends Component{
    componentDidMount(){
            // const sidnav = document.querySelectorAll('.sidenav');
            // const sidnavInstances = MaterializeComponent.Sidenav.init(sidnav);
            // const collapse = document.querySelectorAll('.collapsible');
            // const collapseInstances = MaterializeComponent.Collapsible.init(collapse);    
            // const tooltips = document.querySelectorAll('.tooltipped');
            // const tooltipInstances = MaterializeComponent.Tooltip.init(tooltips);   
          // Subscribe to 'attarctionList' store data modifications
    }
    render(){    
          const sideMenus = sideMenu;
        return(
            <Fragment>
                    {/* <ul id="slide-out" className="sidenav collapsible">
                    <a className="btn-floating sidenav-close sideMenuCloseBtn waves-effect waves-light"><i className="zmdi zmdi-close"></i></a>
                    <NavLink to={'/dashboard'} className="expandedLogo">
                        <img src={Logo} width='250' alt="Intertek Logo" />
                    </NavLink>
                    <li className="sideNavContent">                                              
                        {
                            sideMenus.map((iteratedMenu,i)=>{
                                return (
                                    <div className="collapsible-header" key={i}> 
                                        <NavLink to={'/'+iteratedMenu.menuTitle} className='sidenav-close menuText'>
                                            <img src={iteratedMenu.menuIcon} />
                                            {iteratedMenu.pageTitle}
                                        </NavLink>
                                    </div>
                                );
                            })
                        }
                        
                    </li>                           
                            
                    </ul> */}
                    <div className='sideMenuCollapsed hide-on-med-and-down'>                    
                        <a href="#" data-target="slide-out" className="ml-1 menuIcon sidenav-trigger sideMenuCloseBtn waves-effect waves-light"><i className="zmdi zmdi-menu"></i></a>
                        <NavLink to={'/dashboard'} className='collapsedLogo p-0 tooltipped' data-position="right" data-tooltip={"Home"}>
                            <img src={collapsedLogo} width="50" alt="Intertek Logo"/>
                        </NavLink>
                        {
                            sideMenus.map((iteratedMenu,i)=>{
                                return (                                    
                                        <NavLink to={'/'+iteratedMenu.menuTitle} data-position="right" data-tooltip={iteratedMenu.toolTipText} key={i} className='tooltipped greyBorder' activeClassName='activeMenu'>
                                            <img src={iteratedMenu.menuIcon} />
                                        </NavLink> 
                                    );
                            })
                        }
                    </div>
                    
            </Fragment>
        );
    }
}

export default SideMenu;