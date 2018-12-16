import { connect } from 'react-redux';
import sideMenu from './sideMenu';
import { fetchUserCustomerPermissions } from '../../actions';

function mapStateToProps(state) {
    return {              
        menus :  state.tatvamStore.menus
    };
}

export default connect(mapStateToProps, { fetchUserCustomerPermissions })(sideMenu);
