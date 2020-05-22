import React from 'react';
import PropTypes from 'prop-types';

function onChange(props, event) {
    props.onFilter(event.target.value);
}

const Filter = (props) => (
    <div className={'filter'}>
        <label>{props.label}</label>
        <input
            name='filter'
            type='text'
            onChange={onChange.bind(null, props)}
        />
    </div>
);

Filter.displayName = 'Filter';
Filter.propTypes = {
    label: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired

};

export default Filter;