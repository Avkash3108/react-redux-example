import React from 'react';
import PropTypes from 'prop-types';

import FullPageLoader from './loader';
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
                    servicesToCheck={['fetchPizzas', 'fetchUsers']}
                />
            </div>
        );
    }
}

Container.displayName = 'Container';
Container.propTypes = {
    loadData: PropTypes.func.isRequired,
    loadMoreData: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    searchId: PropTypes.string.isRequired

};

export default Container;
