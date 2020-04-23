import React, {Component} from 'react';
import Headers from './headers';
import Row from './Row';

const DataTable = (props) => {
	return (
        <div 
            className={`flex-table ${props.searchId}`}
        >
            <Headers
                searchId={props.searchId}
            />
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

