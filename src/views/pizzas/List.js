import React from 'react';
import PizzaItem from './PizzaItem';

const List = (props) => (
    <tbody>
    {(props.pizzas === undefined || props.pizzas.length == 0) ? null : props.pizzas.map((item, key) =>
        <PizzaItem key={key} index={key}
                             pizza={item}/>)}

    </tbody>
)


export default List;
