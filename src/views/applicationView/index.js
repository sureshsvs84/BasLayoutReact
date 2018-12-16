import { connect } from 'react-redux';
import ApplicationView from './applicationView';
import { fetchUser, fetchCustomer, fetchAttractions, fetchNotifications, fetchPeriodicity, fetchDimensions, fetchSystemConfiguration, fetchReportData, fetchUserCustomerPermissions   } from '../../actions';

function mapStateToProps(state) {   
    return {};
}

export default connect(mapStateToProps, { fetchUser, fetchCustomer, fetchAttractions, fetchNotifications , fetchPeriodicity, fetchDimensions, fetchSystemConfiguration, fetchReportData, fetchUserCustomerPermissions })(ApplicationView);
