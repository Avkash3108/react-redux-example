import React, {Component} from 'react';
import Headers from './headers';
import Row from './Row';
import Sticky from 'react-stickynode';
import Infinite from 'react-infinite';
import InfiniteScroll from 'react-infinite-scroller';
import InfiniteLoader from '../loader/infinite-loader';
import Filter from '../filter';

function renderTable(props) {
    let table;

    if (props.data.length === 0) {
        table = props.dataLoading ? null : <span>No Records Found</span>;
    } else {
        table = (
            <InfiniteScroll
                pageStart={0}
                loader={<InfiniteLoader key={'infinite-loader'}/>}
                hasMore={props.moreDataLoading ? false : !props.allDataFetched}
                loadMore={props.loadMoreData}
                threshold={500}
                initialLoad={true}
            >
                {props.data.map((item, key) =>
                    <Row
                        searchId={props.searchId}
                        key={`${item.id}_${key}`}
                        item={item}
                    />)
                }
            </InfiniteScroll>);
    }

    return table;
}

const DataTable = (props) => {
	return (
        <div 
            className={`flex-table ${props.searchId}`}
        >
            <Filter
                onFilter={props.loadData}
            />
            <Sticky>
                <Headers
                    onSort={props.loadData}
                    searchId={props.searchId}
                />
            </Sticky>
            {renderTable(props)}
        </div>
    );

}

export default DataTable;
