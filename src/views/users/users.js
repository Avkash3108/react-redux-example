import React, {Component} from 'react';
import Header from './header';
import List from './list';

const Users = (props) => {
	return (
        <table>
            <Header/>
            <List users={props.users}/>
        </table>
    );

}

export default Users;

