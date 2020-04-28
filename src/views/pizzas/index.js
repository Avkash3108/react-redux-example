import {connect} from 'react-redux';
import * as actions from '../../action-creators/actions';
import Container from '../common/container';

function mapStateToProps(state) {
    return {
        searchId: 'pizzas'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadData: () => {
        	dispatch(actions.loadPizzaList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)