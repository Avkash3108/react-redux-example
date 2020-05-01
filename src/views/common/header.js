import React from 'react';
import Sort from './sort'

import {FormattedMessage} from 'react-intl';

const Header = (props) => {
	return (
        <div
            className={props.className}
        >
            <FormattedMessage id={props.label}/>
            <Sort
                onSort={props.onSort}
                sortBy={props.sortBy}
            />

        </div>
    );
};

export default Header;
