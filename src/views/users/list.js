import React from 'react';
import User from './user';

const List = (props) => (
    <tbody>
    {props.users.map((item, key) =>
        <User
            key={key}
            index={key}
            user={item}
        />)
    }
    </tbody>
)


export default List;
