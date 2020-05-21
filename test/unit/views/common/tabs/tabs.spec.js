import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router';
import {FormattedMessage} from 'react-intl';

import Tabs from '../../../../../src/views/common/tabs/tabs';

describe('Tabs Component', () => {
    const render = () => {
        return shallow(<Tabs/>);
    };
    const component = render();

    it('should have a tab container ul', () => {
        expect(component.is('ul')).toBe(true);
        expect(component.hasClass('tabs')).toBe(true);
    });

    it('should render tabs', () => {
        [
            {
                link: '/pizzas',
                title: 'PIZZA'
            },
            {
                link: '/users',
                title: 'USER'
            }
        ].forEach((tab, index) => {
            const tabLinkContainer = component.childAt(index);
            const tabLink = tabLinkContainer.childAt(0);
            const tabLinkTitle = tabLink.childAt(0);

            expect(tabLinkContainer.is('li')).toBe(true);
            expect(tabLink.type()).toStrictEqual(Link);
            expect(tabLink.props().activeClassName).toStrictEqual('active');
            expect(tabLink.props().to).toStrictEqual(tab.link);
            expect(tabLinkTitle.type()).toStrictEqual(FormattedMessage);
            expect(tabLinkTitle.props().id).toStrictEqual(tab.title);
        });
    });
});
