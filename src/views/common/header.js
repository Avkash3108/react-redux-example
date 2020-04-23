import React from 'react';

const Header = (props) => {
	return (
        <div
            className={props.className}
        >
            {props.label}
        </div>
    );
};

export default Header;
