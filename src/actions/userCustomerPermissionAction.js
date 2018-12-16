import Api from 'baseServiceApi';
import { accountCode, RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetUserCustomerPermissionSuccess: (payload) => {
        return {
            type: 'USER_PERMISSION_SUCCESS',
            payload: payload
        };
    },
    GetUserCustomerPermissionError: (payload) => {
        return {
            type: 'USER_PERMISSION_ERROR',
            payload: payload
        };
    }
};

function popChild(param, reports) {
    reports.forEach(element => {
        if (element.reports.parent_report_id === param.parent_report_id) {
            param.subMenus.push({
                menuId: element.reports.report_id,
                menuTitle: element.reports.report_name,
                menuIcon: element.reports.report_icon,
                toolTipText: element.reports.report_name,
                subMenus: []
            });
            element.subMenus = [];
            popChild(element, reports);
        }
    });
};

export const fetchUserCustomerPermissions = () => async (dispatch, getState) => {
    const state = getState();    
    // Check the store for menus if it's not empty then return the store data to the caller.
    if (state.tatvamStore.userCustomerPermission.menus.length > 1) {
        return dispatch(actions.GetUserCustomerPermissionSuccess(state.tatvamStore.userCustomerPermission.menus));
    }
    // Else call the API to get the menus list by passing the below details    
    //	Role Name (Get directly accessing the customer store values) 
    let role_names = [];
    state.tatvamStore.customer.roles.forEach(role => {
        role_names.push(role.role_name)
    })
    const payload = [{ "RoleName": role_names }];
    const requestPayload = new RequestPayload('', apiConfig.READ_PERMISSION, payload);
    return Api.processApiCall(requestPayload).then((result) => {
        if (result.code === 200) {
            let menusList = [];
            let page_components = [];
            result.data.forEach(param => {
                if (param.reports.parent_report_id === 0) {
                    let obj = new Object();
                    obj.menuId = param.reports.report_id;
                    obj.menuTitle = param.reports.report_name;
                    obj.menuIcon = param.reports.report_icon;
                    obj.toolTipText = "";
                    obj.parent_report_id = param.reports.parent_report_id;
                    obj.pageData = "";
                    obj.pageID = 0;
                    obj.pageTitle = "";

                    let pageObj = new Object();
                    pageObj.ComponentId = 0;
                    pageObj.RowNumber = 0;
                    pageObj.ColumnNumber = 0;
                    pageObj.ComponentClass = "";
                    pageObj.Title = "";
                    pageObj.Type = "";
                    pageObj.MinWidth = "";
                    pageObj.MaxWidth = "";
                    pageObj.MinHeight = "";
                    pageObj.MaxHeight = "";


                    obj.pageComponents = [];
                    obj.pageComponents.push(pageObj);
                    menusList.push(obj)
                    // param.sub = [];
                    obj.subMenus = [];
                    popChild(obj, result.data);
                } else {
                    page_components.push(param.reports);
                }
            });                       
            dispatch(actions.GetUserCustomerPermissionSuccess(menusList));
        }
        else {
            dispatch(actions.GetUserCustomerPermissionError({ message: result.messages }));
        }
    }).catch(error => {
        dispatch(actions.GetUserCustomerPermissionError({ message: error.messages }));
    });
    // 	Check store for reportId, if not empty then return the store data to the caller.
    //	Else call the API to get the ChartData by using the Request Format
    //	Populate the returned value to the store with reportId  
};

