import {connect} from 'react-redux';
import DataTable from './data-table';
import {filterList} from '../../services'

function mapStateToProps(state, ownProps) {
	const {filter, sortOrder } = state;
    let itemsList = state[ownProps.searchId];

	itemsList = filterList(itemsList, filter);
    return {
        list: itemsList
    }
}

export default connect(mapStateToProps)(DataTable)