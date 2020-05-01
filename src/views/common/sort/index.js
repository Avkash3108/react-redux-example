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
        onSorting: () => {
        	dispatch(actions.setSortOrder(ownProps.sortBy));
        	
        }
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
	return {
		...stateProps,
		...ownProps,
		onSorting: () => {
			dispatchProps.onSorting();
			ownProps.onSort();
		}
	};

}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Sort)