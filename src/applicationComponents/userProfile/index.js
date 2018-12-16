import userProfile from './userProfile';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { brand } from 'appConstants';

function mapStateToProps(state) {
    return {
        userDetails: state.tatvamStore.user,
        
    };
}

export default connect(mapStateToProps, { fetchUser })(userProfile);
