import Api from 'baseServiceApi';
import { accountCode, RequestPayload, apiConfig, appConstants as constants } from 'appConstants';

const actions = {
    GetCustomerSuccess: (payload) => {
        return {
            type: 'CUSTOMER_SUCCESS',
            payload: payload
        };
    },
    GetCustomerError: (payload) => {
        return {
            type: 'CUSTOMER_ERROR',
            payload: payload
        };
    },
    GetAttractionsSuccess: (payload) => {
        return {
            type: 'ATTRACTION_SUCCESS',
            payload: payload
        };
    },
    GetAttractionsError: (payload) => {
        return {
            type: 'ATTRACTION_ERROR',
            payload: payload
        };
    }
};

export const fetchAttractions = () => async (dispatch, getState) => {
    const state = getState();

    dispatch(actions.GetAttractionsSuccess({
        "id": "10003", "name": "Legoland Florida Resort", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }],
        "attractions": [
            {
                "id": "10003", "name": "Legoland Florida Resort",
                "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }]
            }, { "id": "10006", "name": "Dollywoods DreamMore Resort", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "1002", "name": "Georgia Aquarium", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "1009", "name": "Shedd Aquarium", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "1017", "name": "The Florida Aquarium", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "1085", "name": "Marineland Dolphin Adventures", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "3005", "name": "Colorado Mesa University", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8001", "name": "Jacksonville Zoo", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8055", "name": "Greensboro Science Center", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8063", "name": "The Field Museum of Natural History", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8240", "name": "Dollywood Theme Park", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8244", "name": "Dollywoods Splash Country", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8250", "name": "Denver Museum Of Nature And Science", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8261", "name": "National Basketball Association", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }, { "id": "8265", "name": "NBA Survey", "roles": [{ "_id": "5c0f4ea23001bc17a030a920", "account_code": 1, "role_name": "Admin", "role_description": "Customer Admin" }] }]
    }));
};
