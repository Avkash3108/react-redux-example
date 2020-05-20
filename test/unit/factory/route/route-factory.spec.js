import {match} from 'react-router';

import AppProvider from '../../../../src/views/app-provider';
import Pizzas from '../../../../src/views/pizzas/index';
import Users from '../../../../src/views/users/index';
import * as routeFactory from '../../../../src/factory/route/route-factory';

function assertionOnRoutes(location, assertion) {
    match(
        {
            location,
            routes: routeFactory.getRoutes()
        },
        assertion
    );
}

describe('App routes', () => {
    it('should render the app provider at the root of the component hierarchy', () => {
        const location = '/';

        assertionOnRoutes(
            location,
            (error, redirectLocation, renderProps) => {
                const expectedComponentIndex = 0;

                expect(renderProps.components[expectedComponentIndex]).toStrictEqual(AppProvider);
            }
        );
    });

    it('should render the pizzas container when location is /pizzas', () => {
        const location = '/pizzas';

        assertionOnRoutes(
            location,
            (error, redirectLocation, renderProps) => {
                const expectedComponentIndex = 1;

                expect(renderProps.components[expectedComponentIndex]).toStrictEqual(Pizzas);
            }
        );
    });

    it('should render the users container when location is /users', () => {
        const location = '/users';

        assertionOnRoutes(
            location,
            (error, redirectLocation, renderProps) => {
                const expectedComponentIndex = 1;

                expect(renderProps.components[expectedComponentIndex]).toStrictEqual(Users);
            }
        );
    });
});
