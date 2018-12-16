import config from 'configuration';
import TatvamLogo from '../../public/assets/images/tatvamLogo.svg';
export const brand = {
    URL : 'http://www.tatvaminsights.com/',
    NAME : 'Tatvam 3.0',
    LOGO :  TatvamLogo,
    COMPANY_URL : 'https://www.netserv-appl.com/',
    CONTACT_PERSON_EMAIL_ID : 'sales@tatvamanalytics.com'
}

export const appRoutes = {
    ELEMENT_TO_BOOTSTRAP: 'root',
    baseurl: '/' + config.client.endpoint,
    dashboard: '/' + config.client.endpoint + '/dashboard',
    login: '/' + config.client.endpoint + '/login',
    forgotPassword: '/' + config.client.endpoint + '/forgotpassword',
    resetPassword: '/' + config.client.endpoint + '/resetpassword',
    login: '/' + config.client.endpoint + '/login',
    auth: {
        USER_NAME: 'user_name',
        EXPIRES_AT: 'expires_at'
    },
};

export const accountCode = 1;

export function RequestPayload(applicationName, requestType, inputData = {}) {
    this.requestType = requestType;
    this.data = inputData;
    this.applicationName = applicationName;
}

export const httpMethodType = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

export const apiConfig = {
    AUTHENTICATE_USER: 'AUTHENTICATE_USER',
    READ_USER: 'READ_USER',
    READ_USER_CUSTOMER_ROLE: 'READ_USER_CUSTOMER_ROLE',
    READ_USERNOTIFICATION: 'READ_USERNOTIFICATION',
    READ_SYSTEM_CONFIGURATION: 'READ_SYSTEM_CONFIGURATION',
    READ_PERMISSION: 'READ_PERMISSION'
}