import React from 'react';

const User = (props) => (
    <div
        className={'flex-row'}
    >
        <div className={'flex-cell sno'}>{props.index}</div>
        <div className={'flex-cell first-name'}>{props.user.firstName}</div>
        <div className={'flex-cell last-name'}>{props.user.lastName}</div>
        <div className={'flex-cell email'}>{props.user.email}</div>
    </div>
)

export default User;
