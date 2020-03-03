import React, {Component} from 'react';
import Header from './header';
import User from './User';

const Users = (props) => {
	return (
        <div 
            className={'flex-table user'}
        >
            <Header/>
            {props.users.map((item, key) =>
                <User
                    key={key}
                    index={key + 1}
                    user={item}
                />)
            }
        </div>
    );

}

export default Users;

