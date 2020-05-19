import React from 'react';
import PropTypes from 'prop-types';

import Sort from './sort';

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

Header.displayName = 'Header';
Header.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSort: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired

};

export default Header;
