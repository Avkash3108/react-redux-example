import {connect} from 'react-redux';
import DataTable from './data-table';
import {filterList} from '../../services'

function mapStateToProps(state, ownProps) {
	const {filter, sort} = state;
    let itemsList = state[ownProps.searchId].slice(0);

	itemsList = filterList(itemsList, sort);
    return {
        list: itemsList
    }
}

export default connect(mapStateToProps)(DataTable)