import React from 'react';
import PropTypes from 'prop-types';

import {
    cleanDataClass,
    getDataKeys
} from '../../helpers';
import Column from './column';
import Checkbox from './checkbox';

const Row = (props) => {
    return (
        <div
            className={'flex-row'}
        >
            <Column
                className={'flex-cell checkbox'}
                key={`${props.item.id}-${props.searchId}`}
            >
                <Checkbox
                    id={props.item.id}
                />
            </Column>
            {getDataKeys(props.searchId).map((value, index) =>
                <Column
                    className={`flex-cell ${cleanDataClass(value)}`}
                    key={`${props.item.id}-${index}`}
                >
                    {props.item[value]}
                </Column>
            )}
        </div>
    );
};

Row.displayName = 'Row';
Row.propTypes = {
    item: PropTypes.object.isRequired,
    searchId: PropTypes.string.isRequired

};

export default Row;
