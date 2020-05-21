import React from 'react';
import PropTypes from 'prop-types';

import {
    cleanHeaderClass,
    getDataKeys,
    getHeaderKeys
} from '../../helpers';
import Header from './header';

const Headers = (props) => {
    const dataKeys = getDataKeys(props.searchId);

    return (
        <div
            className={'flex-row header'}
        >
            {getHeaderKeys(props.searchId).map((label, index) =>
                <Header
                    className={`flex-cell ${cleanHeaderClass(label)}`}
                    label={label}
                    onSort={props.onSort}
                    key={`${label}${index}`}
                    sortBy={dataKeys[index]}
                />
            )}
        </div>
    );
};

Headers.displayName = 'Headers';
Headers.propTypes = {
    onSort: PropTypes.func.isRequired,
    searchId: PropTypes.string.isRequired

};

export default Headers;
