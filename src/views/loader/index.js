import {connect} from 'react-redux';
import FullPageLoader from './full-page-loader';

function mapStateToProps(state, ownProps) {
    const isLoading = ownProps.dataToCheck.some((service) => {
        return state.fetchStatus.serviceData[service] === 'FETCHING'
    });
    return {
        isLoading
    }
}

export default connect(mapStateToProps)(FullPageLoader)