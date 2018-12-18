import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col,Row } from 'react-materialize';
import TatvamInput from '../../baseComponents/tatvamInput';
import TatvamIcon from '../../baseComponents/tatvamIcon';
import './quickPeriodicity.scss';

class QuickPeriodicity extends Component {
    constructor(props) {
        super(props);
    }
   
    __onQuickPeriodicityChange(e: Object, value): boolean {
        alert(value);
    }

    render() {
        return (
            <Fragment>
                <Row className="quickPeriodicity">
                 <Col s={1} className="dateIcon p-0">
                    <TatvamIcon left>date_range</TatvamIcon>
                 </Col>              
                <Col s={11} className="dataDropdown p-0">
                    <TatvamInput type='select' defaultValue='Last6months' onChange={this.__onQuickPeriodicityChange.bind(this)}>
                        <option value='CurrentMonth'>Current Month</option>
                        <option value='Last3months'>Last 3 Months</option>
                        <option value='Last6months'>Last 6 Months</option>
                        <option value='Last13months'>Last 13 Months</option>
                        <option value='custom'>Custom</option>
                    </TatvamInput>
                    <span>Jul'18 - Dec'18</span>
                </Col>    
                </Row>           
            </Fragment>
        );
    }
}


export default withRouter(QuickPeriodicity);
