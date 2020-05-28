import {connect} from 'react-redux';

import Notifications from './notifications';

function mapStateToProps(state) {
    return {
        alerts: state.fetchStatus.alerts
    };
}

export default connect(mapStateToProps)(Notifications);
