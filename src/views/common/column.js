import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => (
    <div
        className={`${props.className}`}
    >
        {props.value}
    </div>
)

Column.displayName = 'Column';
Column.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired

};

export default Column;
