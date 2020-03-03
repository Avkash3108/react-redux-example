import React from 'react';

const Header = (props) => (
    <div
        className={'flex-row header'}
    >
        <div className="flex-cell sno">S. No.</div>
        <div className="flex-cell first-name">First Name</div>
        <div className="flex-cell last-name">Last Name</div>
        <div className="flex-cell email">E-mail</div>
    </div>
)

export default Header;
