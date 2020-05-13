import React from 'react';
import {shallow} from 'enzyme';

import InfiniteLoader from '../../../../../src/views/common/loader/infinite-loader';

describe('Infinite Loader', () => {
	const render = () => {
		return shallow(<InfiniteLoader/>);
	};
	const component = render();

	it('should have a overlay container div', () => {
		expect(component.is('div')).toBe(true);
        expect(component.hasClass('spinner loader')).toBe(true);
	});

	it('should have a spinners div', () => {
        [
            'rect1',
            'rect2',
            'rect3',
            'rect4',
            'rect5'
        ].forEach((className, index) => {
            expect(component.childAt(index).is('div')).toBe(true);
            expect(component.childAt(index).hasClass(className)).toBe(true);
        });
    });
});
