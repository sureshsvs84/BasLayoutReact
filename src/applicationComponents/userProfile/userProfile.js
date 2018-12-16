import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SideNav, Button, Collapsible, CollapsibleItem, SideNavItem, Input, Row } from 'react-materialize';
import './userProfile.scss';
import profileBg from '../../../public/assets/images/office.jpg';
import profile from '../../../public/assets/images/yuna.jpg'
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.updatedData = {};
    }

    handleChange = (e) => {
        this.updatedData[e.target.name] = e.target.value;
    }
    handleSubmit = (e) => {
        console.log("all filled data", this.updatedData);
    }

    render() {
        const { userDetails } = this.props;
        return (
            <Fragment>
                <SideNav
                    trigger={<span className='rightMenuTrigger'>.</span>}
                    options={{ closeOnClick: true, edge: 'right' }}
                >
                    {/* <div className="userDetail">
                        <div>{userDetails.displayName}</div>
                        <div>{userDetails.userId}</div>
                        <div>983547625364</div>
                    </div> */}
                    <SideNavItem userView
                        user={{
                            background: profile,
                            image: profile,
                            name: 'John Doe',
                            email: 'jdandturk@gmail.com'
                        }}
                    />


                    <Collapsible accordion defaultActiveKey={0} className="customIputs">
                        <CollapsibleItem header='Profile'>
                            <form onSubmit={this.handleSubmit} className="formBlock">
                                <Row>
                                    <Input placeholder="Placeholder" s={12} label="First Name" onChange={this.handleChange} />
                                    <Input s={12} label="Last Name" onChange={this.handleChange} />

                                    <Input type="password" label="password" s={12} onChange={this.handleChange} />
                                    <Input type="email" label="Email" s={12} onChange={this.handleChange} />
                                    <Input type="submit" value="save" />
                                </Row>
                                {/* <label> First Name:</label>
                                <input type="text" name="firstName" onChange={this.handleChange} />
                                <label> Last Name:</label>
                                <input type="text" name="lastName" onChange={this.handleChange} />
                                <label> Display Name:</label>
                                <input type="text" name="displayName" onChange={this.handleChange} />
                                <label> Password:</label>
                                <input type="password" name="profilePassword" onChange={this.handleChange} />
                                <label> Email:</label>
                                <input type="email" name="profileEmail" onChange={this.handleChange} />
                                <div className="textRight saveButton">
                                    <input type="submit" value="save" />
                                </div> */}
                            </form>
                        </CollapsibleItem>
                        <CollapsibleItem header='ChangePassword'>
                            <form className="formBlock">
                                <label>Current Password:</label>
                                <input type="password" label="Current Password" />
                                <label>New Password:</label>
                                <input type="password" label="New Password" />
                                <label>Re-Type Password:</label>
                                <input type="password" label="Re-Type Password" />
                                <div className="textRight saveButton">
                                    <input type="submit" value="save" />
                                </div>
                            </form>
                        </CollapsibleItem>
                    </Collapsible>

                </SideNav>
            </Fragment>
        );
    }
}



export default withRouter(UserProfile);