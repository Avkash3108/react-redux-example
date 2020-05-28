import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import Alert from 'react-bootstrap/Alert';

const timeoutUnit = 1000;

class AlertContainer extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }

    componentDidMount() {
        if (this.props.alert.autoClose) {
            this.timer = setTimeout(() => {
                return this.props.onClose();
            }, this.props.alert.autoCloseTime * timeoutUnit);
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    render() {
        return (
            <div>
                {this.props.alert.blockUser
                    ? <div className={'alert-block-screen'}/>
                    : null
                }
                <Alert
                    dismissible={this.props.alert.dismissible}
                    onClose={this.props.onClose}
                    show={this.props.alert.isOpen}
                    variant={this.props.alert.alertType}
                >
                    <FormattedMessage
                        id={this.props.alert.message}
                        values={this.props.alert.values}
                    />
                </Alert>
            </div>
        );
    }
}

AlertContainer.defaultProps = {
    alert: {
        autoClose: true,
        autoCloseTime: 3,
        blockUser: false,
        dismissible: true
    }
};
AlertContainer.displayName = 'AlertContainer';
AlertContainer.propTypes = {
    alert: PropTypes.shape({
        alertType: PropTypes.string.isRequired,
        autoClose: PropTypes.bool.isRequired,
        autoCloseTime: PropTypes.number,
        blockUser: PropTypes.bool,
        dismissible: PropTypes.bool.isRequired,
        isOpen: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired,
        values: PropTypes.object
    }).isRequired,
    blockUser: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

export default AlertContainer;
