import { connect } from 'react-redux';
import AppFooter from './footer';
import { brand } from 'appConstants';
import { fetchSystemConfiguration } from '../../actions';

const mapStateToProps = (state) => {    
    debugger;
    return {
        companyURL: brand.COMPANY_URL,
        brandURL: brand.URL,
        brandName: brand.NAME,
        brandLogo: brand.LOGO,
        contactEmailId: "mailto:" + brand.CONTACT_PERSON_EMAIL_ID,
        version: "2.5",
        buildNo: "1000",
        lastReleaseDate: "01-Jan-2019"
    };
};

export default connect(mapStateToProps, { fetchSystemConfiguration })(AppFooter);
