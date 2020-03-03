import React from 'react';
import Loader from '../loader/loader';
import Filter from '../filter';
import Sort from '../sort';
import Pizzas from './Pizzas';

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
                <div className={'table-container'}>
                	<Filter/>
                    <Sort/>
                    <Pizzas pizzas={this.props.pizzaList}/>
                </div>
            }
        </div>;
    }
}


export default Container;
