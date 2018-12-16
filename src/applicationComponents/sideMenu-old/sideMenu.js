import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SideNav, Button, SideNavItem, Icon, Collapsible } from 'react-materialize';
import './sideMenu.scss';
import MenuItem from './menuItem';

class SideMenu extends Component {
    constructor(props) {
        super(props);
    }


    async componentWillMount() {
      //  await this.props.fetchUserCustomerPermissions();        
    }

    render() {
        const { menus } = this.props;
        debugger;
        const tempMenu = [
            {
                "menuId": 1,
                "menuTitle": "Home Dashboard",
                "menuIcon": "home",
                "toolTipText": "Home Dashboard",
                "subMenus": [],
                "pageData": "string",
                "pageID": 1,
                "pageTitle": "Home Dashboard",
                "pageComponents": []
            },
            {
                "menuId": 2,
                "menuTitle": "Reviews",
                "menuIcon": "comment",
                "toolTipText": "Reviews",
                "subMenus": [
                    {
                        "menuId": 101,
                        "menuTitle": "Most Recent Reviews",
                        "menuIcon": "",
                        "toolTipText": "Most Recent Reviews",
                        "subMenus": [],
                        "pageData": "string",
                        "pageID": 1,
                        "pageTitle": "Most Recent Reviews",
                        "pageComponents": []
                    },
                    {
                        "menuId": 1019,
                        "menuTitle": "All Reviews",
                        "menuIcon": "",
                        "toolTipText": "All Reviews",
                        "subMenus": [],
                        "pageData": "string",
                        "pageID": 1,
                        "pageTitle": "All Reviews",
                        "pageComponents": []
                    },
                ],
                "pageData": "string",
                "pageID": 2,
                "pageTitle": "Reviews",
                "pageComponents": []
            },
            {
                "menuId": 3,
                "menuTitle": "Trends",
                "menuIcon": "date_range",
                "toolTipText": "Trends",
                "subMenus": [
                    {
                        "menuId": 101,
                        "menuTitle": "Most Recent Reviews",
                        "menuIcon": "",
                        "toolTipText": "Most Recent Reviews",
                        "subMenus": [
                            {
                                "menuId": 1019,
                                "menuTitle": "One",
                                "menuIcon": "",
                                "toolTipText": "All Reviews",
                                "subMenus": [],
                                "pageData": "string",
                                "pageID": 1,
                                "pageTitle": "All Reviews",
                                "pageComponents": []
                            }
                        ],
                        "pageData": "string",
                        "pageID": 1,
                        "pageTitle": "Most Recent Reviews",
                        "pageComponents": []
                    },
                    {
                        "menuId": 1019,
                        "menuTitle": "All Reviews",
                        "menuIcon": "",
                        "toolTipText": "All Reviews",
                        "subMenus": [],
                        "pageData": "string",
                        "pageID": 1,
                        "pageTitle": "All Reviews",
                        "pageComponents": []
                    },
                ],
                "pageData": "string",
                "pageID": 3,
                "pageTitle": "Trends",
                "pageComponents": []
            },
            {
                "menuId": 4,
                "menuTitle": "Classifiers",
                "menuIcon": "label",
                "toolTipText": "Classifiers",
                "subMenus": [],
                "pageData": "string",
                "pageID": 4,
                "pageTitle": "Classifiers",
                "pageComponents": []
            },
            {
                "menuId": 5,
                "menuTitle": "Staff",
                "menuIcon": "person",
                "toolTipText": "Staff",
                "subMenus": [],
                "pageData": "string",
                "pageID": 5,
                "pageTitle": "Staff",
                "pageComponents": []
            },
            {
                "menuId": 6,
                "menuTitle": "Survey",
                "menuIcon": "forum",
                "toolTipText": "Survey",
                "subMenus": [],
                "pageData": "string",
                "pageID": 6,
                "pageTitle": "Survey",
                "pageComponents": []
            },
            {
                "menuId": 7,
                "menuTitle": "Email Reports",
                "menuIcon": "email",
                "toolTipText": "Email Reports",
                "subMenus": [],
                "pageData": "string",
                "pageID": 7,
                "pageTitle": "Email Reports",
                "pageComponents": []
            },
            {
                "menuId": 8,
                "menuTitle": "Admin",
                "menuIcon": "person_add",
                "toolTipText": "Admin",
                "subMenus": [],
                "pageData": "string",
                "pageID": 8,
                "pageTitle": "Admin",
                "pageComponents": []
            }
        ]
        let myList;
        if (tempMenu.length > 0) {
            myList = tempMenu.map((menu, index) => (
                <MenuItem menuDetails={menu}></MenuItem>
            ));
        }
        return (
            <Fragment>
                <SideNav trigger={<Button><Icon left>menu</Icon></Button>} options={{ closeOnClick: false }} className='' >
                    <Collapsible accordion defaultActiveKey={1}>
                        {myList}
                    </Collapsible>
                </SideNav>
            </Fragment>
        );
    }
}

SideMenu.propTypes = {
    history: PropTypes.object
};
SideMenu.defaultProps = {
    history: {}
};

export default withRouter(SideMenu);