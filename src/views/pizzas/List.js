import React from 'react';
import PizzaItem from './PizzaItem';

const List = (props) => (
    <tbody>
    {props.pizzas.map((item, key) =>
        <PizzaItem
            key={key}
            index={key}
            pizza={item}
        />)
    }
    </tbody>
)


export default List;
