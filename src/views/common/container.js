import React from 'react';
import FullPageLoader from '../loader';
import Tabs from './tabs/tabs';
import DataTable from './data-table-connector';

class Container extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
     this.props.loadData();
    }

    componentWillUnmount() {
        this.props.resetState();
    }
    
    render() {
        return (
            <div className={'table-container'}>
                    <Tabs/>
                    <DataTable
                        searchId={this.props.searchId}
                        loadMoreData={this.props.loadMoreData}
                    />
                    <FullPageLoader
                        dataToCheck={['fetchPizzas', 'fetchUsers']}
                    />
            </div>
        )
    }
}


export default Container;
