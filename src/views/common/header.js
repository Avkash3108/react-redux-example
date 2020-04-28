import React from 'react';
import Sort from './sort'

const Header = (props) => {
	return (
        <div
            className={props.className}
        >
            {props.label}
            <Sort
                sortBy={props.sortBy}
            />

        </div>
    );
};

export default Header;
