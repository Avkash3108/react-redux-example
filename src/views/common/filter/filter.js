import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

function onChange(props, event) {
    props.onFilter(event.target.value);
}

const Filter = (props) => (
    <div className={'filter'}>
        <FormattedMessage id={props.label}/>
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
