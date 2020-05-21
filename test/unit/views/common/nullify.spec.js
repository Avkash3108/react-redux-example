import React from 'react';
import {shallow} from 'enzyme';
import Chance from 'chance';

import {nullify} from '../../../../src/views/common/nullify';

const chance = new Chance();

describe('Nullify', () => {
    const MockComponentClass = () => (<div/>);

    let ComponentClass, component, props, nullifyStub;

    beforeEach(() => {
        nullifyStub = jest.fn();

        props = Object.freeze({
            any: 'thing'
        });

        ComponentClass = nullify(MockComponentClass, nullifyStub);
    });

    afterEach(() => {});

    function getRenderedGeneratedComponent(bool, theProps) {
        nullifyStub.mockReturnValue(bool);

        return shallow(<ComponentClass {...theProps}/>);
    }

    it('should use the props to determine if the component should be nullified', () => {
        const randomBool = chance.bool();

        getRenderedGeneratedComponent(randomBool, props);

        expect(nullifyStub).toHaveBeenCalledTimes(1);
        expect(nullifyStub).toHaveBeenCalledWith(props);
    });

    it('should render null if the provided function returns true', () => {
        component = getRenderedGeneratedComponent(true, props);

        expect(component.type()).toBeNull();
    });

    it('should render the component if the provided function returns false', () => {
        component = getRenderedGeneratedComponent(false, props);

        expect(component.type()).toStrictEqual(MockComponentClass);
        expect(component.props()).toStrictEqual(props);
    });
});
