import React, {Component} from 'react';
import Header from './Header';
import List from './List';

const Pizzas = (props) => {
	return (
        <table>
            <Header/>
            <List pizzas={props.pizzas}/>
        </table>
    );

}

export default Pizzas;

