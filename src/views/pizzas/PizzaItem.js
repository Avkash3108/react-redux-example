import React from 'react';

const PizzaItem = (props) => (
    <tr>
        <td>{props.index}</td>
        <td>{props.pizza}</td>
    </tr>
)

export default PizzaItem;
