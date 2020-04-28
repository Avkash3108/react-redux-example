import React, {Component} from 'react';
import Headers from './headers';
import Row from './Row';
import Sticky from 'react-stickynode';

const DataTable = (props) => {
	return (
        <div 
            className={`flex-table ${props.searchId}`}
        >
            <Sticky>
                <Headers
                    searchId={props.searchId}
                />
            </Sticky>
            {props.list.map((item, key) =>
                <Row
                    searchId={props.searchId}
                    key={key}
                    index={key + 1}
                    item={item}
                />)
            }
        </div>
    );

}

export default DataTable;

