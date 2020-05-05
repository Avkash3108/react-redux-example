import {connect} from 'react-redux';
import DataTable from './data-table';
import {
	getServiceReducerKey,
	getLoadMoreDataReducerKey
} from '../../helpers';
import * as actions from '../../action-creators/actions';

function mapStateToProps(state, ownProps) {
    const initialFetchStatus = state.fetchStatus.serviceData[getServiceReducerKey(ownProps.searchId)];
    const dataLoading = initialFetchStatus === 'FETCHING' || initialFetchStatus === 'NA';

    return {
    	allDataFetched: state.allDataFetched,
    	dataLoading,
        data: state[ownProps.searchId],
        moreDataLoading: state.fetchStatus.serviceData[getLoadMoreDataReducerKey(ownProps.searchId)] === 'FETCHING'
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadData: () => {
            return {
                'pizzas': () => dispatch(actions.loadPizzaList()),
                'users': () => dispatch(actions.loadUserList())

            }[ownProps.searchId]();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)