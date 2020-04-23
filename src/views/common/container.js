import React from 'react';
import Loader from '../loader/loader';
import Filter from '../filter';
import Sort from '../sort';
import DataTable from './index';

class Container extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
     this.props.loadData();
    }
    
    render() {
        return <div>
            {this.props.loading ? <Loader/> :
                <div className={'table-container'}>
                	<Filter/>
                    <Sort/>
                    <DataTable searchId={this.props.searchId}/>
                </div>
            }
        </div>;
    }
}


export default Container;
