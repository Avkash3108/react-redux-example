import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

const Button = (props) => (
    <button
        className={props.className}
        disabled={props.disabled}
        onClick={props.onClick}
        type='button'
    >
        <FormattedMessage id={props.label}/>
    </button>
);

Button.displayName = 'Button';
Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
