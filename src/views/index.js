import {connect} from 'react-redux';
import * as actions from '../action-creators/actions';
import Container from './Container';

function mapStateToProps(state) {
	const { pizzas, filter, sortOrder } = state;
	const filteredList = pizzas.filter((pizza) => pizza.toLowerCase().startsWith(filter.toLowerCase()));
	      filteredList.sort(function (a, b) {
                return sortOrder == 'DESC' ? b.toLowerCase().localeCompare(a.toLowerCase()) : a.toLowerCase().localeCompare(b.toLowerCase());
            });
    return {
        loading: state.isLoading,
        pizzaList: filteredList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPizzaList: () => {
        	actions.loadPizzaList(dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)