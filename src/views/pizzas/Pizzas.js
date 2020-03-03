import React, {Component} from 'react';
import Header from './header';
import Pizza from './pizza';

const Pizzas = (props) => {
	return (
        <div 
            className={'flex-table pizza'}
        >
            <Header/>
            {props.pizzas.map((item, key) =>
                <Pizza
                    key={key}
                    index={key + 1}
                    pizza={item}
                />)
            }
        </div>
    );

}

export default Pizzas;


