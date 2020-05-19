import React from 'react';
import {
    createRoutes,
    Route
} from 'react-router';

import AppProvider from '../../views/app-provider';
import Pizzas from '../../views/pizzas/index';
import Users from '../../views/users/index';

export function getRoutes() {
    return createRoutes(
        <Route
            component={AppProvider}
            path='/'
        >
            <Route
                component={Pizzas}
                path='pizzas'
            />
            <Route
                component={Users}
                path='users'
            />
        </Route>
    );
}
