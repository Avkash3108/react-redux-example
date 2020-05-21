import React from 'react';
import {shallow} from 'enzyme';

import FullPageLoader from '../../../../../src/views/common/loader/full-page-loader';

describe('Full Page Loader Component', () => {
    let component, props;
    const render = () => {
        component = shallow(<FullPageLoader {...props}/>);
    };

    beforeEach(() => {
        props = {};
    });

    describe('Given isLoading prop is false', () => {
        beforeEach(() => {
            props.isLoading = false;
            render();
        });

        it('should not render anything', () => {
            expect(component.type()).toBeNull();
        });
    });

    describe('Given isLoading prop is true', () => {
        beforeEach(() => {
            props.isLoading = true;
            render();
            component = component.dive();
        });

        it('should have a overlay container div', () => {
            expect(component.is('div')).toBe(true);
            expect(component.hasClass('full-page-loader')).toBe(true);
        });

        it('should have a container div to hold spinners', () => {
            const spinnerContainer = component.childAt(0);

            expect(spinnerContainer.is('div')).toBe(true);
            expect(spinnerContainer.hasClass('spinner')).toBe(true);
        });

        it('should have a spinners div', () => {
            const spinnerContainer = component.childAt(0);

            [
                'rect1',
                'rect2',
                'rect3',
                'rect4',
                'rect5'
            ].forEach((className, index) => {
                expect(spinnerContainer.childAt(index).is('div')).toBe(true);
                expect(spinnerContainer.childAt(index).hasClass(className)).toBe(true);
            });
        });
    });
});
