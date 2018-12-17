import AppSideMenu from './sideMenu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    EditContract,
    ViewContract,
    CreateContract,
    EditProject,
    CreateProject,
    CreateProfile,
    EditViewTechnicalSpecialist 
} from './sideMenuAction';

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
            EditContract,
            ViewContract,
            CreateContract,
            EditProject,
            CreateProject,
            CreateProfile,
            EditViewTechnicalSpecialist
            },
            dispatch
        ),
    };
};

export default connect(null,mapDispatchToProps)(AppSideMenu);