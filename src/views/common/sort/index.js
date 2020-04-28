import {connect} from 'react-redux';
import * as actions from '../../../action-creators/actions';
import Sort from './Sort';

function mapStateToProps(state, ownProps) {
    return {
        sortOrder: state.sort.sortBy === ownProps.sortBy ? state.sort.sortOrder : ''
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSort: () => {
        	dispatch(actions.setSortOrder(ownProps.sortBy));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)