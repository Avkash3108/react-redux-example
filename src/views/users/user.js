import React from 'react';

const PizzaItem = (props) => (
    <tr>
        <td>{props.index}</td>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.email}</td>
    </tr>
)

export default PizzaItem;
