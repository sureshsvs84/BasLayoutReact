import { combineReducers } from 'redux';
import { loadingBarReducer } from '../applicationComponents/loader/loadingBarReducer';
import auth from './authReducer';
import user from './userReducer';
import customer from './customerReducer';
import notification from './notificationReducer';
import userCustomerPermission from './userCustomerPermissionReducer';
import systemConfiguration from './systemConfigurationReducer';

export default combineReducers({   
    auth,
    user,
    customer,
    notification,
    userCustomerPermission,
    systemConfiguration,
    loadingBar: loadingBarReducer,
});
