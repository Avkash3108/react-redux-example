import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => (
    <div
        className={`${props.className}`}
    >
        {props.children}
    </div>
);

Column.displayName = 'Column';
Column.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired
};

export default Column;
