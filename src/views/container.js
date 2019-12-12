import fetch from 'isomorphic-fetch';
import React from 'react';
import Loader from './loader/loader';
import Filter from './filter';
import Sort from './sort';
import Pizzas from './pizzas/Pizzas';

class Container extends React.Component { 
    constructor(props) {
        super(props);
    }

    componentDidMount() {
     this.props.loadPizzaList();
    }
    
    render() {
        return <div>
            {this.props.loading ? <Loader/> :
                <div>
                	<Filter/>
                    <Sort/>
                    <Pizzas pizzas={this.props.pizzaList}/>
                </div>
            }
        </div>;
    }
}


export default Container;
