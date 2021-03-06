import React from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import InfiniteScroll from 'react-infinite-scroller';

import InfiniteLoader from './loader/infinite-loader';
import Headers from './headers';
import Row from './row';

const getHasMoreProp = (props) => {
    return props.moreDataLoading ? false : !props.allDataFetched;
};

function renderTable(props) {
    let table;

    if (props.data.length === 0) {
        table = props.dataLoading ? null : <span>No Records Found</span>;
    } else {
        table = (
            <InfiniteScroll
                pageStart={0}
                loader={<InfiniteLoader key={'infinite-loader'}/>}
                hasMore={getHasMoreProp(props)}
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
            <Sticky>
                <Headers
                    onSort={props.loadData}
                    searchId={props.searchId}
                />
            </Sticky>
            {renderTable(props)}
        </div>
    );
};

DataTable.displayName = 'DataTable';
DataTable.propTypes = {
    allDataFetched: PropTypes.bool,
    data: PropTypes.array.isRequired,
    dataLoading: PropTypes.bool.isRequired,
    loadData: PropTypes.func.isRequired,
    loadMoreData: PropTypes.func.isRequired,
    moreDataLoading: PropTypes.bool,
    searchId: PropTypes.string.isRequired

};

export default DataTable;
