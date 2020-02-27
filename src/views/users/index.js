import {connect} from 'react-redux';
import * as actions from '../../action-creators/actions';
import Container from './container';

function mapStateToProps(state) {
	const { users, filter, sortOrder } = state;
	const filteredList = users.filter((user) => user.firstName.toLowerCase().includes(filter.toLowerCase()) || user.lastName.toLowerCase().includes(filter.toLowerCase()));
	      filteredList.sort(function (a, b) {
                return sortOrder == 'DESC' ? b.firstName.toLowerCase().localeCompare(a.firstName.toLowerCase()) : a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
            });
    return {
        loading: state.isLoading,
        userList: filteredList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserList: () => {
        	dispatch(actions.loadUserList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)