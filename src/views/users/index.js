import {connect} from 'react-redux';
import * as actions from '../../action-creators/actions';
import Container from '../common/container';

function mapStateToProps(state) {
    return {
        searchId: 'users'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
        	dispatch(actions.loadUserList())
        },
        loadMoreData: () => {
        	dispatch(actions.loadMoreUsers())
        },
        resetState: () => {
            dispatch(actions.resetState());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)