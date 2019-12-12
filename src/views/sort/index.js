import {connect} from 'react-redux';
import * as actions from '../../action-creators/actions';
import Sort from './Sort';

function mapStateToProps(state) {
	const label = state.sortOrder === 'DESC' ? 'Sort Ascending' : 'Sort Descending';

    return {
        label,
        sortOrder: state.sortOrder
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSort: (sortOrder) => {
        	dispatch(actions.setSortOrder(sortOrder));
        }
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(Sort)