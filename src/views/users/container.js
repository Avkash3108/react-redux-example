import React from 'react';
import Loader from '../loader/loader';
import Filter from '../filter';
import Sort from '../sort';
import Users from './users';

class Container extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
     this.props.loadUserList();
    }
    
    render() {
        return <div>
            {this.props.loading ? <Loader/> :
                <div>
                	<Filter/>
                    <Sort/>
                    <Users users={this.props.userList}/>
                </div>
            }
        </div>;
    }
}


export default Container;
