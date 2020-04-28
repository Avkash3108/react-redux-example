import React from 'react';
import {Link} from 'react-router';

const Tabs = (props) => {
	return (
        <ul 
            className={'tabs'}
        >
            <li>
                <Link
                    activeClassName={'active'}
                    to={'/pizzas'}
                >
                    {'PIZZA'}
                </Link>

            </li>
            <li>
                <Link
                    activeClassName={'active'}
                    to={'/users'}
                >
                    {'USER'}
                </Link>
            </li>
        </ul>
    );

}

export default Tabs;

