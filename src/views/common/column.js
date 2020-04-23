import React from 'react';

const Column = (props) => (
    <div
        className={`${props.className}`}
    >
        {props.value}
    </div>
)

export default Column;
