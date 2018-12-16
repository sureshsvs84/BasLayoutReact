import Api from 'baseServiceApi';
import { RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetSystemConfigSuccess: (payload) => {
        return {
            type: 'SYSTEM_CONFIGURATION_SUCCESS',
            payload: payload
        };
    },
    GetSystemConfigError: (payload) => {
        return {
            type: 'SYSTEM_CONFIGURATION_ERROR',
            payload: payload
        };
    }
};

export const fetchSystemConfiguration = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(actions.GetSystemConfigSuccess(
        { "Build": "5000", "BuildDate": "13-Nov-2018", "LastUpdate": "13-Nov-2018", "PasswordValidity": "1", "Version": "2.5" }
    ));
};

