import React from 'react';
import {Link} from 'react-router';

import {FormattedMessage} from 'react-intl';

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
                    <FormattedMessage id={'PIZZA'}/>
                </Link>

            </li>
            <li>
                <Link
                    activeClassName={'active'}
                    to={'/users'}
                >
                    <FormattedMessage id={'USER'}/>
                </Link>
            </li>
        </ul>
    );

}

export default Tabs;

