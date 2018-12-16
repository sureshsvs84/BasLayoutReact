import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

class menuItem extends Component {

    constructListItem = (item) => {
        if (item.subMenus.length > 0) {
            return (
                <CollapsibleItem header={item.menuTitle} icon={item.menuIcon}>
                    <Collapsible accordion defaultActiveKey={1}>
                        {
                            // test(menuDetails.subMenus)
                            item.subMenus.map(this.constructListItem)
                        }
                    </Collapsible>
                </CollapsibleItem>
            )
        } else {
            return (<CollapsibleItem header={item.menuTitle} icon={item.menuIcon}></CollapsibleItem>);
        }
    }

    render() {
        const menuDetails = this.props.menuDetails;
        return (
            this.constructListItem(menuDetails)
        )
    }
}

export default menuItem;