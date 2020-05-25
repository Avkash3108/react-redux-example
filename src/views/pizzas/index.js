import {connect} from 'react-redux';

import * as actions from '../../action-creators/actions';
import Container from '../common/container';

function mapStateToProps() {
    return {
        searchId: 'pizzas'
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteData: () => {
            dispatch(actions.deleteRecords('pizzas'));
        },
        loadData: () => {
            dispatch(actions.loadPizzaList());
        },
        loadMoreData: () => {
            dispatch(actions.loadMorePizzas());
        },
        resetState: () => {
            dispatch(actions.resetState());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
