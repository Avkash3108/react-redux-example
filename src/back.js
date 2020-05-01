function renderTable(props) {
    let table;

    console.log('moreDataLoading' + props.moreDataLoading);
    if (props.data.length === 0) {
        table = props.dataLoading ? null : <span>No Records Found</span>;
    } else {
        table = (
            <Infinite
                {...getInfiniteSettings(props.allDataFetched)}
                isInfiniteloading={props.moreDataLoading}
                onInfiniteLoad={props.loadMoreData}
            >
                {props.data.map((item, key) =>
                    <Row
                        searchId={props.searchId}
                        key={item.id}
                        index={key + 1}
                        item={item}
                    />)
                }
            </Infinite>);
    }

    return table;
}
function getInfiniteSettings(allDataFetched) {
    const settings = {
        className: 'infinite-scroll',
        elementHeight: 55,
        loadingSpinnerDelegate: (<Loader/>),
        useWindowAsScrollContainer: true,
    };

    if (!allDataFetched) {
        settings.infiniteLoadBeginEdgeOffset = 55 * 10;
    }

    return settings;
}