import React from 'react';

function onChange(props,event) {
	props.onFilter(event.target.value);
}

const Filter = (props) => (
	<div className={'filter'}>
	<label>{props.label}</label>
    <input type='text' onChange={onChange.bind(this, props)} name='filter'/>
    </div>
);

export default Filter;
