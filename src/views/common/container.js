import React from 'react';
import Loader from '../loader';
import Tabs from './tabs/tabs';
import DataTable from './index';

class Container extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
     this.props.loadData();
    }
    
    render() {
        return (
            <div className={'table-container'}>
                    <Tabs/>
                    <DataTable searchId={this.props.searchId}/>
                    <Loader
                        dataToCheck={['fetchPizzas', 'fetchUsers']}
                    />
            </div>
        )
    }
}


export default Container;
