import React from 'react';

function onClick(props) {
	props.onSort(props.sortOrder);
}

const Sort = (props) => (
    <button onClick={onClick.bind(this, props)}>
        {props.label}
    </button>
);

export default Sort;
