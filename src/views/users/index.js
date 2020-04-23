import {connect} from 'react-redux';
import * as actions from '../../action-creators/actions';
import Container from '../common/container';

function mapStateToProps(state) {
    return {
        loading: state.isLoading,
        searchId: 'users'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
        	dispatch(actions.loadUserList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)