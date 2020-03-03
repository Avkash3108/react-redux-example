import React from 'react';

const Pizza = (props) => (
    <div
        className={'flex-row'}
    >
        <div className={'flex-cell sno'}>{props.index}</div>
        <div className={'flex-cell pizza-name'}>{props.pizza}</div>
    </div>
)

export default Pizza;
