import React from 'react';
import PropTypes from 'prop-types';

function onChangeCheckbox(props) {
    props.onChange();
}

const Checkbox = (props) => (
    <div className={`react-checkbox ${props.className}`}>
        <input
            checked={props.checked}
            id={props.id}
            className={'hidden-checkbox'}
            type='checkbox'
            onChange={onChangeCheckbox.bind(null, props)}
        />
        <label htmlFor={props.id} className={props.checked ? 'style-checkbox checked' : 'style-checkbox'}>
            <svg
                className={'icon-checked'}
                viewBox='0 0 24 24'
            >
                <polyline points='20 6 9 17 4 12'/>
            </svg>
            {props.children}
        </label>
    </div>
);

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
